import React from "react";
//import { useState } from "react";
//import data from './Data.jsx'; 
import store from './store.js';
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import change from "./action.js";
import rootReducer from "./rootReducer.js";


function ListItem(props){
   const myState= useSelector((state)=> state.reducer);
  
   const dispatch=useDispatch();
   //dispatch(change())
   console.log("Hello",store.getState());
 //listingItems();
   return (
   <div className="outer-container">
      <div className="inner-container">
         <h1 style={{display:"inline"}}>Inventory List</h1>
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
            
              {/*.map((params)=>{
               
                  return <tr>
                <td>{params.brand}</td>
                <td>{params.mobile}</td>
                <td>{params.ram}</td>
                <td>{params.storage}</td>
                </tr> 
               }
            )*/}
            
         </table>
      </div>
   </div>


     
   );
}



export default ListItem;