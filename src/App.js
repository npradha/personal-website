import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import './App.css'

import About from "./About"
import Experience from "./Experience"
import Contact from "./Contact"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Netra Pradhan</h1>
        </div>
        <ul className="Links">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/experience">Experience</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
      </ul>
      <Switch>
          <Route path="/home" component={App}/>
          <Route path="/about" component={About}/>
          <Route path="/experience" component={Experience}/>
          <Route path="/contact" component={Contact}/>>
        </Switch>
      </div>
    );
  }
}

export default App;
