import React, { useEffect, useState } from 'react';
import OneUser from '../OneUser/OneUser';
import "./allUsers.css";




const AllUsers = (props) => {


  return (
    <div className="allUsersContent">
      <table className="table">
        <thead>
          <tr className='optionsUsers'>
            <th scope="col">Profile image</th>
            <th scope="col">Username</th>
            <th scope="col">CIN</th>
            <th scope="col">Role</th>
            <th scope="col">Company</th>
            <th scope="col">Blocked</th>
            <th scope="col"></th>
            <th scope="col"></th>
        
          </tr>
        </thead>
        <tbody>
          {
           props.users.map((user,index)=>{
                
                return (<OneUser user={user} key={index}  setReload={props.setReload} reload={props.reload} fetchUsers={props.fetchUsers} />) 
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default AllUsers;