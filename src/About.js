import React, { Component } from 'react'

import './About.css'

class About extends Component {
  render() {
    return (
      <div className="About">
      <div className="imgNetra">

        <img
          className="aboutNetra"
          src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/doorNetra.jpg')}
          alt="Netra"
        />
        </div>
        <div className="content">
        <p className="aboutMe">About Me!</p>
          <div className="aboutContent">
              <p> ABOUT MEMEMEMEMEMEM
                </p>
          </div> 
        </div>
      
      </div>
    );
  }
}

export default About