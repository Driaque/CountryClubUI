import React, { Component } from 'react'

const inputParsers = {
    date(input) {
      const [month, day, year] = input.split('/');
      return `${year}-${month}-${day}`;
    },
    uppercase(input) {
      return input.toUpperCase();
    },
    number(input) {
      return parseFloat(input);
    },
  };

export default class AddInterest extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        //data.set('Topic', data.get('Topic'));
        var topic = data.get('Topic')
        console.log(JSON.stringify(data.get('Topic')))
        //console.log(JSON.stringify(data))
    
        // for (let name of data.keys()) {
        //   const input = form.elements[name];
        //   const parserName = input.dataset.parse;
    
        //   if (parserName) {
        //     const parser = inputParsers[parserName];
        //     const parsedValue = parser(data.get(name));
        //     data.set(name, parsedValue);
        //   }
        // }
        let fdata = JSON.stringify({
            Topic: topic,
        })
        
        fetch('http://localhost:46204/odata/Interests', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json', 
              'Origin' :'http://localhost:46204', 
              'Access-Control-Request-Method': 'POST',
              'Access-Control-Request-Headers': 'Content-Type',
              'Access-Control-Allow-Origin': '*'
        },
          body: fdata,
        }).then(response => response.json());
        
        //Option 2
        // var request = new XMLHttpRequest();
        // request.open('POST', 'http://localhost:46204/odata/Interests', true);
        // request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        // request.send(data);
            
        // //OPTION 3
        //     // Example POST method implementation:
        //     console.log(data)
        //     postData('http://localhost:46204/odata/Interests', data)
        //     .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
        //     .catch(error => console.error(error));

        //     function postData(url = '', data = {}) {
        //     // Default options are marked with *
        //     return fetch(url, {
        //         method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //         mode: 'cors',// *same-origin',
        //         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //         credentials: 'same-origin', // include, *same-origin, omit
        //         headers: {
        //             'Content-Type': 'application/json',
        //             //'Access-Control-Allow-Origin':'*',
        //             // 'Content-Type': 'application/x-www-form-urlencoded',
        //         },
        //         redirect: 'follow', // manual, *follow, error
        //         referrer: 'no-referrer', // no-referrer, *client
        //         body: JSON.stringify(data), // body data type must match "Content-Type" header
        //     })
        //     .then(response => response.json()); // parses JSON response into native JavaScript objects 
        //     }

            //Option 4 
         
      }

    render() {
        return (
            
            <div>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <input name="Topic" type="text" data-parse="uppercase" />
                    <button>Add Topic</button>
            </form>
            </div>
        )
    }
}

