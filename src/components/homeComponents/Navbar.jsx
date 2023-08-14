import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import bangladeshFlag from '../../assets/ban.png';
import usaFlag from '../../assets/usa.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className='logo' />
      </div>
      <ul className="navbar-items">
        <li>Home</li>
        <li>Courses</li>
        <li>Blog</li>
        <li>Webinar</li>
        <li>Resources</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li className="language-dropdown">
          <select>
            <option value="bangla">
              <img className="flag-icon" src={bangladeshFlag} alt="Bangladesh Flag" />
              Bangla
            </option>
            <option value="english">
              <img className="flag-icon" src={usaFlag} alt="USA Flag" />
              English
            </option>
          </select>
        </li>
        <li className='navbtn'>Login</li>
        <li className='navbtn'>Register</li>
      </ul>
    </nav>
  );
};

export default Navbar;
