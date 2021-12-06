import React, { useState,useEffect } from "react";
import axios from "axios";
import "./style.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Todos = () => {
    const [todos,setTodos] = useState([]);
    const [token,setToken]= useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    todoss();

  }, []);

  ///get all 
const todoss = async () => {
try{

const result=await axios.get(`${BASE_URL}/todo/alltodos`,
{
  headers:
   { Authorization: `bearer ${token}` },
});
setTodos(result.data)
//console.log(result)
}
catch(error)
{
console.log(console.error)
}

};


//////////add new tasks
const addtodo = async () => {
    await axios.post(
      `${BASE_URL}/todo/todos`,
      {
        name:todos,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    todoss(token);
};


/*
todoRouter.get("/alltodos", getalltodos);
todoRouter.get("/todos/:id", authentication, getTodosById);
todoRouter.post("/todos", createtodo);
todoRouter.put("/todos/:id",authorization, updateTodo);
todoRouter.delete("/todos/:id",authentication, deleteTodo);
*/

const deletetodo = async (id) => {
    await axios.delete(
      `${BASE_URL}/todo/todos/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    todoss(token);
};

  return ( <div className="tasks">
        <h1>Here what`s Tasks</h1>
        <div>
         <input
           className="addtodo"
           onChange={(e) => setTodos(e.target.value)}
           placeholder="here what to do"
         />
         
<button className="addtask" onClick={addtodo}>  add task</button>
</div>

<ul className="list-t">
  {todos.map((item) => (
 <div key={item._id}>
    <li>
        {item.name} 
  </li>  
   <div >
      <button className="delete" onClick={() => deletetodo(todos._id)} >delete task</button>
 </div>   
  </div>
      ))}

  </ul>

  </div>
  )};

export default Todos;