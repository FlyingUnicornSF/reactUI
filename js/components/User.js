import React from "react";
import { Link } from 'react-router-dom';

const User = (props) => {
  return (
      <Link to={"/users/" + props.user.id} className="user=details">
        <div className="full-name">Full Name: {props.user.first_name} {props.user.last_name}</div>
        {/* <pre>
          { JSON.stringify(props.user, null, 2) }
        </pre> */}
        {/* <div className="email">Email Addess: {props.user.email}</div>
        <div className="phone">Phone Number: {props.user.phone}</div>
        <div calssName="dob">Date of Birth: {props.user.date_of_birth}</div> */}
      </Link>
    );
}

export default User;