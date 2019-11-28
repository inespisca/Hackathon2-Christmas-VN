import React from "react";

function TitleScreen(props) {
  return (
    <div className="overlay" id="title-overlay">
      <div id="title-screen-header">
        <div id="logo">Hackathon 2 -</div><div id="logo">Christmas</div>
        <div id="subtitle">A Visual Novel written, doodled and coded by Inês Pisca Oliveira,</div>
        <div id="subtitle">Wild Code School, Lisbon (September 2019 fulltime)</div>
        <ul id="menu">
          <li>
            <span onClick={props.beginStory}>>>> Let's Start</span>
          </li>
          <li>
          <span>
              <a href="https://github.com/inespisca/Hackathon2-Christmas-VN">
                >>> Github
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TitleScreen;
