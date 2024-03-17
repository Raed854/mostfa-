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
    if(props.permission[0]?.autorisation[0] === "0"){
       setUser(false) 
    }
    else{
      setUser(true)
    }
    if(props.permission[0]?.autorisation[1] === "0"){
       setRole(false) 
    }
    else{
      setRole(true)
    }
    if(props.permission[0]?.autorisation[2] === "0"){
       setCompany(false) 
    }
    else{
      setCompany(true)
    }
    if(props.permission[0]?.autorisation[3] === "0"){
       setTimeCard(false) 
    }
    else{
      setTimeCard(true)
    }
    if(props.permission[0]?.autorisation[4] === "0"){
       setSatisfaction(false) 
    }
    else{
      setSatisfaction(true)
    }
    if(props.permission[0]?.autorisation[5] === "0"){
       setAdd(false) 
    }
    else{
      setAdd(true)
    }
    if(props.permission[0]?.autorisation[6] === "0"){
       setUpdate(false) 
    }
    else{
      setUpdate(true)
    }
    if(props.permission[0]?.autorisation[7] === "0"){
       setRemove(false) 
    }
    else{
      setRemove(true)
    }
    if(props.permission[0]?.autorisation[8] === "0"){
       setPermit(false) 
    }
    else{
      setPermit(true)
    }
    if(props.permission[0]?.autorisation[9] === "0"){
       setBlock(false) 
    }
    else{
      setBlock(true)
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
                            <input type="checkbox" className="ui-checkbox" checked={user}  onChange={()=>setUser(!user)} />
                            <p>Show Users</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox" checked={role}  onChange={()=>setRole(!role)} />
                            <p>Show Role</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox" checked={company}  onChange={()=>setCompany(!company)} />
                            <p>Show Company</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox" checked={timeCard}  onChange={()=>setTimeCard(!timeCard)} />
                            <p>Show Time Card</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox" checked={satisfaction}  onChange={()=>setSatisfaction(!satisfaction)} />
                            <p>Show Satisfaction</p>
                        </div>
                    </div>
                    <div className='form-right-right'>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox" checked={add}  onChange={()=>setAdd(!add)} />
                            <p>Add Users</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox" checked={update}  onChange={()=>setUpdate(!update)} />
                            <p>Edit Users</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox" checked={remove}  onChange={()=>setRemove(!remove)} />
                            <p>Delete Users</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox" checked={permit}  onChange={()=>setPermit(!permit)} />
                            <p>Give Permission</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" className="ui-checkbox" checked={block}  onChange={()=>setBlock(!block)} />
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