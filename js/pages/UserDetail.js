import React, { Component } from 'react';
import PrescriptionList from '../components/PrescriptionList';

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

    this.getJSON( "/prescriptions/?user_id=" + this.props.match.params.id ).then(  (result) => {
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

// not gonna lie, I totally took this one from open source repo 
  gotoPage(path) {
    location.href = `${path}`;
  }
  // <pre>
  // { JSON.stringify(this.props, null, 2) }
  // </pre>

  render() {
    return (
        <div className="user-info-container">
          <ul className="user-info">
            <li>First Name: { this.state.user.first_name }</li>
            <li>Last Name: { this.state.user.last_name }</li> 
            <li>Email address: { this.state.user.email }</li> 
            <li>Phone Number: { this.state.user.phone }</li> 
            <li>Date of Birthe: { this.state.user.date_of_birth }</li> 
            <PrescriptionList prescriptions={this.state.prescriptions}>
              <div text="children"> React commend to use composition instead of inheritance like this.
                JSX tags in side of PrescriptionList, it get passed to PrescriptionList
                as childern. Including this paragrasph.</div>
            </PrescriptionList>
          </ul>
          {/* another way (Link to={}) page navigation - took it out from an open source project repo*/}
          <button className="home" onClick={this.gotoPage.bind(this, "/")}>
            Back to Home Page
          </button>
        </div>

    );
  }
};



export default UserDetail;