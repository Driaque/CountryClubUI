window.Seed = (function () {
  interests = [];
  //function getTheApi(){
    //let _this = this;
    fetch("http://localhost:46204/odata/Interests")
    .then(res => res.json())
    .then(
      (result) => {
        //console.log(result.value)
        //this.setState({interests:result.value});
        interests = result.value;
        console.log('Interests:')
        console.log(interests)
      })
   // }   
  return { interests: interests };
}());
