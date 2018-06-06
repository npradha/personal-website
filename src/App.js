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
        <div className="footer">
          <div className="media">
          <img className="logo" src={require('/Users/netrapradhan/personalWebsite/personal-website/src/facebook.png')} alt="facebook"/>
          <img className="logo" src={require('/Users/netrapradhan/personalWebsite/personal-website/src/insta.png')} alt="instagram"/>
          <img className="logo" src={require('/Users/netrapradhan/personalWebsite/personal-website/src/github.png')} alt="github"/>  
          <img className="logo" src={require('/Users/netrapradhan/personalWebsite/personal-website/src/linkedin.png')} alt="linkedin"/> 
          <img className="logo" src={require('/Users/netrapradhan/personalWebsite/personal-website/src/email.png')} alt="email"/> 
        </div>
        <div className="divider">Netra Pradhan | netrapradhan.com</div>
        </div>
      </div>
    )
  }
}

export default App
