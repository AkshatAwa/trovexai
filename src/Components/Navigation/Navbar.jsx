import React, { useState } from 'react';
import './navigation.css';
import navlogo from './Logomark.png';
import downarrow from './Down.svg';
import text from './Trovex.ai.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const VisitGithub = () => {
    window.open("https://github.com/AkshatAwa", "_blank");
  };

  const handleDropdownSelect = (sectionId) => {
    window.scrollTo({
      top: document.getElementById(sectionId).offsetTop,
      behavior: 'smooth'
    });
    setShowDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="logobox">
        <img src={navlogo} alt="logo" className="logo"/>
        <img src={text} alt="logo" className="logotext"/>
      </div>
      <div className="desktopMenu">
      <div className="dropdown">
          <div 
            className="dropdownBox" 
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Product <span className="arrowDown"><img src={downarrow}/></span>
          </div>
          {showDropdown && (
            <div className="dropdownMenu">
              <a className="dropdownItem" onClick={() => handleDropdownSelect('intro')}>AI Sales Coach</a>
              <a className="dropdownItem" onClick={() => handleDropdownSelect('service')}>Customer Support </a>
              <a className="dropdownItem" onClick={() => handleDropdownSelect('projects')}>Chat Bot</a>
              <a className="dropdownItem" onClick={() => handleDropdownSelect('projects')}>Post Call Analysis</a>
            </div>
          )}
        </div>
        <div className="menuItems">
          <Link className="items" activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}>Pricing</Link>
          <Link className="items" activeClass='active' to='service' spy={true} smooth={true} offset={-50} duration={500}>About Us</Link>
          <Link className="items" activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500}>Resources</Link>
        </div>
      </div>
      <div className="btnsctn">
      <button className="contactBtn text-white">
        <i className="ri-chat-4-line text-none" id='vg'></i>Book a Demo
      </button>
      <button className="login text-black">
        <i className="ri-chat-4-line text-none" id='vg2'></i>Login
      </button>
      </div>
      <img src={text} alt="menu" className="menulogo" onClick={() => setShowMenu(!showMenu)} />
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link className="listitems" activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setShowMenu(false)}>About</Link>
        <Link className="listitems" activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}>Skills</Link>
        <Link className="listitems" activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}>Projects</Link>
        <Link className="listitems" activeClass='active' to='service' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}>Services</Link>
        <Link className="listitems" activeClass='active' to='contact' spy={true} smooth={true} offset={50} duration={500} onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
