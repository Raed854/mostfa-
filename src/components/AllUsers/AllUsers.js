import React, { useEffect, useState } from "react";
import OneUser from "../OneUser/OneUser";
import "./allUsers.css";
import axios from "axios";

const AllUsers = (props) => {
  const [autorisation, setAutorisation] = useState({});
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

  const handlePermissions = () => {
    const obj = {};
    if (permission[0]?.autorisation[0] === "0") {
      obj.user = false;
    } else {
      obj.user = true;
    }
    if (permission[0]?.autorisation[1] === "0") {
      obj.role = false;
    } else {
      obj.role = true;
    }
    if (permission[0]?.autorisation[2] === "0") {
      obj.company = false;
    } else {
      obj.company = true;
    }
    if (permission[0]?.autorisation[3] === "0") {
      obj.timeCard = false;
    } else {
      obj.timeCard = true;
    }
    if (permission[0]?.autorisation[4] === "0") {
      obj.satisfaction = false;
    } else {
      obj.satisfaction = true;
    }
    if (permission[0]?.autorisation[5] === "0") {
      obj.add = false;
    } else {
      obj.add = true;
    }
    if (permission[0]?.autorisation[6] === "0") {
      obj.update = false;
    } else {
      obj.update = true;
    }
    if (permission[0]?.autorisation[7] === "0") {
      obj.remove = false;
    } else {
      obj.remove = true;
    }
    if (permission[0]?.autorisation[8] === "0") {
      obj.permit = false;
    } else {
      obj.permit = true;
    }
    if (permission[0]?.autorisation[9] === "0") {
      obj.block = false;
    } else {
      obj.block = true;
    }
    console.log(obj);
    setAutorisation(obj);
  };


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
                autorisation={autorisation}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
