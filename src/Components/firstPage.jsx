import React from "react";
import './firstPage.css';
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";

export const actionItems={
};
function FirstPage(){
 const options=[{
    value:1, label:"4GB"
   },
   {
    value:2, label:"6GB"
   },
   {
    value:3, label:"8GB"
   },
   {
    value:4, label:"12GB"
   }
];

const option=[{
   value:1, label:"64GB"
  },
  {
   value:2, label:"128GB"
  },
  {
   value:3, label:"256GB"
  },
  {
   value:4, label:"512GB"
  }
];
       

     const [brandName, setBrandName]=useState("");
     const [mobileName,setMobileName]=useState("");
     const [ramValue,setRamValue]=useState(options[0].label);
     const [storValue,setStorValue]=useState(option[0].label);
    
   

     function handleStor(event){
      actionItems.stor=event.target.value;
      setStorValue(event.target.value);
     }

     function handleRam(event){
        const ValueRam=event.target.value;
        actionItems.ram=ValueRam;
        setRamValue(ValueRam);
     }

     function handleMobileName(event){
        const Brandvalue=event.target.value;
        actionItems.mobile=Brandvalue;
        setMobileName(Brandvalue);
     }

     function handleBrandName(event){
        const Mobilevalue=event.target.value;
        actionItems.brand=Mobilevalue;
        setBrandName(Mobilevalue);
     }
    
    const navigate=useNavigate();
    const handleClick=(brand,mobile,ram,stor)=>{
     navigate('/product',{
     state: {brand:brandName,
          mobile:mobileName,
          ram:ramValue,
          stor:storValue
    }})
    }

   
    
    return (
        <div className="container">
          <h1>Add Inventory Items</h1>
          <input className="brand-name" type="text" placeholder="Enter Brand Name" onChange={handleBrandName}/>
           <input className="mobile-name" type="text" placeholder="Enter Mobile Name"onChange={handleMobileName}/>
           <label className="label" for="Ram">Select Ram Size:</label>
    
                <select name="Ram" id="Ram" onChange={handleRam}>
                    <option value="4GB"> 4GB</option>
                    <option value="6GB"> 6GB</option>
                    <option value="8GB"> 8GB</option>
                    <option value="12GB">12GB</option>
                </select>
                <div></div>
                <label className="Storage" for="Storage">Select Storage Size:</label>
    
                   <select name="Storage" id="Storage" onChange={handleStor}>
                    <option value="64GB">64GB</option>
                    <option value="128GB">128GB</option>
                    <option value="256GB">256GB</option>
                    <option value="512GB">512GB</option> 
                  </select>    
                  <Link to="/product" state={{brand:brandName, mobile:mobileName,ram:ramValue,stor:storValue}} ></Link><button className="Button" onClick={handleClick}>Add</button>
        </div>
      );
}

export default FirstPage;