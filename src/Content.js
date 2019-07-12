import React, { Component } from 'react'
import InterestList from './InterestList';
import AddInterest from './AddInterest';

export default class Content extends Component {
    componentDidMount(){
        const script = document.createElement("script");

        script.src = `js/content.js`;
        //script.src = `js/seed.js`;
        script.async = true;

        document.body.appendChild(script);
    }

    render() {
        return (
           <div>
  <div className="content-wrapper">
      
          if(this.state.FamilyRole == parent){
                <AddInterest/>
          }
      
      <AddInterest/>
      <InterestList/>
  </div>
</div>

        )
    }
}
