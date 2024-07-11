import React, { useContext, useState } from 'react'
import { Context } from '../main'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';





const LoginPage = () => {
  const {isAuthenticated, setIsAuthenticated} = useContext(Context)
  const[email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 

  const navigateTo = useNavigate(); 
  const handleLogin = async(e) => {
    e.preventDefault(); 
    try {
      const user = await axios.post("/api/v1/user/login", {
        email, 
        password, 
        role:"Patient"
      
      }, {
        withCredentials: true, 
        headers : {
          "Content-Type": "application/json"
        }
      }).then(res => {
        toast.success(res.data.message); 
        setIsAuthenticated(true); 
        navigateTo("/")
      })
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }; 

  if(isAuthenticated){
    return <Navigate to={"/"}/>
  }
  return (
    <div className='container form-component logic-form'>
        <h2>Sign In</h2>
        <p>Please Login To Continue</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat impedit, quia debitis quo accusantium quod et hic dicta quas dolore.</p>
        <form onSubmit={handleLogin}>
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'/>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password'/>
    
          <div style = {{
            gap:"10px", 
            justifyContent:"flex-end", 
            flexDirection: "row"
          }}>
            <p style={{marginBottom: 0}}
            >Not Registered?</p>
            <Link to={"/register"} style={{textDecoration: "node", alignItems:"center"}}> Register Here</Link>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Login</button>
          </div>
        </form>
    
    </div>
  )
}

export default LoginPage
