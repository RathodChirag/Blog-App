import './login.css'
import Topbar from '../../components/topbar/topbar';
import { Link } from "react-router-dom";
import { useContext, useRef } from 'react';
import {Context} from "../../context/Context.jsx"
import axios from 'axios';

export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
const {dispatch, isFetching}=useContext(Context)


  const handleSubmit = async (e)=>{
      e.preventDefault();
      dispatch({type:"LOGIN_START"});
      try {
        const res = await axios.post("http://localhost:5000/api/auth/login",{
          username:userRef.current.value,
          password:passwordRef.current.value,
        })
        dispatch({type:"LOGIN_SUCCESS",payload:res.data});
      } catch (error) {
        dispatch({type:"LOGIN_FAILURE"});
      }
  }


  return (
    <>
    <Topbar/>
    <div className='login'>
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="loginInput" type="text" placeholder='Enter username...'
         ref={userRef}/>
        <label>Password</label>
        <input className="loginInput" type="password" placeholder='Enter password...' 
        ref={passwordRef}/>
        <button className="loginButton" type='submit'>Login</button>
      </form>
      <button className="loginRegisterButton">
      <Link to="/register" className="link">Register</Link>
      </button>
    </div>
    </>
  )
}
