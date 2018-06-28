import React, { Component } from 'react'

import './Experience.css'

class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <p className="expTitle">experience</p>
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
    			      <input type="checkbox" className="read-more-state read-more-state-xtern jcf-hidden" id="following-content-xtern"/>
    			        <p className="read-more-wrap">Xtern</p><hr />
                {/* read more goes here */}
                  <p className="read-more-target read-more-target-xtern">woooooooooooot.jnejgnfj, jngjnring jnjgrjkgjjnjjnjngjenkn kjnjgbjihrnns</p>
    		        	<label htmlFor="following-content-xtern" className="read-more-trigger"></label>
    	      	</div>
            </div>

            <div className="info">
              <div className="contax">
    			      <input type="checkbox" className="read-more-state jcf-hidden" id="following-content-contax"/>
    			        <p className="read-more-wrap">Contax</p><hr />
                {/* read more goes here */}
                  <p className="read-more-target">woooooooooooot.</p>
    		        	<label htmlFor="following-content-contax" className="read-more-trigger"></label>
    	      	</div>
            </div>

            <div className="info">
              <div className="lilmiss">
    			      <input type="checkbox" className="read-more-state jcf-hidden" id="following-content-lilmiss"/>
    			        <p className="read-more-wrap">Lil Miss Coder</p><hr />
                {/* read more goes here */}
                  <p className="read-more-target">woooooooooooot.</p>
    		        	<label htmlFor="following-content-lilmiss" className="read-more-trigger"></label>
    	      	</div>
            </div>

            <div className="info">
              <div className="ncwit">
    			      <input type="checkbox" className="read-more-state jcf-hidden" id="following-content-ncwit"/>
    			        <p className="read-more-wrap">NCWIT</p><hr />
                {/* read more goes here */}
                  <p className="read-more-target">woooooooooooot.</p>
    		        	<label htmlFor="following-content-ncwit" className="read-more-trigger"></label>
    	      	</div>
            </div>

            <div className="info">
              <div className="heifer">
    			      <input type="checkbox" className="read-more-state jcf-hidden" id="following-content-heifer"/>
    			        <p className="read-more-wrap">Heifer International</p><hr />
                {/* read more goes here */}
                  <p className="read-more-target">woooooooooooot.</p>
    		        	<label htmlFor="following-content-heifer" className="read-more-trigger"></label>
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
            <div className="awardHalf">
            <p className="expTitle newTitle">awards+honors</p>
            <h2>NCWIT Aspirations in Computing--Arkansas Affiliate Winner</h2>
            <br></br>
            <br></br>
            <h2>AT&T Girls of Promise Tech. Contest--Winner</h2>
            </div>
          </div>
      </div>
    );
  }
}

export default Experience