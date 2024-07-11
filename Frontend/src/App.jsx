import React, { useContext, useEffect } from 'react'
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import {HomePage, AboutUs,Appointment, LoginPage, RegisterPage} from "./pages/index.jsx"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar.jsx'
import { Context } from './main.jsx'
import axios from 'axios'
import Footer from './components/Footer.jsx'

/*
Explanation Why By Placing Navbar Outside the Router component
Gave Us error
The error caused by the placement of the Navbar outside the Router component arises because the Navbar component likely contains links that utilize react-router-dom's Link or other router components. When Navbar is placed outside the Router, it tries to use these routing components without the router context, which leads to errors.

Explanation
In react-router-dom, components that use routing features such as Link, NavLink, or useNavigate must be rendered within the context of a Router component. This is because these components rely on the router context to function correctly.

Correct Usage
To ensure that the Navbar and other components that depend on the router context work correctly, they must be rendered inside the Router.
*/
const App = () => {
  const { isAuthenticated,setIsAuthenticated, setUser} = useContext(Context); 
  useEffect(() => {
    const fetchUser = async() => {
      try {
        const response = await axios.get("/api/v1/user/patient/me", {
          withCredentials: true
        })
        setIsAuthenticated(true); 
        setUser(response.data.user); 
      } catch (error) {
        setIsAuthenticated(false); 
        setUser({});
      }
    }; 
    // if(isAuthenticated) 
     fetchUser(); 
  }, [isAuthenticated])
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element= {<HomePage/>}/>
            <Route path='/about' element= {<AboutUs/>}/>
            <Route path='/appointment' element= {<Appointment/>}/>
            <Route path='/login' element= {<LoginPage/>}/>
            <Route path='/register' element= {<RegisterPage/>}/>
          </Routes>
          <Footer/>
          <ToastContainer position='top-center'/>
      </Router>
    </>
  )
}

export default App
