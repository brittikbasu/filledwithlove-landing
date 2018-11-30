import React, { Component } from "react";
import "./App.css";
import girlheart from "./assets/girlheart.png";
import { Spring, config } from "react-spring";

class App extends Component {
  render() {
    return (
      <div>
        <Spring
          config={config.gentle}
          from={{ opacity: 0, marginTop: "0vh" }}
          to={{ opacity: 1, marginTop: "15vh" }}
        >
          {props => (
            <div class="logo" style={props}>
              <h1>Filled With 💜</h1>
              <p>A design agency for startups</p>
            </div>
          )}
        </Spring>

        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => (
            <div class="girlheart" style={props}>
              <img src={girlheart} />
            </div>
          )}
        </Spring>
      </div>
    );
  }
}

export default App;
