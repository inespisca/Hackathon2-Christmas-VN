import React, { Component } from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import story from "./story/story";
import choices from "./story/choices";
import TitleScreen from "./components/TitleScreen";
import ChoiceMenu from "./components/ChoiceMenu";
import RenderFrame from "./components/RenderFrame";
import MenuButtons from "./components/MenuButtons";
import "./styles/container.css";
import "./styles/choicesoverlay.css";
import "./styles/effects.css";
import "./styles/menubuttons.css";
import "./styles/sprites.css";
import "./styles/textbox.css";
import "./styles/titlescreen.css";
import "./styles/transitions.css";

const INITIAL_STATE = {
  font: "Trebuchet MS",
  choicesStore: {},
  index: 0,
  stateHistory: [],
  choicesHistory: [],
  choicesIndexHistory: [],
  indexHistory: [],
  choicesExist: false,
  titleScreenShown: true,
  frameIsRendering: false,
  textBoxShown: true,
};
// Default state values

class App extends Component {
  constructor() {
    super();
    this.setFrame = this.setFrame.bind(this);
    this.state = INITIAL_STATE;
  }
  // Freame values

  setFrameFromChoice(choice, routeBegins) {
    for (let i = 0; i < story.length; i++) {
      if (routeBegins === story[i].routeBegins) {
        this.setFrame(i);
      }
    }
    // for loop for choices

    let choicesStore = { ...this.state.choicesStore };
    choicesStore[choice]++ || (choicesStore[choice] = 1);
    this.setState({ choicesStore });
  }
  // storing choices in the browser's memory

  setNextFrame() {
    const currentIndex = this.state.index;
    const jumpToBecauseStore = story[currentIndex].jumpToBecauseStore;
    if (story[currentIndex].jumpToBecauseStore) {
      for (let i = 0; i < story.length; i++) {
        if (story[i].receiveJumpBecauseStore) {
          if (
            jumpToBecauseStore === story[i].receiveJumpBecauseStore[0] &&
            this.state.choicesStore[jumpToBecauseStore] === story[i].receiveJumpBecauseStore[1]
          ) {
            this.setFrame(i);
            return;
          }
        }
      }
    }
    // jumping to the next quote

    if (story[currentIndex].jumpTo) {
      if (story[currentIndex].jumpTo === "title-screen") {
        this.setState(INITIAL_STATE);
        return;
      }
      for (let i = 0; i < story.length; i++) {
        if (story[currentIndex].jumpTo === story[i].receiveJump) {
          this.setFrame(i);
          return;
        }
      }
    }
    if (
      !this.state.choicesExist &&
      !this.state.titleScreenShown
    ) {
      this.setFrame(currentIndex + 1);
    }
  }

  setFrame(index) {
    // Makes sure the index is within the story array
    if (index >= story.length) {
      index = story.length - 1;
    } else if (index <= -1) {
      index = 0;
    }
    // Updates story with new index
    this.setState({
      index: index,
      bg: story[index].bg,
      bgm: story[index].bgm,
      choicesExist: story[index].choicesExist,
      sprite: story[index].sprite,
      spriteEffect: story[index].spriteEffect,
      spriteTransition: story[index].spriteTransition,
      spriteLeft: story[index].spriteLeft,
      spriteLeftEffect: story[index].spriteLeftEffect,
      spriteLeftTransition: story[index].spriteLeftTransition,
      spriteRight: story[index].spriteRight,
      spriteRightEffect: story[index].spriteRightEffect,
      spriteRightTransition: story[index].spriteRightTransition,
      text: story[index].text,
      bgTransition: story[index].bgTransition,
      voice: story[index].voice
    });
  }

  renderFrame() {
    return (
      <RenderFrame
        font={this.state.font}
        setNextFrame={this.setNextFrame.bind(this)}
        bg={this.state.bg}
        sprite={this.state.sprite}
        spriteEffect={this.state.spriteEffect}
        spriteTransition={this.state.spriteTransition}
        spriteLeft={this.state.spriteLeft}
        spriteLeftEffect={this.state.spriteLeftEffect}
        spriteLeftTransition={this.state.spriteLeftTransition}
        spriteRight={this.state.spriteRight}
        spriteRightEffect={this.state.spriteRightEffect}
        spriteRightTransition={this.state.spriteRightTransition}
        speaker={this.state.speaker}
        text={this.state.text}
        textBoxShown={this.state.textBoxShown}
        bgTransition={this.state.bgTransition}
      />
    );
  }
  // passing props to RenderFrame

  setChoice(choicesIndex) {
    // Makes sure the index is within the Choices array
    if (choicesIndex >= choices.length) {
      choicesIndex = choices.length - 1;
    } else if (choicesIndex <= -1) {
      choicesIndex = 0;
    }

    this.setState({
      choicesIndex: choicesIndex,
      choiceOptions: choices[choicesIndex].choices
    });
  }

  handleChoiceSelected(event) {
    this.setFrameFromChoice(event.currentTarget.name, event.currentTarget.alt);
    let nextIndex = 0;
    if (event.currentTarget.id) {
      this.setState({ choicesStore: {} });
    }
    if (event.currentTarget.placeholder) {
      nextIndex = parseInt(event.currentTarget.placeholder, 10);
    } else {
      nextIndex = this.state.choicesIndex + 1;
    }
    this.setChoice(nextIndex);
  }

  renderChoiceMenu() {
    return (
      <ChoiceMenu choiceOptions={this.state.choiceOptions} onChoiceSelected={this.handleChoiceSelected.bind(this)} />
    );
  }

  toggleTextBox() {
    this.setState(prevState => ({
      textBoxShown: !prevState.textBoxShown
    }));
  }

  beginStory() {
    this.setState({
      titleScreenShown: false,
      frameIsRendering: true
    });
    this.setFrame(0);
    this.setState({
      choicesIndex: 0,
      choiceOptions: choices[0].choices
    });
  }

  titleScreen() {
    return <TitleScreen beginStory={this.beginStory.bind(this)} />;
  }

  renderMenuButtons() {
    return (
      <MenuButtons
        menuButtonsShown={this.state.menuButtonsShown}
        setNextFrame={this.setNextFrame.bind(this)}
        toggleTextBox={this.toggleTextBox.bind(this)}
        textBoxShown={this.state.textBoxShown}
      />
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index < this.state.index) {
      this.setState({
        choicesHistory: [...this.state.choicesHistory, prevState.choicesStore],
        choicesIndexHistory: [...this.state.choicesIndexHistory, prevState.choicesIndex],
        indexHistory: [...this.state.indexHistory, prevState.index]
      });
    }
  }

  render() {
    let zoomMultiplier = 0;
    if (window.innerWidth * 1 / window.innerHeight <= 1280 * 1 / 720) {
      zoomMultiplier = window.innerWidth * 1 / 1280;
    } else {
      zoomMultiplier = window.innerHeight * 1 / 720;
    }

    return (
        <CSSTransitionGroup
          className="container"
          component="div"
          transitionName="menu"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {this.state.titleScreenShown ? this.titleScreen() : null}
          {this.state.frameIsRendering ? this.renderFrame() : null}
          {/* GUI menu buttons */}
          {this.state.frameIsRendering ? this.renderFrame() : null}
          {this.state.choicesExist ? this.renderChoiceMenu() : null}
        </CSSTransitionGroup>
    );
  }
}

export default App;
