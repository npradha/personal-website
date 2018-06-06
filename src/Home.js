import React, { Component } from 'react'

import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="Home">
       
        <img
          className="homeNetra"
          src={require('/Users/netrapradhan/personalWebsite/personal-website/src/doorNetra.jpg')}
          alt="Netra"
        />
         <p className="greeting">Hello!</p>
         <div className="aboutContent">
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
    );
  }
}

export default Home