import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Netra Pradhan</h1>
        </div>
      <div className="LinkBar">
        <header className="Links">
          <p className="home">
            Home
          </p>
          <p className="about">
            About 
          </p>
          <p className="experience">
            Experience
          </p>
          <p className="contact">
            Contact
          </p>
        </header>
      </div>
      </div>
    );
  }
}

export default App;
