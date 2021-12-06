import React, { useState ,useEffect} from "react";
import axios from "axios";
import './App.css';
import Todos from "./components/task";

const BASE_URL = process.env.REACT_APP_BASE_URL;
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [logemail, setLogEmail] = useState("");
const [logpassword, setLogPassword] = useState("");

//const [token,setToken]= useState("");
/*
useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
}, [])
*/
  //const [role, setRole] = useState("61aca7bb67df5f2e24b890a9");
  //const [token,setToken]= useState("");

/*
  useEffect(() => {
    //  const token = localStorage.getItem("token");
     // setToken(token);
  }, [])
*/
const register = async () => {
    try{
    const result=await axios.post(`${BASE_URL}/signup`,
    {
      email:email,
      password:password,
     // role:role
    });
    console.log(result)
    }
    catch(error)
    {
      console.log(console.error)
    }
    
      };
  
    ///////////login 
  
    const login = async () => {
    try{
    
    const result=await axios.post(`${BASE_URL}/login`,
    {
    email:logemail,
    password:logpassword
    });
    console.log(result)
    }
    catch(error)
    {
    console.log(console.error)
    }};

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
