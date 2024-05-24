import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import logo from '../../Images/Logo.png'
// import logo from "../../Images/ak-logo.png";

// import { GiHamburgerMenu } from "react-icons/gi";
// import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  // const [show, SetShow] = useState(false);
  const [navbar, SetNavbar] = useState(false)

  const bgColor = () => {
    if (window.scrollY >= 80) {
      SetNavbar(true)
    } else {
      SetNavbar(false)
    }
  }
  window.addEventListener('scroll', bgColor)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={navbar ? 'header bg-color' : 'header'}>
      {/* <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="menu">
            <div
              className={show ? "mobile-menu-items" : "menu-items"}
              onClick={() => SetShow(false)}
            >
              <NavLink to="/" className="menu-link">
                Home
              </NavLink>
              <NavLink to="/about" className="menu-link">
                About us
              </NavLink>
              <NavLink to="/careers" className="menu-link">
                Careers
              </NavLink>
              <NavLink to="/contact" className="menu-link">
                Contact
              </NavLink>
            </div>
          </div>
          <div className="hamburger" onClick={() => SetShow(!show)}>
            {show ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div> */}

      {/* ==== Navbar Animated */}
      <div className='Navbar container'>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div
          className={`nav-items ${isOpen && 'open'}`}
          onClick={() => setIsOpen(false)}>
          <NavLink to='/'>About Us</NavLink>
          <NavLink to='/services'>Services</NavLink>
          <NavLink to='/careers'>Careers</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
        <div
          className={`nav-toggle ${isOpen && 'open'}`}
          onClick={() => setIsOpen(!isOpen)}>
          <div className='bar'></div>
        </div>
      </div>
    </div>
  )
}

export default Header
