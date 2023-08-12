import './register.css'
import Topbar from '../../components/topbar/topbar';
import { Link } from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';

export default function Register() {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(false);

  const handleSubmit = async (e)=>{
     e.preventDefault();
     setError(false);
     try {
      const res = await axios.post("http://localhost:5000/api/auth/register",{
        username,
        email,
        password
       })
       res.data && window.location.replace("/login");
     } catch (error) {   
     setError(true);
     } 
  }

  return (
    <>
    <Topbar/>
    <div className='register'>
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
      <label>Username</label>
        <input className="registerInput" type="text" placeholder='Enter username...' 
        onChange={(e)=>setUsername(e.target.value)}/>
        <label>Email</label>
        <input className="registerInput" type="email" placeholder='Enter email...' 
        onChange={(e)=>setEmail(e.target.value)}/>
        <label>Password</label>
        <input className="registerInput" type="password" placeholder='Enter password...' 
        onChange={(e)=>setPassword(e.target.value)}/>
        <button className="registerButton" type='submit'>Register</button>
      </form>
      <button className="registerLoginButton">
      <Link to="/login" className="link">Login</Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}> something went wrong !!</span>}
    </div>
    </>
  )
}
