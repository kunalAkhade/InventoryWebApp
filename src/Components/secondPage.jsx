import React from "react";
import './secondPage.css';
import { useLocation } from "react-router-dom";
function SecondPage(){
    const Location=useLocation();
   return (
       <div>
         <h1>Inventory List</h1>
         
       </div>
   );

}

export default SecondPage;