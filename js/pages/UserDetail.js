import React, { Component } from 'react';

class UserDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: {},
      prescriptions: {},
    }
  }

  componentDidMount() {
    this.getJSON( this.props.match.url ).then((result) => {
      this.setState({user: result});
    });
    this.getJSON( "/prescriptions/" + this.props.match.params.id ).then((result) => {
      this.setState({prescriptions: result});
    });
  }

  getJSON(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = () => resolve(JSON.parse(xhr.responseText));
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  }
  render() {
    return (
        <div>
            <div className="user-info">
            {/* heellooo
            <pre>
            { JSON.stringify(this.props, null, 2) }
            </pre>
            { JSON.stringify(this.state.user) } 
            { JSON.stringify(this.state.prescriptions) }  */}
            First Name: { this.state.user.first_name } 
            Last Name: { this.state.user.last_name } 
            Email address: { this.state.user.email } 
            Phone Number: { this.state.user.phone } 
            Date of Birthe: { this.state.user.date_of_birth } 
            rx_number: { this.state.prescriptions.rx_number }
            medication_name: { this.state.prescriptions.medication_name }
            </div>
        </div>

    );
  }
};



export default UserDetail;