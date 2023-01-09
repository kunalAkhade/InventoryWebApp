const initialData=[{
  brand:"",
  mobile:"",
  ram:"",
  storage:""
}];
const reducer=(state=initialData,action)=>{
     
      switch(action.type){
        case "ADD_DATA" : return {
          ...state,
          data:action.payload
        }
        default: return state;
      }
}

export default reducer;