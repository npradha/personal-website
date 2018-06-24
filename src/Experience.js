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
    			      <input type="checkbox" className="read-more-state jcf-hidden" id="following-content-xtern"/>
    			        <p className="read-more-wrap">Xtern</p><hr />
                {/* read more goes here */}
                  <p className="read-more-target">woooooooooooot.</p>
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
      </div>
    );
  }
}

export default Experience