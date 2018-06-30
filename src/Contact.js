import React, { Component } from 'react'

import './Contact.css'

class Contact extends Component {

  render() {
    return (
      <div className="Contact">
       <form method="POST" action="https://formspree.io/bhs.pradhann@gmail.com">
        <input type="name" name="nameuser" placeholder="Your name"/>
        <input type="email" name="email" placeholder="Your email"/>
        <textarea name="message" placeholder="Your message"></textarea>
        <input type="hidden" name="_next" value="https://facebook.com" />
        <button type="submit">Send</button>
      </form>

      </div>
    );
  }
}

export default Contact