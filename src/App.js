import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import './App.css'

import Home from "./Home"
import About from "./About"
import Experience from "./Experience" 
import Contact from "./Contact"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">netra pradhan</h1>
        </div>
        <div className="links">
          <ul className="navLinks">
            <li><NavLink exact to="/">home</NavLink></li>
            <li><NavLink to="/about">about</NavLink></li>
            <li><NavLink to="/experience">experience</NavLink></li>
            <li><NavLink to="/contact">contact</NavLink></li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/experience" component={Experience}/>
          <Route path="/contact" component={Contact}/>>
        </Switch>
      </div>
    )
  }
}

export default App
