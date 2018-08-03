import React, { Component } from 'react';

class Prescriptions extends Component {
  constructor(props){
    super(props);
    this.state = {
      prescriptions: "hello"
    }
  };
  /* Multiple ways to lead this page, but I purposely chose
    to pass prescrition props from the page.
    just to practice.
  */
  componentDidUpdate(prevProps) {
    // this is straight from https://reactjs.org/docs/react-component.html#componentdidmount
    // This one was a bug that challenged me greatly. 
    // Typical usage (don't forget to compare props):
    if (this.props.prescriptions !== prevProps.prescriptions) {
      this.setState({prescriptions: this.props.prescriptions})
    }
  }


  getJSON(){

  }
  // <pre>
  // { JSON.stringify(this.props, null, 2) }
  // </pre>

  render (){
    /* this console.log was key to the de-bugging. 
       this showed up three times with empty array 
       until it loaded the array with correct array! 
       someday I will giggle how I struggled with this... I hope.*/

    //console.log("in render", this.props)
   return(
      <div className = "prescriptions">
        <div>I'm a chiled of this component!</div>
        <div>I'm also a chiled of this component!</div>
      </div>
   );
  };
};

export default Prescriptions;