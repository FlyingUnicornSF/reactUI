import React from 'react';  
import User from './User';

const UserList = (props) => {

    const itemsMapped = props.users.map((user) =>{
      console.log(user)
      return <User key={user.id} user={user}/>
    });
      //  <pre>
      //     { JSON.stringify(props.users, null, 2) }
      //   </pre>

  return(
    <div> 
      {itemsMapped} 
    </div>
  );
};

export default UserList;