import React from "react";

function TitleScreen(props) {
  return (
    <div className="overlay" id="title-overlay">
      <div id="title-screen-header">
        <div id="logo">Hackathon 2 - Christmas</div>
        <div id="subtitle">A Visual Novel written and coded by Inês Oliveira,</div>
        <div id="subtitle">Wild Code School, Lisbon (September 2019 fulltime)</div>
        <ul id="menu">
          <li>
            <span onClick={props.beginStory}>Begin</span>
          </li>
          <li>
          <span>
              <a href="https://github.com/nashkenazy/generic-vn" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TitleScreen;
