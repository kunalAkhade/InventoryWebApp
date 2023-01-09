import {actionItems} from './firstPage.jsx'
const change=()=>{
    return {
    type:'ADD_DATA',
    payload: actionItems
    }
}

export default change;