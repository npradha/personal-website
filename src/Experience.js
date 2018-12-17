import React, { Component } from 'react'

import './Experience.css'

class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <p className="expTitle bigTitle">experience</p>
          {/* <a href={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/Resume.pdf')} target="_blank" download>
              <img className="logo" src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/file.png')} alt="facebook"/>
          </a> */}
  
        
          {/* <div className="expInfo">
            <input className="read-more-state" id="read-more-controller" type="checkbox"/>
                <div className="read-more-wrap">
                  <p>Lorem ipsum dolor sit amet...</p>
                  <p className="read-more-target">Lorem ipsum dolor sit amet...</p>
                  <p className="read-more-target">Lorem ipsum dolor sit amet...</p>
                  <p className="read-more-target">Lorem ipsum dolor sit amet...</p>
                </div>
                <label className="read-more-trigger" htmlFor="read-more-controller"></label>
          </div> */}
          <div className="expInfo">

            <div className="info">
              <div className="xtern">
              <h3 className="bold title1">XTERN</h3><hr />
              <p className="bold">May 2018-June 2018</p>
              <p className="bold title2">Participant</p>
              <ul>
                <li>Participated in a 3-week intensive 
                  training course, hosted by TechPoint, 
                  focused on developing the skills and 
                  competencies needed for internships 
                  in tech
                </li>
                <li>Developed various applications using 
                  the JavaScript and React framework</li>
              </ul>
    			      {/* <input type="checkbox" className="read-more-state read-more-state-xtern jcf-hidden" id="following-content-xtern"/>
    			        <p className="read-more-wrap">XTERN</p><hr />
                  <p className="read-more-target read-more-target-xtern">
              
                  </p>
    		        	<label htmlFor="following-content-xtern" className="read-more-trigger"></label> */}
    	      	</div>
            </div>

            <div className="info">
              <div className="contax">
              <h3 className="bold title1">Contax</h3><hr />
              <p className="bold">Sept 2017-Present</p>
              <p className="bold title2">Android Developer</p>
              <ul>
                <li className="fontSmall">Developing Android Application to 
                  store user’s contact information in 
                  a QR code for easy distribution of 
                  information</li>
                <li className="fontSmall">Improving the contact information a 
                  user can store in order to maximize the 
                  amount of information for distribution</li>
                <li className="fontSmall">Using Android Studio for development 
                  and Google Firebase for data storage</li>
              </ul>
    			      {/* <input type="checkbox" className="read-more-state jcf-hidden" id="following-content-contax"/>
    			        <p className="read-more-wrap">Contax</p><hr />
                  <p className="read-more-target">woooooooooooot.</p>
    		        	<label htmlFor="following-content-contax" className="read-more-trigger"></label> */}
    	      	</div>
            </div>

            <div className="info">
              <div className="heifer">
              <h3 className="bold title1">Heifer International</h3><hr />
              <p className="bold">Jan 2017-April 2017</p>
              <p className="bold title2">Lead Developer & UI/UX Designer</p>
              <ul>
                <li>
                Innovated an Android application to 
                help with donations and fundraising 
                for nonprofit</li>
                <li>Implemented application in my high 
                  school to benefit the Heifer International 
                  Club</li>
                <li>Used Android Studio for development</li>
              </ul>
    			      {/* <input type="checkbox" className="read-more-state jcf-hidden" id="following-content-heifer"/>
    			        <p className="read-more-wrap">Heifer International</p><hr />
                  <p className="read-more-target">woooooooooooot.</p>
    		        	<label htmlFor="following-content-heifer" className="read-more-trigger"></label> */}
    	      	</div>
            </div>





            <div className="info">
              <div className="lilmiss">
              <h3 className="bold title1">Lil Miss Coder</h3><hr />
              <p className="bold">Sept 2016-May 2017</p>
              <p className="bold title2">President & Senior Leader</p>
              <ul>
                <li className="fontSmall">Led community program that 
                  introduces young girls to computer 
                  science</li>
                <li className="fontSmall">Demonstrated basic Java projects 
                  and web development to allow girls 
                  to gain exposure to coding</li>
                <li className="fontSmall">Brought in “Women in Technology” 
                  guest speakers to inform girls on 
                  different careers in computer science</li>
              </ul>
    			      {/* <input type="checkbox" className="read-more-state jcf-hidden" id="following-content-lilmiss"/>
    			        <p className="read-more-wrap">Lil Miss Coder</p><hr />
                  <p className="read-more-target">woooooooooooot.</p>
    		        	<label htmlFor="following-content-lilmiss" className="read-more-trigger"></label> */}
    	      	</div>
            </div>

          </div>
          
        
          <div className="lowerHalf">
            <div className="skillHalf">
              <p className="expTitle newTitle">skills</p>
              <div className="skills">
                <div className="c skill"> <h2>C</h2>
                    <div className="dot c1 first red"></div>
                    <div className="dot c2 red"></div>
                    <div className="dot c3 red"></div>
                    <div className="dot c4 red"></div>
                    <div className="dot c5"></div>
                </div>
                <div className="java skill"> <h2>Java</h2>
                    <div className="dot j1 first red"></div>
                    <div className="dot j2 red"></div>
                    <div className="dot j3 red"></div>
                    <div className="dot j4 red"></div>
                    <div className="dot j5"></div>
                </div>
                <div className="html skill"> <h2>HTML</h2>
                    <div className="dot h1 first red"></div>
                    <div className="dot h2 red"></div>
                    <div className="dot h3 red"></div>
                    <div className="dot h4 red"></div>
                    <div className="dot h5 red"></div>
                </div>
                <div className="css skill"> <h2>CSS</h2>
                    <div className="dot css1 first red"></div>
                    <div className="dot css2 red"></div>
                    <div className="dot css3 red"></div>
                    <div className="dot css4 red"></div>
                    <div className="dot css5 red"></div>
                </div>
                <div className="javascript skill"> <h2>Javascript</h2>
                    <div className="dot js1 first red"></div>
                    <div className="dot js2 red"></div>
                    <div className="dot js3 red"></div>
                    <div className="dot js4 red"></div>
                    <div className="dot js5"></div>
                </div>
              </div>
            </div>
            <div className="extra">
              <p className="expTitle newTitle">extracurriculars</p>
              <div className="activities fontSmaller">
                  <h2>Delta Mu Kappa--Professional Entrepreneurship Fraternity</h2>
                  <br></br>
                  <br></br>
                  <h2>TEDxPurdueU Communications Team</h2>
                  <br></br>
                  <br></br>
                  <h2>CS 193 Tools Teaching Assistant</h2>
                  <br></br>
                  <br></br>
                  <h2>Global Science Partner</h2>
                  <br></br>
                  <br></br>
                  <h2>Purdue South Asian Student Alliance</h2>
                 </div>
              </div>





            <p className="expTitle newTitle">awards+honors</p>
            <div className="awardHalf">
            <h2 className="fontSmaller">Certificate in Entrepreneurship & Innovation--Student Spotlight:       
              <a className="entr" href={"https://www.purdue.edu/entr/netrapradhan/"} target="_blank"> link </a></h2>
            <br></br>
            <br></br> 
            <h2>NCWIT Aspirations in Computing--Arkansas Affiliate Winner</h2>
            <br></br>
            <br></br>
            <h2>AT&T Girls of Promise Tech. Contest--Winner</h2>
            <br></br>
            <br></br>
            <h2>Bentonville Kiwanis Club--2017 Youth Excellence Award</h2>
            </div>
          </div>
      </div>
    );
  }
}

export default Experience