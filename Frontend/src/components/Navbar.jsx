import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";  // Ensure the path is correct
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(true); 
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();
  const navRef = useRef();

  const handleLogout = async () => {
    try {
      await axios.get("/api/v1/user/patient/logout", {
        withCredentials: true,
      }).then(res => {
        toast.success(res.data.message); 
        setIsAuthenticated(false); 
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setShow(!show); 
  }

  const handleLogin = async () => {
    navigateTo("/login")
    setShow(!show); 
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShow(true);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    }
  }, [navRef]);

  return (
    <nav className='container' ref={navRef}>
      <div className='logo'>
        ZeeCare
      </div>
      <div className={show ? 'navLinks showmenu' : 'navLinks'}>
        <div className="links">
          <Link to={"/"} onClick={() => setShow(!show)}>HOME</Link>
          <Link to={"/appointment"} onClick={() => setShow(!show)}>APPOINTMENT</Link>
          <Link to={"/about"} onClick={() => setShow(!show)}>ABOUT US</Link>
        </div>
        {isAuthenticated ? (
          <button className='logoutBtn btn' onClick={handleLogout}>
            LOGOUT
          </button>
        ) : (
          <button className='logoutBtn btn' onClick={handleLogin}>
            LOGIN
          </button>
        )}
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
}

export default Navbar;
