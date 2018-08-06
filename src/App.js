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
          <li><NavLink  to="/home">home</NavLink></li>
            {/* <li><NavLink exact to="/">home</NavLink></li> */}
            <li><NavLink to="/about">about</NavLink></li>
            <li><NavLink to="/experience">experience</NavLink></li>
            <li><NavLink to="/contact">contact</NavLink></li>
          </ul>
        </div>
        <Switch>
          <Route path="/home" component={Home}/>
          {/* <Route exact path="/" component={Home}/> */}
          <Route path="/about" component={About}/>
          <Route path="/experience" component={Experience}/>
          <Route path="/contact" component={Contact}/>
          <Route render={() => 
            <div className="Home">
              <img
                className="homeNetra"
                src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/aboutNetra.jpeg')}
                alt="Netra"
              />
              <p className="greeting">Hey there!</p>
              <div className="homeContent">
                <p> My name is Netra Pradhan and welcome to my website! 
                    I am a sophomore at Purdue University studying Computer 
                    Science. I am passionate about learning and trying new 
                    things that push me out of my comfort zone. 
                    Additionally, I am always looking for new opportunities 
                    to learn and grow as a person and a professional in 
                    computer science related fields. Feel free to get to 
                    know me more or reach out to get in touch!
                    </p>
              </div>
            </div>
          } />
        </Switch>

        <div className="footer">

          <div className="media">
            <a href={'https://www.facebook.com/netra.pradhan'} target="_blank">
              <img className="logo" src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/facebook.png')} alt="facebook"/>
            </a>
            <a href={'https://www.instagram.com/netra_pradhan'} target="_blank">
              <img className="logo" src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/insta.png')} alt="instagram"/>
            </a>
            <a href={'https://www.github.com/npradha'} target="_blank">
              <img className="logo" src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/github.png')} alt="github"/>  
            </a>
            <a href={'https://www.linkedin.com/in/netra-pradhan-578955148/'} target="_blank">
              <img className="logo" src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/linkedin.png')} alt="linkedin"/> 
            </a>
            <NavLink to="/contact">
              <img className="logo" src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/email.png')} alt="email"/> 
            </NavLink>
           
        </div>

        
        <div className="divider">Netra Pradhan | www.netrapradhan.com</div>
        {/* <Route path="/contact" component={Contact}/> */}
        </div>
       

      </div>
    )
  }
}

export default App
