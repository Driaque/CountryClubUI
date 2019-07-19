import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //email: "",
      username: "",
      password: "",
      userID: "",
      IsAuthenticated: "",
      familyID: "",
      errorMessage: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('Logging in ...' + this.state.username);
    //var password = this.state.password;

      let loginData = JSON.stringify({
        Username: this.state.username,
        Password: this.state.password,
        })
      let authCred;

        fetch('http://localhost:46204/api/Users/Login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json', 
              'Origin' :'http://localhost:46204', 
              'Access-Control-Request-Method': 'POST',
              'Access-Control-Request-Headers': 'Content-Type',
              'Access-Control-Allow-Origin': '*'
        },
          body: loginData,
        }).then(response => response.json())
        .then(response => localStorage.setItem("AuthCred",JSON.stringify(response)))

        //  Just get local storage value where you need.
          authCred  = localStorage.getItem("AuthCred");
          var authJson = JSON.parse(JSON.parse(authCred)); //Converts Text Json to Json object
          var userID = authJson.UserID;
          var IsAuthenticated = authJson["IsAuthenticated"];
          var familyID = authJson["FamilyID"];
          var responseMessage = authJson["responseMessage"];
          // console.log('AuthJson: ' + JSON.stringify(authJson))
          // console.log('FamilyID: ' + familyID)
          // console.log('UserID: ' + userID)
          // console.log('Message: ' + responseMessage)
          // console.log('IsAuth: ' + IsAuthenticated)

          //Set IsAuth State
          this.setState({
            IsAuthenticated: IsAuthenticated,
            userID : userID,
            familyID : familyID,
            errorMessage: responseMessage
          });
          //If Login failed
          if (this.state.errorMessage === "Invalid Credentials"){
            alert(this.state.errorMessage);
          }
    console.log('Done fetching')
    //Login Workflow
    //- Get username & password from form --
    //- Fetch a post call to login --
    //- Get {IsAuthenticated, FamilyID and  UserID} from response -/
    //- Store Auth Credentials in local storage
    //- If Successful, Redirect user to Home page, Else , Display responseMessage

  }

  render() {
    if (this.state.IsAuthenticated === true) {
      return <Redirect to='/' />
    }
    
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          {/* <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup> */}
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
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
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}