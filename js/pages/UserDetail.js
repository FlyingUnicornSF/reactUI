import React, { Component } from 'react';
import Prescriptions from '../components/Prescriptions';

class UserDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: {},
      prescriptions: [],
    }
  }

  componentDidMount() {
    this.getJSON( this.props.match.url ).then((result) => {
      this.setState({user: result});
    });
      //prescriptions?user_id=1

    this.getJSON( "/prescriptions/?user_id=" + this.props.match.params.id ).then(  (result) => {
      this.setState({prescriptions: result});
    });
    // this.getJSON( "/prescriptions/" + this.props.match.params.id ).then((result) => {
    //   this.setState({prescriptions: result});
    // });
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

// not gonna lie, I totally took this one from open source repo 
  gotoPage(path) {
    location.href = `${path}`;
  }

  render() {
    return (
        <div className="user-info-container">
            
            {/* 
            <pre>
            { JSON.stringify(this.props, null, 2) }
            </pre>
            { JSON.stringify(this.state.user) } */}
          <ul className="user-info">
            <li>First Name: { this.state.user.first_name }</li>
            <li>Last Name: { this.state.user.last_name }</li> 
            <li>Email address: { this.state.user.email }</li> 
            <li>Phone Number: { this.state.user.phone }</li> 
            <li>Date of Birthe: { this.state.user.date_of_birth }</li> 
            <Prescriptions prescriptions={this.state.prescriptions}>
              {/* <div>rx_number: { this.state.prescriptions.rx_number }</div>
              <div>medication_name: { this.state.prescriptions.medication_name }</div> */}
            </Prescriptions>
          </ul>
          <div>details should show up here</div>
          <button className="home" onClick={this.gotoPage.bind(this, "/")}>
            Home
          </button>
        </div>

    );
  }
};



export default UserDetail;