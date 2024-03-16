import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import add from "../../assets/add.png"


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

const UpdateModal = (props) => {

    const [image, setImage] = React.useState(props.user.imag);
    const [firstName, setFirstName] = React.useState(props.user.username);
    const [lastName, setLastName] = React.useState(props.user.prenom);
    const [date, setDate] = React.useState(props.user.date_fin);
    const [password, setPassword] = React.useState("");
    const [company,setCompany] = useState("")
    const [role, setRole] = React.useState("");
    const [cin, setCin] = React.useState(props.user.cin);
    const [details,setDetails] = useState({})



    const handleDetails = async (id) =>{
      try {
        const details = await axios.get(`http://localhost:8000/miroir/api/user_role_company/${id}/`)
        setDetails(details.data[0])
        setCompany(details.data[0].company)
        setRole(details.data[0].role)
      } catch (error) {
        throw error
      }
    }

    const profileUpload= async (e)=>{
        const formData=new FormData()
        formData.append("file",e.target.files[0])
        formData.append("upload_preset","oztadvnr")
        await axios.post("https://api.cloudinary.com/v1_1/dl4qexes8/upload",formData).then((response)=>{
          setImage(response.data["secure_url"])
        
        }).catch((error)=>{
          throw error
        })
        }

        useEffect(()=>{
          handleDetails(props.user.id)          
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
          <input type="text" placeholder="First name" className="textInputs" value={firstName || ""} onChange={(e)=>setFirstName(e.target.value)} />
          <input type="text" placeholder="Last name" className="textInputs"  value={lastName || ""} onChange={(e)=>setLastName(e.target.value)} />
          <input type="text" placeholder="CIN" className="textInputs"  value={cin || ""} onChange={(e)=>setCin(e.target.value)} />
          <input type="text" placeholder="Role" className="textInputs"  value={role || ""} onChange={(e)=>setRole(e.target.value)} />
          <input type="text" placeholder="Password" className="textInputs"  value={company || ""} onChange={(e)=>setCompany(e.target.value)} />
          <input type="password" placeholder="Password" className="textInputs"  value={password || ""} onChange={(e)=>setPassword(e.target.value)} />
          <input type="date" placeholder="Date"  value={date || ""} onChange={(e)=>setDate(e.target.value)} />
          {/* Replacing the input with the custom file upload label */}
          <label className="custum-file-upload" htmlFor="file">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24">
                {/* SVG code */}
              </svg>
            </div>
            <div className="text">
              {/* <span>{image.slice(0,30)+"..."}</span> */}
              <img src={image || add} alt="" className="addImage"/>
            </div>
            <input type="file" id="file"  onChange={(e)=>profileUpload(e)}  />
          </label>
          {/* End of custom file upload label */}
          <div className="modalButtons">
            <Button className="modalBtn" onClick={(e)=>{
                e.preventDefault();
                props.handleUpdate(props.user.id,{nom:firstName,prenom:lastName,password:password,cin:cin,role:role,imag:image})
                props.handleCloseUpdate();
            }}>Update</Button>
            <Button className="modalBtn" onClick={props.handleCloseUpdate}>Cancel</Button>
          </div>
        </div>
      </Box>
    </Modal>
  </div>
  )
}

export default UpdateModal