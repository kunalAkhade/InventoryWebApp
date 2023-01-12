import React,{useEffect} from "react";
import './secondPage.css';
import { useLocation } from "react-router-dom";
import ListItem from "./listItem";
import item from "./item";
function SecondPage(){
   /* const ComponentExample = () => {
        useEffect( () => {
           // componentwillmount in functional component.
           // Anything in here is fired on component mount.
           document.body.style.display="block";
        }, []);
     }   

     const ComponentExamples = () => {
        useEffect(() => {
            return () => {
                // componentwillunmount in functional component.
                // Anything in here is fired on component unmount.
                
            }
        }, []) */
        const ComponentExample = () => {
            useEffect(() => {
                // Anything in here is fired on component mount.
                document.body.style.display="block";
              
                return () => {
                    // Anything in here is fired on component unmount.
                    document.body.style.display="flex";
                    const len=item.length
                    for(var i=0;i<len;i++){
                      item.pop();
                    }
                    
                }
            }, [])
        }
    const Location=useLocation();
    ComponentExample();
   return (
       <div className="container-second">
       <ListItem 
       brandName={Location.state.brand}
       mobileName={Location.state.mobile}
       Ram={Location.state.ram}
       Storage={Location.state.stor}/>
       </div>
      
   );

}

export default SecondPage;