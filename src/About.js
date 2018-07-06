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
                  <div id="ark" className="popup">
                    <a href="#arkX" className="close">X</a>
                    <h2>Arkansas!</h2><hr />
                      <p>I was born in Bentonville, Arkansas. When I
                         introduce myself, not many people have heard 
                         of the state. I admit, it’s no Texas or 
                         California but it’s home. It’s home to Walmart 
                         Inc., Crystal Bridges Museum of American Art, 
                         Crater of Diamonds, the Ozark Mountains and former 
                         President Bill Clinton. </p>
                      <p>Arkansas is beautiful. Leaving it to go to Indiana 
                        was hard, but I needed a change. It meant leaving
                         my family, my friends and precious memories behind. 
                         My hometown of Bentonville is unlike any town I’ve 
                         came across. It has a small town vibe that outsiders 
                         just won’t get. From the Farmer’s Market to the 
                         Bentonville Film Festival, I’ve seen this small town 
                         grow into a buzzing city. </p>
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
                      <p> I knew I wanted to pursue a technology 
                        career in the 8th grade. I had to give a 
                        presentation about a career we would be 
                        interested in. I wasn’t sure what I wanted 
                        to do at the time, but I was taking a robotics 
                        class so I decided to research a software 
                        engineer. </p>
                        <p> While I was doing research, I realized how 
                          much I enjoyed doing what software engineers 
                          do. Keeping in mind I did not know how to code 
                          then, I knew I wanted to help people and solve 
                          problems as a career. I am very passionate about 
                          technology because it can better people’s lives 
                          and make an outstanding impact on our society. </p>
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
                      <p>I took my first programming class in high
                         school. I was nervous for the first day 
                         because I already knew the boy-girl ratio 
                         in technology, but I didn’t realize I would 
                         experience it in high school. In my programming 
                         class, I was 1 of 2 girls in a class of 30. This
                          was very intimidating, but it only motivated me 
                          to make more of a difference in the computer 
                      science field.</p>
                      <p>My senior year of high school I became the leader 
                        of an organization called Lil Miss Coder. It’s an 
                        organization that introduces CS to younger girls. 
                        These girls were eager to code, but were doing it in 
                        a supportive environment. </p>
                      <p>I am very passionate about Women In STEM. It’s an 
                        issue that is very close to me and I want to make a
                         difference and restore the balance in the field. </p>
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
                      <p>I am a java enthusiast! I love coffee. 
                        On campus, you will find me studying at Starbucks 
                        or a coffee shop. The smell of coffee helps me to 
                        focus and calms my nerves. I love all kinds of 
                        coffee: black, hot, iced, dark roast, medium roast.
                         When I come home from school, I love to catch up 
                         with friends over coffee. Anything can happen over
                          a cup of coffee!</p>
                          <p>If you would like to meet up for a coffee
                             chat, feel free to message me on any of my social 
                             media down below or send me a message through my 
                             Contact page!</p>
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
                      <p>Coding is the foundation of all technology. 
                        I began coding in high school and really 
                        enjoyed it. I learned Java, HTML and CSS in 
                        high school. After a year of college, I was 
                        able to expand my knowledge of Java and learn 
                        C, C++, Javascript and ReactJS.  I enjoy coding 
                        because I really like creating something that 
                        people will use. I got into computer science 
                        because I want to help others through technology 
                        and coding helps me to build programs and softwares 
                        that will benefit others. </p>
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
                      <p>Apart from technology and school, 
                        I’m really into fashion and beauty. 
                        For me, it is a hobby. I love following 
                        Fashion Week, the Met Gala, the Cannes Film
                         Festival, and a variety of red carpets. I 
                         love getting to know different trends and 
                         applying it to my style. For beauty, I am 
                         always up to date on the new beauty products that
                          are out. I can talk about makeup for hours. 
                          Fashion and Makeup allow me to express myself
                           through style. </p>
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
                      <p>I really love traveling. If I could make an 
                        airplane my home, I would. Sometime in the future, 
                        I would love to acquire a pilot’s license. Traveling 
                        allows me to experience different cultures. Whether its
                        tourist spots, the food, the fashion, I love all aspects
                         of going to a new country. I’m also a huge world 
                         history nerd so going to ancient places or monuments 
                         really excites me. I have been to over 10 countries so
                          far and hope that my job will allow me to travel some 
                          more. Of all the places I have seen, Switzerland has
                           been my most favorite. My dream destination is Greece 
                           so I hope to visit soon!</p>
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
                      <p>Art is a very hidden passion of mine. Not many 
                        of my friends know how much I love drawing and painting.
                         I love creating art because it is very relaxing. I also 
                         love observing art and analyzing it. Bentonville is 
                         home to Crystal Bridges Museum of Art. I have been there
                          countless amounts of times to see the new art collections 
                          and to see the history behind each piece. My favorite 
                          piece is War News from Mexico by Richard Caton Woodville. 
                          This piece has so many hidden meanings where you must look
                           at each and every corner to draw multiple conclusions. 
                           Art is like a puzzle where small components of the art creates 
                           the bigger picture. </p>
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
                      <p>Everybody knows working out is a great stress reliever! 
                        I love to work out. I really enjoy going to a 
                        specialized workout class such as Pound, Zumba, Spin, 
                        and my personal favorite Core Barre. These classes give 
                        me a versatile workout, causing me to never dread going 
                        to the gym. With my two best friends coming to class with 
                        me, I have fun working a sweat. </p>
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