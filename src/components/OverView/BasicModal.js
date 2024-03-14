import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./basicModal.css";
import axios from "axios";
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

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState(0);
  const [company,setCompany] = React.useState(0)
  const [cin, setCin] = React.useState("");
  const [roles,setRoles] = React.useState([])
  const [companies,setCompanies] = React.useState([])

  const fetchCompanies = async () => {
          const companies = await axios.get('http://localhost:8000/miroir/api/company/')
          setCompanies(companies.data)
      
  }

  const fetchRoles = async () => {
          const roles = await axios.get('http://localhost:8000/miroir/api/role/')
          setRoles(roles.data)
      
  }
  const handleOpen = () =>{
    setOpen(true);
    setImage("")
  }
  const handleClose = () => setOpen(false);

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

    const handleAdd = async (body) => {
        try {
          if(date){
            body.date_fin = date
          }
          console.log(body);
          const newUser = await axios.post("http://localhost:8000/miroir/api/users/create/",body);
          console.log(newUser.data.id);
          await axios.post("http://localhost:8000/miroir/api/create_user_role_company/",{user:newUser.data.id,role:role,company:company})
          props.setReload(!props.reload);
          props.fetchUsers();
        } catch (error) {
          throw error
        }
    }

    React.useEffect(()=>{
        fetchCompanies()
        fetchRoles()
    },[image])



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
            <input type="text" placeholder="First name" className="textInputs"  onChange={(e)=>setFirstName(e.target.value)} />
            <input type="text" placeholder="Last name" className="textInputs"   onChange={(e)=>setLastName(e.target.value)} />
            <input type="text" placeholder="CIN" className="textInputs"   onChange={(e)=>setCin(e.target.value)} />
            <div class="custom-select">
  <select onChange={(e)=>{
    setRole(e.target.value)
  }} >
    <option value="">Role</option>
      {
        roles.map((role,i)=>{
          return <option value={role.id}>{role.role}</option>
        })
      }
  </select>
</div>
            <div className="custom-select">
  <select onChange={(e)=>{
    setCompany(e.target.value)
  }}>
    <option value="">Company</option>
    {
        companies.map((company,i)=>{
          return <option value={company.id}>{company.namecompany}</option>
        })
      }
  </select>
</div>
            <input type="password" placeholder="Password" className="textInputs"   onChange={(e)=>setPassword(e.target.value)} />
            <input type="date" placeholder="Date"  onChange={(e)=>setDate(e.target.value)} />
            {/* Replacing the input with the custom file upload label */}
            <label className="custum-file-upload" htmlFor="file">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24">
                  {/* SVG code */}
                </svg>
              </div>
              <div className="text">
                <img src={image || add} alt="" className="addImage"/>
              </div>
              <input type="file" id="file"  onChange={(e)=>profileUpload(e)}   />
            </label>
            {/* End of custom file upload label */}
            <div className="modalButtons">
              <Button className="modalBtn" onClick={(e)=>{
                  e.preventDefault();
                  fetchCompanies()
                  fetchRoles()
                  handleAdd({username:firstName,prenom:lastName,password:password,cin:cin,imag:image});
                  handleClose();
              }}>Add</Button>
              <Button className="modalBtn" onClick={handleClose}>Cancel</Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
