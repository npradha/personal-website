import React, { Component } from 'react'

import './About.css'

class About extends Component {

  handleClick = (ev) => {
    ev.preventDefault()
    console.log('yeahhhhhh')
  }

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
        <p className="aboutMe2">(Click below)</p>
          <div className="aboutContent">
                <div className="aboutbuttons">

                {/* ARKANSAS */}
                <div className="wrap">
                  <a className="btn" href="#ark">
                    <div className="circle">
                      <img
                        className="arkansas"
                        src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/arkansas.png')} 
                        alt='arkansas'
                      />
                    </div>
                  </a>
                  <div id="ark" class="popup">
                    <a href="/about" className="close">X</a>
                    <h2>Arkansas!</h2><hr />
                      <p>Why I love Arkansas</p>
                  </div>
                  <a href="#arkX" class="close-popup"></a>
                </div>
               
                {/* TECH  */}
                <div className="wrap">
                  <a className="btn" href="#tech">
                    <div className="circle">
                      <img
                        className="tech"
                        src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/tech.png')} 
                        alt='tech'
                      />
                    </div>
                  </a>
                  <div id="tech" class="popup">
                    <a href="#techX" className="close">X</a>
                    <h2>Tech!</h2><hr />
                      <p>Why I love tech</p>
                  </div>
                  <a href="#womenX" class="close-popup"></a>
                </div>

                {/* WOMEN TECH */}
                <div className="wrap">
                  <a className="btn" href="#women">
                    <div className="circle womenSpecial">
                      <img
                        className="womenTech"
                        src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/womenTech.png')} 
                        alt='women in tech'
                      />
                    </div>
                  </a>
                  <div id="women" class="popup">
                    <a href="#womenX" className="close">X</a>
                    <h2>Women in STEM!</h2><hr />
                      <p>Why I love Women in STEM!</p>
                  </div>
                  <a href="#womenX" class="close-popup"></a>
                </div>

                {/* COFFEE */}
                <div className="wrap">
                  <a className="btn" href="#coffee">
                    <div className="circle">
                      <img
                        className="coffee"
                        src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/coffee.png')} 
                        alt='coffee'
                      />
                    </div>
                  </a>
                  <div id="coffee" class="popup">
                    <a href="#coffeeX" className="close">X</a>
                    <h2>Coffee!</h2><hr />
                      <p>Why I love coffee</p>
                  </div>
                  <a href="#coffeeX" class="close-popup"></a>
                </div>
                
                {/* CODE */}
                <div className="wrap">
                  <a className="btn" href="#code">
                    <div className="circle">
                      <img
                        className="code"
                        src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/code.png')} 
                        alt='code'
                      />
                    </div>
                  </a>
                  <div id="code" class="popup">
                    <a href="#codeX" className="close">X</a>
                    <h2>Code!</h2><hr />
                      <p>Why I love code!</p>
                  </div>
                  <a href="#codeX" class="close-popup"></a>
                </div>

                {/* FASHION */}
                <div className="wrap">
                  <a className="btn" href="#style">
                    <div className="circle">
                      <img
                        className="fashion"
                        src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/fashion.png')} 
                        alt='fashion'
                      />
                    </div>
                  </a>
                  <div id="style" class="popup">
                    <a href="#styleX" className="close">X</a>
                    <h2>Passion for Fashion!</h2><hr />
                      <p>Why I love fashion!</p>
                  </div>
                  <a href="#styleX" class="close-popup"></a>
                </div>

                {/* TRAVEL */}
                <div className="wrap">
                  <a className="btn" href="#travel">
                    <div className="circle">
                      <img
                        className="travel"
                        src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/travel.png')} 
                        alt='travel'
                      />
                    </div>
                  </a>
                  <div id="travel" class="popup">
                    <a href="#travelX" className="close">X</a>
                    <h2>Travel!</h2><hr />
                      <p>Why I love travel</p>
                  </div>
                  <a href="#travelX" class="close-popup"></a>
                </div>

                
                
                {/* ART */}
                <div className="wrap">
                  <a className="btn" href="#art">
                    <div className="circle">
                      <img
                        className="art"
                        src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/art.png')} 
                        alt='art'
                      />
                    </div>
                  </a>
                  <div id="art" class="popup">
                    <a href="#artX" className="close">X</a>
                    <h2>Art!</h2><hr />
                      <p>Why I love art!</p>
                  </div>
                  <a href="#artX" class="close-popup"></a>
                </div>

                

                {/* GYM */}
                <div className="wrap">
                  <a className="btn" href="#gym">
                    <div className="circle">
                      <img
                        className="gym"
                        src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/gym.png')} 
                        alt='gym'
                      />
                    </div>
                  </a>
                  <div id="gym" class="popup">
                    <a href="#gymX" className="close">X</a>
                    <h2>Working Out!</h2><hr />
                      <p>Why I love working out!</p>
                  </div>
                  <a href="#gymX" class="close-popup"></a>
                </div>

                
       
          </div>
          </div> 
        </div>
      
      </div>
    );
  }
}

export default About