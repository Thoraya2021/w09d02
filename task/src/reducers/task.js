const initialState ={

   name: "",
isDeleted:false
   }
   
   const Tasks = (state = initialState ,action)=>{
       const {type,payload}= action;
       switch(type){
        case "GET":
            const {name,isDeleted}= payload;
            return {name,isDeleted};
        default: 
        return state;
   
       }
   }
   
   export default Tasks;
   
   export const GetTask =(data)=>{
       return{
           type:"GET",
           payload:data
       }
   };
   
  