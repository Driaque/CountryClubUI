import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './App.css';
import { LinkContainer } from "react-router-bootstrap";
import Routes from './Routes';

export default class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false,
      //userID: ""
    };
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }
  componentDidMount(){
        //  Just get local storage value where you need.
        var authCred  = localStorage.getItem("AuthCred");
        var authJson, userID, IsAuthenticated, familyID
        if(authCred != null)
        {
          authJson = JSON.parse(JSON.parse(authCred)); //Converts Text Json to Json object
          userID = authJson.UserID;
          IsAuthenticated = authJson["IsAuthenticated"];
          familyID = authJson["FamilyID"];

          console.log('AuthJson: ' + JSON.stringify(authJson))
          console.log('FamilyID: ' + familyID)
          console.log('UserID: ' + userID)
          console.log('IsAuth: ' + IsAuthenticated)

          //Set IsAuth State
          this.setState({
            IsAuthenticated: IsAuthenticated,
            userID : userID,
            familyID : familyID,
          });
        }
         
         
          
  }
  handleLogout = async event => {
    localStorage.removeItem("AuthCred");

    this.setState({
      IsAuthenticated: false,
      userID : "",
      familyID : "",
      //errorMessage: responseMessage
    });
    window.location.reload(true);
  }
  

  render() {

      return (
        <div className="App container">
          <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Country Club </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav pullRight>
          {this.state.IsAuthenticated
              ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
              : <Fragment>
                  <LinkContainer to="/signup">
                    <NavItem>Signup</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                </Fragment>
            }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          <Routes />
        </div>
      )
  }
}

