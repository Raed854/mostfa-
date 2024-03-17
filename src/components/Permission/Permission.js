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
  const [permission,setPermission] = useState([])

  const [user,setUser] = useState(false)
  const [role,setRole] = useState(false)
  const [company,setCompany] = useState(false)
  const [timeCard,setTimeCard] = useState(false)
  const [satisfaction,setSatisfaction] = useState(false)
  const [add,setAdd] = useState(false)
  const [update,setUpdate] = useState(false)
  const [remove,setRemove] = useState(false)
  const [permit,setPermit] = useState(false)
  const [block,setBlock] = useState(false)


  const handlePermissions = () =>{
    console.log(permission);
  }


  const fetchPermission = async (id) => {
    try {
      const data = await axios.get(`http://localhost:8000/miroir/api/user_autorisation/${id}/`)
      setPermission(data.data)
      console.log(data.data);
    } catch (error) {
      throw error
    }
  }

  const handleUpdate = async (id)=>{
    try {
      await axios.put(`http://localhost:8000/miroir/api/update_user_autorisation/${id}/`)
    } catch (error) {
      throw error 
    }
  }

  useEffect(()=>{
    fetchPermission(props.user.id)
    handlePermissions()
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
                            <input type="checkbox" className="ui-checkbox"  />
                            <p>Show Users</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox"/>
                            <p>Show Role</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox"/>
                            <p>Show Company</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox"/>
                            <p>Show Time Card</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox"/>
                            <p>Show Satisfaction</p>
                        </div>
                    </div>
                    <div className='form-right-right'>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox"/>
                            <p>Add Users</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox"/>
                            <p>Edit Users</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox"/>
                            <p>Delete Users</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox"/>
                            <p>Give Permission</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox"/>
                            <p>Block Users</p>
                        </div>
                    </div>
                </div>
            </div>

          <div className="modalButtons">
            <Button className="modalBtn" onClick={props.handleClose}>Cancel</Button>
            <Button className="modalBtn" >Confirm</Button>
          </div>
        </div>
      </Box>
    </Modal>
  </div>
  )
}

export default Permission