import React, { useEffect, useState } from "react";
import axios from "axios";
import "./role.css";
import OneRole from "./OneRole";
import RoleAddModal from "./RoleAddModal";

const Role = () => {
    const [reload,setReload] = useState(false)
    const [roles,setRoles] = useState([])

    const fetchRoles = async () => {
            const roles = await axios.get('http://localhost:8000/miroir/api/role/')
            console.log(roles);
            setRoles(roles.data)
        
    }
   

    useEffect(()=>{
        fetchRoles()
    },[reload,roles.length])

  return (
      <div className="allRoleContainer">
        <RoleAddModal setReload={setReload} relaod={reload} fetchRoles={fetchRoles} />
            {
                roles.map((role,i)=>{
                    return <OneRole role={role} key={i} setReload={setReload} relaod={reload} fetchRoles={fetchRoles} />
                })
            }
      </div>
  );
};

export default Role;
