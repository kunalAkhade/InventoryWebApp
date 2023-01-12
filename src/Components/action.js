import item from "./item.js";
const change=()=>{
    console.log("Action Dispatched")
    console.log("Payload",item)
    return {
    type:'ADD_DATA',
    payload: item
    }
}

export default change;