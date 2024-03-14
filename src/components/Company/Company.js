import React , { useEffect, useState } from "react";
import './company.css';
import axios from "axios";
import CompanyAddModal from "./CompanyAddModal";
import OneCompany from "./OneCompany";
const Company = () => {
    const [reload,setReload] = useState(false)
    const [companies,setCompanies] = useState([])

    const fetchCompanies = async () => {
            const companies = await axios.get('http://localhost:8000/miroir/api/company/')
            setCompanies(companies.data)
        
    }
   

    useEffect(()=>{
        fetchCompanies()
    },[reload,companies.length])
  return (
    <div className="allRoleContainer">
        <CompanyAddModal setReload={setReload} relaod={reload} fetchCompanies={fetchCompanies} />
            {
                companies.map((company,i)=>{
                    return <OneCompany company={company} key={i} setReload={setReload} relaod={reload} fetchCompanies={fetchCompanies} />
                })
            }
      </div>
  )
}

export default Company