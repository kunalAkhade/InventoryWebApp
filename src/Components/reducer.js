import item from "./item.js";
const initialData=[];
const reducer=(state=initialData,action)=>{
     console.log("Initial state",initialData)
     
     
    
    
      switch(action.type){
       
        case "ADD_DATA" : 
        console.log("Previous state",state);
       return [
          ...state,
          action.payload
        ]
        default: return state;
      }
}

export default reducer;
/*
return [
  ...state,
  action.payload
]*/