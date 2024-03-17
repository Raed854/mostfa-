import React, { useEffect, useState } from 'react'
import "./oneUser.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faKey, faLock , faLockOpen , faPen , faTrash} from '@fortawesome/free-solid-svg-icons';
import UpdateModal from '../OverView/UpdateModal';
import axios from 'axios';
import DeleteModal from '../OverView/DeleteModal';
import { useNavigate } from 'react-router-dom';
import Permission from '../Permission/Permission';

const OneUser = (props) => {
  const [details,setDetails] = useState({})
  const [autorisation, setAutorisation] = useState({});


  const navigate = useNavigate()
  const [block,setBlocked] = useState(props.user.is_active)
  const [openDelete,setOpenDelete] = React.useState(false);
  const [openPermission,setOpenPermission] = useState(false)
  const [open, setOpen] = React.useState(false);

  
  const handleOpenPermission = () => setOpenPermission(true)
  const handleClosePermission = () => setOpenPermission(false)
  const handleOpenUpdate = () => setOpen(true);
  const handleCloseUpdate = () => setOpen(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);






  const handleUpdate= async (id,body)=>{
    try {
      await axios.put(`http://localhost:8000/miroir/api/users/${id}/edit/`,body)
      props.setReload(!props.relaod)
      props.fetchUsers()
    } catch (error) {
      throw error
    }
  }
  const handleDetails = async (id) =>{
    try {
      const details = await axios.get(`http://localhost:8000/miroir/api/user_role_company/${id}/`)
      props.setReload(!props.relaod)
      props.fetchUsers()
      setDetails(details.data[0])
    } catch (error) {
      throw error
    }
  }
  
  const handleDelete= async (id)=>{
    try {
      await axios.delete(`http://localhost:8000/miroir/api/users/${id}/delete/`)
      props.setReload(!props.relaod)
      props.fetchUsers()
    } catch (error) {
      throw error
    }
  }

  const handleBlockUser = async (id,body) =>{
    try {
      await axios.put(`http://localhost:8000/miroir/api/users/${id}/edit/`,body)
      setBlocked(body.is_active)
      props.setReload(!props.relaod)
      props.fetchUsers()
    } catch (error) {
      throw error
    }
  }

  const handlePermissions = () => {
    const obj = {};
    if (props.permission[0]?.autorisation[0] === "0") {
      obj.user = false;
    } else {
      obj.user = true;
    }
    if (props.permission[0]?.autorisation[1] === "0") {
      obj.role = false;
    } else {
      obj.role = true;
    }
    if (props.permission[0]?.autorisation[2] === "0") {
      obj.company = false;
    } else {
      obj.company = true;
    }
    if (props.permission[0]?.autorisation[3] === "0") {
      obj.timeCard = false;
    } else {
      obj.timeCard = true;
    }
    if (props.permission[0]?.autorisation[4] === "0") {
      obj.satisfaction = false;
    } else {
      obj.satisfaction = true;
    }
    if (props.permission[0]?.autorisation[5] === "0") {
      obj.add = false;
    } else {
      obj.add = true;
    }
    if (props.permission[0]?.autorisation[6] === "0") {
      obj.update = false;
    } else {
      obj.update = true;
    }
    if (props.permission[0]?.autorisation[7] === "0") {
      obj.remove = false;
    } else {
      obj.remove = true;
    }
    if (props.permission[0]?.autorisation[8] === "0") {
      obj.permit = false;
    } else {
      obj.permit = true;
    }
    if (props.permission[0]?.autorisation[9] === "0") {
      obj.block = false;
    } else {
      obj.block = true;
    }
    console.log(obj);
    setAutorisation(obj);
  };

  useEffect(()=>{
    handleDetails(props.user.id)
  },[props.relaod])

  return (
   
    <tr className="oneTip">
    <td>
      <img className="img_tip" src={props.user.imag} alt=''/>
    </td>
    <td>
      <h5>{props.user.username+" "+props.user.prenom}</h5>
    </td>
    <td>
      <h5>{props.user.cin}</h5>
    </td>

    <td>
      <label className="date_tip">
        {details?.role}
      </label>
    </td>
    <td>
      <label className="date_tip">
        {details?.company}
      </label>
    </td>
    <td>
    {( block && true )?<FontAwesomeIcon icon={faLockOpen} className='lock'  onClick={()=>{handleBlockUser(props.user.id,{is_active:!block})}}/>  :
            <FontAwesomeIcon icon={faLock} className='lock' style={{color:"red"}} onClick={()=>{handleBlockUser(props.user.id,{is_active:!block})}} />
            }
    </td>
    
    <td className='buttons' >
    <FontAwesomeIcon icon={faTrash} className='lock' style={{color:"red"}}  onClick={handleOpenDelete}  />
    </td>
    <td className='buttons' >
     
    <FontAwesomeIcon icon={faPen} className='lock'   onClick={handleOpenUpdate} />

    </td>
    <td className='buttons' >
     
    <FontAwesomeIcon icon={faKey} className='lock' onClick={(e)=>{
      e.preventDefault()
      handleOpenPermission()
    }}  />

    </td>

    <UpdateModal open={open} handleCloseUpdate={handleCloseUpdate} user={props.user}  handleUpdate={handleUpdate} />
    <DeleteModal open={openDelete} handleClose={handleCloseDelete} user={props.user} handleDelete={handleDelete} />
    <Permission open={openPermission} handleClose={handleClosePermission} user={props.user} autorisation={autorisation} />
  </tr>
   
  )
}

export default OneUser