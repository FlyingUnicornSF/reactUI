import React from 'react';


const Prescription = (props) => {
  if (!props.fillDetail) return (<div>Loading....</div>);
  return (
    <div>
    {Object.keys(props.fillDetail).map((key)=>{
      return (<div key={key}>{key}: {props.fillDetail[key]}</div>)
    })}
    {/* {Object.keys(prescriptionDetails).map((key)=>{
      return (<div>{key}: {props.prescriptionDetails[key]}</div>)
    })} */}
    
   {/* <pre>
    { JSON.stringify(props, null, 2) }
  </pre> */}
    </div>
  );

}

  //Clicking on a prescription should display on the same page 
  //more details about that prescription as well as 
  //a list of that prescription's fills

export default Prescription;