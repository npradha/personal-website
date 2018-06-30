import React, { Component } from 'react'

import './Contact.css'

class Contact extends Component {

  render() {
    return (
      <div className="Contact">
        <form method="post" name="myemailform" action="email.php">
            Enter Name: <input type="text" name="name"/>
            Enter Email Address:<input type="text" name="email"/>
            Enter Message:  <textarea name="message"></textarea>
        <input type="submit" value="Send Form"/>
        </form>

      </div>
    );
  }
}

export default Contact