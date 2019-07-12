import React, { Component } from 'react'

export default class InterestList extends Component { //App
  constructor(){
    super();
   this.state = {
    //isLoading: true,
    data: [],
    error: null
  }
  }
  
    componentDidMount() {
      // The API where we're fetching data from
      fetch(`http://localhost:46204/odata/Interests`)
        // We get a response and receive the data in JSON format...
        .then(response => response.json())
        // ...then we update the state of our application
        .then((finalRes) =>
        {
         console.log(finalRes.value)
            this.setState({
              data: finalRes.value,
            //   //isLoading: false,
            }) 
          })
        // If we catch errors instead of a response, let's update the app
        .catch(error => this.setState({ error, isLoading: false }));
    } 
      render() {
      
          return (
            <div>
                  <section className="content-header">
              <h1>
                Interests
                <small>View Topics</small>
              </h1>
              <ol className="breadcrumb">
                <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                <li className="active">Interests</li>
              </ol>
              <br />
            </section>

            {
              
              this.state.data.map((dynamicData, key) => 
              <div>
              
              <div className="col-md-3 col-sm-6 col-xs-12" key={key}>
                  <div className="info-box">
                    <span className="info-box-icon bg-red"><i className="fa fa-star-o" /></span>
                    <div className="info-box-content">
                      {/* <span className="info-box-text">{dynamicData.Interest_ID}</span> */}
                      <span className="info-box-number">{dynamicData.Topic}</span>
                    </div>
                    {/* /.info-box-content */}
                  </div>
                  {/* /.info-box */}
                </div>
              </div>  
              )
            } 
            </div>
          )
  }
}



 
  


