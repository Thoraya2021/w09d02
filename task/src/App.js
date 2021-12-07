import React, { useState ,useEffect} from "react";
import axios from "axios";
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import Todos from "./components/task";
import signin from './reducers/login';


const BASE_URL = process.env.REACT_APP_BASE_URL;
function App() {

  const state = useSelector((state)=>{
    return {
      signin : state.Signin 
    }
  })
  console.log(state);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [logemail, setLogEmail] = useState("");
const [logpassword, setLogPassword] = useState("");
 const [token,setToken]= useState("");


useEffect(() => {
   const token = localStorage.getItem("token");
    setToken(result.data.token)
}, [])

const register = async () => {
    const result=await axios.post(`${BASE_URL}/signup`,
    {
      email:email,
      password:password,
     // role:role
    });
    console.log(result)
    }

      ///////////login 
  
    const login = async () => {
    
    const result=await axios.post(`${BASE_URL}/login`,
    {
    email:logemail,
    password:logpassword
    });
    console.log(result)
    }
  
   
    localStorage.setItem("token", token);
const data={
  user:result.data.user,
  token:result.data.token
}
dispatch(signin(data));


  return (
    <div className="register">
      <input
        placeholder="email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        type="text"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={register}>sign-up</button>
      <br />
      
            <input placeholder="email" type="text" onChange={(e) => setLogEmail(e.target.value)}   />
    <input placeholder="password" type="password"  onChange={(e) => setLogPassword (e.target.value)}   />
    <button  onClick={login}>log-In</button>
<Todos/>
    </div>
  );
}

export default App;
