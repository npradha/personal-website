import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <p>home</p>
        <img
          className="homeNetra"
          src="src/muralNetra.jpg"
          alt="Netra"
        />
      </div>
    );
  }
}

export default Home