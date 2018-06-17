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
              {/* <p> MOM IS A BUTT
                </p> */}
                <div className="aboutbuttons">
                  <div className="circle">
                    <img 
                      className="tech"
                      src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/tech.png')}
                      alt='tech'
                    />
                  </div>
                  <div className="circle">
                    <img
                      className="coffee"
                      src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/coffee.png')} 
                      alt='coffee'
                    />
                  </div>
                 <div className="circle">
                   <img
                      className="fashion"
                      src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/fashion.png')} 
                      alt='fashion'
                    /> 
                 </div>
                  <div className="circle">
                    <img
                      className="travel"
                      src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/travel.png')} 
                      alt='travel'
                    />
                  </div>
                  <div className="circle">
                    <img
                      className="code"
                      src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/code.png')} 
                      alt='code'
                    />
                  </div>
                  <div className="circle">
                    <img
                      className="art"
                      src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/art.png')} 
                      alt='art'
                    />
                  </div>
                  <div className="circle">
                    <img
                      className="womenTech"
                      src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/womenTech.png')} 
                      alt='women in tech'
                    />
                  </div>
                  <div className="circle">
                    <img
                      className="gym"
                      src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/gym.png')} 
                      alt='gym'
                    />
                  </div>
                  <div className="circle">
                    <img
                      className="arkansas"
                      src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/arkansas.png')} 
                      alt='arkansas'
                    />
                  </div>
                </div>
          </div> 
        </div>
      
      </div>
    );
  }
}

export default About