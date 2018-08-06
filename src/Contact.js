import React, { Component } from 'react'

import './Contact.css'

class Contact extends Component {

  render() {
    return (
      <div className="Contact">
      <p className="title">Let's get in touch!</p>
      <p className="msgInfo">If you have any questions, comments, or want to schedule a coffee chat, send me a message!</p>
       {/* <form method="POST" action="https://formspree.io/bhs.pradhann@gmail.com">
        <input type="text" name="nameuser" placeholder="Your name"/><br></br>
        <input type="email" name="email" placeholder="Your email"/><br></br>
        <textarea name="message" placeholder="Your message"></textarea><br></br>
        <input type="hidden" name="_next" value="/" />
        <button type="submit">
        <img className="send" src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/send.png')} alt="send"/>
        </button>
      </form> */}

     <form method="POST" action="https://formspree.io/bhs.pradhann@gmail.com">
        <p>Name</p> 
        <input type="text" name="nameuser" />
        <p>Email</p> 
        <input type="email" name="email"/>
        <p>Message</p>
        <textarea name="message"></textarea><br />
        <input type="hidden" name="_next" value="/" />
        <button type="submit">
        <img className="send" src={require('/Users/netrapradhan/personalWebsite/personal-website/src/imgs/send.png')} alt="send"/>
        </button> 
        
      </form> 

      </div>
    );
  }
}

export default Contact