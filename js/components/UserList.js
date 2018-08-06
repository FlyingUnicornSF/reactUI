import React from 'react';  
import User from './User';

const UserList = (props) => {

    const usersMapped = props.users.map((user) =>{
      console.log(user)
      return <User key={user.id} user={user}/>
    });
      //  <pre>
      //     { JSON.stringify(props.users, null, 2) }
      //   </pre>

  return(
    <div> 
      {usersMapped} 
    </div>
  );
};

export default UserList;