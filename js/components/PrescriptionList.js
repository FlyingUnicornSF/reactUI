import React, { Component } from 'react';
import Prescription from './Prescription';
import { elementAt } from '../../node_modules/rxjs/operator/elementAt';
//import $ from "jquery";
// try jquary this time. 
// const prescriptionDetails = (props) => {
//   $.get( '/prescriptions/' + props.prescriptionID, function( data ) {
//     return data;
//     })
// }


class PrescriptionList extends Component {
  constructor(props){
    super(props);
    this.state = {
      prescriptions: null,
      shouldRender: false,
      prescriptionID: null,
      fills: null,
      show: false,
    }
    
    this.handleClick = this.handleClick.bind(this);
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
      this.setState({shouldRender: true})
    }
  }
  // e is event target
  handleClick(id, e){
    // access to e.target here
    console.log("e.target.id", e.target.id);
    this.setState({prescriptionID: e.target.id})
    // this is another way to XMLHttpRequest
    // using fetch
    let url = "/fills/"+e.target.id;
    fetch(url, {
      method: "GET",
    })
    // below line is needed because fetch is a promise
    // if you don't return response, it will hang waiting...
    .then(response => response.json())
    .then(response => this.setState({fills: response}))
    .then(this.setState({show: true}))
  }
  
  prescriptionDetails(prescriptionID){
    let perscription = this.state.prescriptions.find((perscription)=>{
      // double = for a reason! NOT === 
      return (perscription.id == prescriptionID);
    });
    
    return(
      <div>
      {Object.keys(perscription).map((key)=>{
        return (<div key={key}>{key}: {perscription[key]}</div>)
      })}
      </div>
    );
  }

/* 
*  Clicking on a prescription should display on the same page more details 
about that prescription as well as a list of that prescription's fills
*  The displayed fills should be chronologically ordered by when they 
were filled in descending order, and should include other basic information about the fill
*/
 

  // <pre>
  // { JSON.stringify(this.props, null, 2) }
  // </pre>


  render (){
    /* this console.log was key to  de-bugging. 
       this showed up three times with empty array 
       until it loaded the array with correct array! */
    //console.log("in render", this.props)
    /* list of prescriptions can't load until props is loaded with the correct array
      added render state to make sure list loads only after state.prescriptions are updated. */
    if(this.state.shouldRender){
      return(
    /* mapping function built in a div. It's a bit messy but then you don't have to scroll up to see what 
    it's mapping or make another component like UserList.js
    Also, this onclick handler: it's bined at the contructor, so it doesn't have to bind here.
    Some reasons I can't pass the this.handleClick(id, e) like it says in react document.
    */
        <div className="prescriptions">{this.state.prescriptions.map((prescription)=>{
          return (<div  key={prescription.id} id={ prescription.id } onClick={(e) => this.handleClick(prescription.id, e)}> prescription: {prescription.rx_number} medication name: {prescription.medication_name}</div>
          )
        })}
          <div>
            {this.state.show ? <Prescription fillDetail={this.state.fills} prescriptionID={this.state.prescriptionID}/> : null}
            {this.state.show ? <div>{this.state.prescriptionID}</div> : null}
            {this.state.show ? <div>{this.prescriptionDetails(this.state.prescriptionID)}YOO</div> : null}
          </div>
        </div>
      );
    };

    return(
      <div className = "loading"> loading..... </div>
    );
  };
};

export default PrescriptionList;