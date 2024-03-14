import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPen , faTrash} from '@fortawesome/free-solid-svg-icons';
import RoleDeleteModal from './RoleDeleteModal';
import axios from 'axios';
import RoleUpdateModal from './RoleUpdateModal';

const OneRole = (props) => {
    const [openDelete,setOpenDelete] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpenUpdate = () => setOpen(true);
    const handleCloseUpdate = () => setOpen(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    const handleDelete= async (id)=>{
        try {
          console.log(id);
          await axios.delete(`http://localhost:8000/miroir/api/roles/${id}/delete/`)
          props.setReload(!props.relaod)
          props.fetchRoles()
        } catch (error) {
          throw error
        }
      }
    const handleUpdate= async (id,body)=>{
        try {
          console.log(id);
          await axios.put(`http://localhost:8000/miroir/api/roles/${id}/`,body)
          props.setReload(!props.relaod)
          props.fetchRoles()
        } catch (error) {
          throw error
        }
      }
  return (
    <div className="cardRole">
        <RoleUpdateModal open={open} handleCloseUpdate={handleCloseUpdate} role={props.role} handleUpdate={handleUpdate}  />
        <RoleDeleteModal handleClose={handleCloseDelete} open={openDelete} role={props.role} handleDelete={handleDelete} />
          <div className="card-details">
            <p className="text-title">{props.role.role}</p>
          </div>
          <div className="card-button">
                <FontAwesomeIcon icon={faPen} className="roleButtons" onClick={(e)=>{
                    e.preventDefault()
                    handleOpenUpdate()
                }} />
                <FontAwesomeIcon icon={faTrash} className="roleButtons" onClick={(e)=>{
                    e.preventDefault()
                    handleOpenDelete()
                }} />
          </div>
        </div>
  )
}

export default OneRole