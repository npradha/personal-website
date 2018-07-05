import React, { Component } from 'react'

import './Contact.css'

class Contact extends Component {

  render() {
    return (
      <div className="Contact">
      <p className="title">Let's get in touch!</p>
       <form method="POST" action="https://formspree.io/bhs.pradhann@gmail.com">
        <input type="text" name="nameuser" placeholder="Your name"/><br></br>
        <input type="email" name="email" placeholder="Your email"/><br></br>
        <textarea name="message" placeholder="Your message"></textarea><br></br>
        <input type="hidden" name="_next" value="https://facebook.com" />
        <button type="submit">Send</button>
      </form>

      </div>
    );
  }
}

export default Contact