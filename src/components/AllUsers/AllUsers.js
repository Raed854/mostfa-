import React, { useEffect, useState } from "react";
import OneUser from "../OneUser/OneUser";
import "./allUsers.css";
import axios from "axios";

const AllUsers = (props) => {
  const [permission, setPermission] = useState([]);

  const fetchPermission = async (id) => {
    try {
      const data = await axios.get(
        `http://localhost:8000/miroir/api/user_autorisation/${id}/`
      );
      setPermission(data.data);
    } catch (error) {
      throw error;
    }
  };



  useEffect(()=>{

  },[])


  return (
    <div className="allUsersContent">
      <table className="table">
        <thead>
          <tr className="optionsUsers">
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
          {props.users.map((user, index) => {
            fetchPermission(user.id);
            handlePermissions(user.id);
            return (
              <OneUser
                user={user}
                key={index}
                setReload={props.setReload}
                reload={props.reload}
                fetchUsers={props.fetchUsers}
                permission={permission}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
