import React, { useState } from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import axios from 'axios';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid black",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  };

const RoleAddModal = (props) => {
  const [open, setOpen] = useState(false);
  const [role,setRole] = useState('')
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false);

  const handleAdd = async (body)=>{
        try {
            await axios.post('http://localhost:8000/miroir/api/role/create/',body)
            props.setReload(!props.reload)
            props.fetchRoles()
        } catch (error) {
            
        }
  }

  return (
    <div>
      <Button className="addBtn" onClick={handleOpen}>
        Add
      </Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="form">
            <input
              type="text"
              placeholder="Role"
              className="textInputs"
              value={role || ""}
              onChange={(e) => setRole(e.target.value)}
            />

            <div className="modalButtons">
              <Button
                className="modalBtn"
                onClick={(e) => {
                  e.preventDefault();
                  handleAdd({role:role})
                  handleClose();
                }}
              >
                Add
              </Button>
              <Button className="modalBtn" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default RoleAddModal