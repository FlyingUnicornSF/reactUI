import React, { Component } from "react";
import UserList from "./UserList";

class Users extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date(),
      users: []
    };
  }

  componentDidMount() {
    this.getJSON("/users").then((result) => {
      this.setState({users: result});
    });
  }
  
  // fetchUsers() {
  //   return new Promise((resolve, reject) => {
  //     const xhr = new XMLHttpRequest();
  //     xhr.open("GET", "/users");
  //     xhr.onload = () => resolve(JSON.parse(xhr.responseText));
  //     xhr.onerror = () => reject(xhr.statusText);
  //     xhr.send();
  //   });
  // }

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
          <div className="users-container">
            <h3>Users</h3>
            <p>click on a user to see their information</p>
              <UserList users={this.state.users}/>
            </div>
        </div>

    );
  }
};

export default Users;