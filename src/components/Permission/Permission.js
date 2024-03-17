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

  const [user,setUser] = useState(props.autorisation?.user)
  const [role,setRole] = useState(props.autorisation?.role)
  const [company,setCompany] = useState(props.autorisation?.company)
  const [timeCard,setTimeCard] = useState(props.autorisation?.timeCard)
  const [satisfaction,setSatisfaction] = useState(props.autorisation?.satisfaction)
  const [add,setAdd] = useState(props.autorisation?.add)
  const [update,setUpdate] = useState(props.autorisation?.update)
  const [remove,setRemove] = useState(props.autorisation?.remove)
  const [permit,setPermit] = useState(props.autorisation?.permit)
  const [block,setBlock] = useState(props.autorisation?.block)


 




  const handleUpdate = async (id)=>{
    try {
      await axios.put(`http://localhost:8000/miroir/api/update_user_autorisation/${id}/`)
    } catch (error) {
      throw error 
    }
  }

 
useEffect(()=>{
  console.log(user,role,company);
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