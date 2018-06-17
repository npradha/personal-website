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
                <div className="aboutbuttons">

                 {/* TECH  */}
                    <div className="wrap">
                      <div className="container">
                        <div className="interior">
                          <a className="btn" href="#open-tech">
                            <div className="circle">
                                <img 
                                  className="tech"
                                  src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/tech.png')}
                                  alt='tech'
                                />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div id="open-tech" className="modal-window">
                        <div>
                          <a href="#close-tech" title="Close" className="modal-close">X</a>
                            <h1>Tech!</h1><hr />
                          <div>Why I love tech</div>
                        </div>
                      </div>
                    </div>
                
                {/* COFFEE */}
                    <div className="wrap">
                      <div className="container">
                        <div className="interior">
                          <a className="btn" href="#coffee">
                            <div className="circle">
                              <img
                                className="coffee"
                                src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/coffee.png')} 
                                alt='coffee'
                              />
                          </div>
                          </a>
                        </div>
                      </div>
                      <div id="coffee" className="modal-window">
                        <div>
                          <a href="#coffeeX" title="Close" className="modal-close">X</a>
                            <h1>Coffee!</h1><hr />
                          <div>Why I love coffee</div>
                        </div>
                      </div>
                    </div>
                
                {/* FASHION */}
                   <div className="wrap">
                      <div className="container">
                        <div className="interior">
                          <a className="btn" href="#style">
                            <div className="circle">
                            <img
                                className="fashion"
                                src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/fashion.png')} 
                                alt='fashion'
                                />
                          </div>
                          </a>
                        </div>
                      </div>
                      <div id="style" className="modal-window">
                        <div>
                          <a href="#styleX" title="Close" className="modal-close">X</a>
                            <h1>Fashion!</h1><hr />
                          <div>Why I love fashion</div>
                        </div>
                      </div>
                   </div>

                {/* TRAVEL */}
                   <div className="wrap">
                      <div className="container">
                        <div className="interior">
                          <a className="btn" href="#travel">
                            <div className="circle">
                              <img
                                className="travel"
                                src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/travel.png')} 
                                alt='travel'
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div id="travel" className="modal-window">
                        <div>
                          <a href="#travelX" title="Close" className="modal-close">X</a>
                            <h1>Travel!</h1><hr />
                          <div>Why I love travel</div>
                        </div>
                      </div>
                   </div>

                {/* CODE */}
                   <div className="wrap">
                      <div className="container">
                        <div className="interior">
                          <a className="btn" href="#code">
                            <div className="circle">
                              <img
                                className="code"
                                src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/code.png')} 
                                alt='code'
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div id="code" className="modal-window">
                        <div>
                          <a href="#codeX" title="Close" className="modal-close">X</a>
                            <h1>Code!</h1><hr />
                          <div>Why I love code</div>
                        </div>
                      </div>
                   </div>
                
                {/* ART */}
                   <div className="wrap">
                      <div className="container">
                        <div className="interior">
                          <a className="btn" href="#art">
                            <div className="circle">
                              <img
                                className="art"
                                src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/art.png')} 
                                alt='art'
                              />
                            </div>
                            </a>
                          </div>
                        </div>
                      <div id="art" className="modal-window">
                        <div>
                          <a href="#artX" title="Close" className="modal-close">X</a>
                            <h1>Art!</h1><hr />
                          <div>Why I love art</div>
                        </div>
                      </div>
                   </div> 

                {/* WOMEN TECH */}
                   <div className="wrap">
                      <div className="container">
                        <div className="interior">
                          <a className="btn" href="#women">
                            <div className="circle">
                              <img
                                className="womenTech"
                                src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/womenTech.png')} 
                                alt='women in tech'
                              />
                              </div>
                            </a>
                          </div>
                        </div>
                      <div id="women" className="modal-window">
                        <div>
                          <a href="#womenX" title="Close" className="modal-close">X</a>
                            <h1>Women in STEM!</h1><hr />
                          <div>Why I love women in STEM</div>
                        </div>
                      </div>
                   </div>

                {/* GYM */}
                   <div className="wrap">
                      <div className="container">
                        <div className="interior">
                          <a className="btn" href="#gym">
                            <div className="circle">
                              <img
                                className="gym"
                                src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/gym.png')} 
                                alt='gym'
                              />
                              </div>
                            </a>
                          </div>
                        </div>
                      <div id="gym" className="modal-window">
                        <div>
                          <a href="#gymX" title="Close" className="modal-close">X</a>
                            <h1>Working Out!</h1><hr />
                          <div>Why I love working out</div>
                        </div>
                      </div>
                   </div>

                {/* ARKANSAS */}
                   <div className="wrap">
                      <div className="container">
                        <div className="interior">
                          <a className="btn" href="#ark">
                            <div className="circle">
                              <img
                                className="arkansas"
                                src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/arkansas.png')} 
                                alt='arkansas'
                              />
                            </div>
                            </a>
                          </div>
                        </div>
                      <div id="ark" className="modal-window">
                        <div>
                          <a href="#arkX" title="Close" className="modal-close">X</a>
                            <h1>Arkansas!</h1><hr />
                          <div>Why I love Arkansas</div>
                        </div>
                      </div>
                   </div>
       
          </div>
          </div> 
        </div>
      
      </div>
    );
  }
}

export default About