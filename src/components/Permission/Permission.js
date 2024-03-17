import React, {  useEffect, useState } from 'react'
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
  const [autorisation, setAutorisation] = useState({});


  const [user,setUser] = useState(autorisation?.user)
  const [role,setRole] = useState(autorisation?.role)
  const [company,setCompany] = useState(autorisation?.company)
  const [timeCard,setTimeCard] = useState(autorisation?.timeCard)
  const [satisfaction,setSatisfaction] = useState(autorisation?.satisfaction)
  const [add,setAdd] = useState(autorisation?.add)
  const [update,setUpdate] = useState(autorisation?.update)
  const [remove,setRemove] = useState(autorisation?.remove)
  const [permit,setPermit] = useState(autorisation?.permit)
  const [block,setBlock] = useState(autorisation?.block)


 
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
    return obj
  };



  const handleUpdate = async (id)=>{
    try {
      await axios.put(`http://localhost:8000/miroir/api/update_user_autorisation/${id}/`)
    } catch (error) {
      throw error 
    }
  }

 
useEffect(()=>{
  console.log(props.permission);
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