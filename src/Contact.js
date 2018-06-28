import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import axios from 'axios'

import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class Contact extends Component {
  constructor(){

    super() 

    this.state = {
      name: 'yeet',
      email: 'yeet',
      message: 'yeet'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  async handleSubmit(e){
    e.preventDefault()

    const {name, email, message} = this.state 

    const form = await axios.post('/api/form', {
      name,
      email,
      message
    })
  }

  render() {
    return (
      <div className="Contact">
        <Form onSubmit={this.handleSubmit} style={{width: '600px'}}>
        
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input 
            type="text"
            name="name"
            onChange={this.handleChange} />
        </FormGroup>

         <FormGroup>
          <Label for="email">Email:</Label>
          <Input 
            type="email"
            name="email"
            onChange={this.handleChange} />
        </FormGroup>

         <FormGroup>
          <Label for="message">Message:</Label>
          <Input 
            type="textarea"
            name="message"
            onChange={this.handleChange} />
        </FormGroup>
        
        <Button>Submit</Button>
        </Form>        




      </div>
    );
  }
}

export default Contact