import React, { Component } from "react";
import "./App.css";
import logo from './assets/logo.png';
import girlheart from './assets/girlheart.png';


class App extends Component {
  render() {
    return (
      <div>
        <div class="logo">
          {/* <img
            src={logo}
            alt="filled with love - a design agency for startups"
          /> */}
          <h1>Filled With 💜</h1>
          <p>A design agency for startups</p>
        </div>

        <div class="girlheart">
          <img src={girlheart} />
        </div>
      </div>
    );
  }
}

export default App;
