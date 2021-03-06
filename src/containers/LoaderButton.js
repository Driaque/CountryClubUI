import React, { Component } from 'react'
import { Button } from "react-bootstrap";

function simulateNetworkRequest() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }
  
 export default class LoaderButton extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleClick = this.handleClick.bind(this);
  
      this.state = {
        isLoading: false,
      };
    }
  
    handleClick() {
      this.setState({ isLoading: true }, () => {
        simulateNetworkRequest().then(() => {
          this.setState({ isLoading: false });
        });
      });
    }
  
    render() {
      const { isLoading } = this.state;
  
      return (
        <Button
          variant="primary"
          disabled={isLoading}
          onClick={!isLoading ? this.handleClick : null}
        >
          {isLoading ? 'Loading…' : 'Click to load'}
        </Button>
      );
    }
  }
