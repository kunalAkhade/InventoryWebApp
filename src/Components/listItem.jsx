import React from "react";
//import { useState } from "react";
//import data from './Data.jsx'; 
import store from './store.js';
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import change from "./action.js";
import rootReducer from "./rootReducer.js";
import reducer from "./reducer.js";


function ListItem(props){
   const count = useSelector((state) => state.reducer)
         
   
   console.log("New State",count)
   
   
   return (
   <div className="outer-container">
      <div className="inner-container">
         
         <h1 style={{display:"inline"}} >Inventory List</h1>
         <select name="Sort" id="Sort">
                    <option selected="Order by...">Order by...</option>
                    <option value="128GB">Recent</option>
                    <option value="256GB">Alphabet</option>
                    <option value="512GB">512GB</option> 
         </select> 
      </div>
      <div>
         <table className="table-head">
            <tr>
               <th>Brand Name</th>
               <th>Device Name</th>
               <th>RAM</th>
               <th>Storage</th>
            </tr>
            
            {
              count.map((params)=>{
               
               return <tr>
                  
             <td>{params.brand}</td>
             <td>{params.mobile}</td>
             <td>{params.ram}</td>
             <td>{params.stor}</td>
             </tr> 
            })}
            
         </table>
      </div>
   </div>


     
   );
}



export default ListItem;