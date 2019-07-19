import React, { Component } from "react";
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel,
  Radio,
  Form,
  Col,
  Row,
} from "react-bootstrap";
import LoaderButton from "./LoaderButton";
import "./Signup.css";
import { SingleDatePicker } from "react-dates";
import Select from 'react-select';
import DatePicker from 'react-datepicker'



export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      newUser: null
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

   handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
console.log("Here we aree!!");
    
      var username = this.state.username
      var password = this.state.password
      var firstname = this.state.firstname
      var lastname = this.state.lastname
      var gender = this.state.gender

      var email = this.state.email
      var dob = this.state.dob

      let userdata = JSON.stringify({
          Username : username,
          Password: password,
          Firstname : firstname,
          Lastname : lastname,
          Gender : gender,
          Email: email,
          DateOfBirth: dob,
          Family_ID : null
        })
        
        fetch('http://localhost:46204/api/Users', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json', 
              'Origin' :'http://localhost:46204', 
              'Access-Control-Request-Method': 'POST',
              'Access-Control-Request-Headers': 'Content-Type',
              'Access-Control-Allow-Origin': '*'
        },
          body: userdata,
        }).then(response => response.json()).then(json => console.log(json));
    
 
  }


  renderForm() {
    return (
        <form onSubmit={this.handleSubmit}>

        <FormGroup controlId="username" bsSize="large">
          <ControlLabel>Username</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </FormGroup>


        <FormGroup controlId="firstname" bsSize="large">
          <ControlLabel>FirstName</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={this.state.firstname}
            onChange={this.handleChange}
          />
        </FormGroup>
        
        <FormGroup controlId="lastname" bsSize="large">
          <ControlLabel>LastName</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={this.state.lastname}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup controlId="gender" bsSize="large">
          <ControlLabel>Gender</ControlLabel>
              <FormControl
            placeholder="Please enter M, F or O"
            type="text"
            value={this.state.gender}
            onChange={this.handleChange}
          /> 
        </FormGroup>

        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup controlId="dob" bsSize="large">
          <ControlLabel>Date of Birth</ControlLabel>
          <FormControl
            value={this.state.dob}
            onChange={this.handleChange}
            type="date"  
          />

        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" bsSize="large">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <button block
          bsSize="large" type="submit">Submit</button>

      </form>
    );
  }

  render() {
    return (
      <div className="Signup">
        {
          //this.state.newUser === null
           this.renderForm()
         // : this.renderConfirmationForm()
        }
      </div>
    );
  }
}