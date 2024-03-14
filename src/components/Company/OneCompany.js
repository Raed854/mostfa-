import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPen , faTrash} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import CompanyUpdateModal from './CompanyUpdateModal';
import CompanyDeleteModal from './CompanyDeleteModal';


const OneCompany = (props) => {
    const [openDelete,setOpenDelete] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpenUpdate = () => setOpen(true);
    const handleCloseUpdate = () => setOpen(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    const handleDelete= async (id)=>{
        try {
          console.log(id);
          await axios.delete(`http://localhost:8000/miroir/api/company/${id}/delete/`)
          props.setReload(!props.relaod)
          props.fetchCompanies()
        } catch (error) {
          throw error
        }
      }
    const handleUpdate= async (id,body)=>{
        try {
          console.log(id);
          await axios.put(`http://localhost:8000/miroir/api/company/${id}/`,body)
          props.setReload(!props.relaod)
          props.fetchCompanies()
        } catch (error) {
          throw error
        }
      }

      
  return (
    <div className="cardRole">
        <CompanyUpdateModal open={open} handleCloseUpdate={handleCloseUpdate} company={props.company} handleUpdate={handleUpdate}  />
        <CompanyDeleteModal handleClose={handleCloseDelete} open={openDelete} company={props.company} handleDelete={handleDelete} />
          <div className="card-details">
            <p className="text-title">{props.company.namecompany}</p>
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

export default OneCompany