import React, { useEffect, useState } from 'react'
import "./permission.css"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import axios from 'axios';


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    bgcolor: "background.paper",
    border: "2px solid black",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  };

const Permission = (props) => {
  const [permission,setPermission] = useState("")


  const fetchPermission = async (id) => {
    try {
      const data = await axios.get(`http://localhost:8000/miroir/api/user_autorisation/${id}/`)
      setPermission(data.data[0].autorisation)
      console.log(data.data[0].autorisation);
    } catch (error) {
      throw error
    }
  }

  const handleUpdate = async ()=>{
    try {
      await axios.put(`http://localhost:8000/miroir/api/update_user_autorisation/${id}/`)
    } catch (error) {
      throw error 
    }
  }

  useEffect(()=>{
    fetchPermission(props.user.id)
  },[])


  return (
    <div>
    <Modal
      open={props.open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="form">
            <div className='permission-form'>
                <div className='form-left'>
                <img className="img_tip_left" src={props.user.imag} alt=''/>
                    <input type="password" placeholder="Password" className="textInputs-left"  />
                    <p>Starting Date</p>
                    <input type="date" placeholder="Date" className='calendar' />
                    <p>Final Date</p>
                    <input type="date" placeholder="Date" className='calendar' />
                </div>
                <div className='form-right'>
                    <div className='form-right-left'>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox"/>
                            <p>Users</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox"/>
                            <p>Role</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox"/>
                            <p>Company</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox"/>
                            <p>Time Card</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox"/>
                            <p>Satisfaction</p>
                        </div>
                    </div>
                    <div className='form-right-right'>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox"/>
                            <p>Add</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox"/>
                            <p>Edit</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox"/>
                            <p>Delete</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox"/>
                            <p>Permission</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox"/>
                            <p>Blocking</p>
                        </div>
                    </div>
                </div>
            </div>

          <div className="modalButtons">
            <Button className="modalBtn" onClick={props.handleClose}>Cancel</Button>
            <Button className="modalBtn" onClick="test()">Confirm</Button>
          </div>
        </div>
      </Box>
    </Modal>
  </div>
  )
}

export default Permission