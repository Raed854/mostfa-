import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllUsers } from '../../redux/userSlice'
import AllUsers from './AllUsers'
import BasicModal from '../OverView/BasicModal'
import axios from 'axios'

const UsersView = () => {
    const [users,setUsers] = useState([])
    const [reload,setReload] = useState(false)
    

    const dispatch = useDispatch()
    
    const fetchUsers = async ()=>{
      const users = await dispatch(getAllUsers())
      setUsers(users.payload.reverse())
      console.log(users.length);
    }
    useEffect(()=>{
      fetchUsers()
    },[reload,users.length])
  return (
    
    <div>
        <BasicModal   setReload={setReload} reload={reload} fetchUsers={fetchUsers} />
        <AllUsers  users={users} setReload={setReload} reload={reload}  fetchUsers={fetchUsers} />     
    </div>
  )
}

export default UsersView