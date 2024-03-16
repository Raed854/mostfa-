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
     
    <FontAwesomeIcon icon={faKey} className='lock' onClick={handleOpenPermission}  />

    </td>

    <UpdateModal open={open} handleCloseUpdate={handleCloseUpdate} user={props.user}  handleUpdate={handleUpdate} />
    <DeleteModal open={openDelete} handleClose={handleCloseDelete} user={props.user} handleDelete={handleDelete} />
    <Permission open={openPermission} handleClose={handleClosePermission} user={props.user} />
  </tr>
   
  )
}

export default OneUser