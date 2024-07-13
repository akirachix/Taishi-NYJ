
import './index.css'
import React, { useState, useEffect } from 'react';
import { Squash as HamburgerIcon } from 'hamburger-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../LandingImages/logo.png'
import { IoMdClose } from "react-icons/io";
import { BrowserRouter, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseClick = () => {
    setIsOpen(false);
  };
  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.links') === null && event.target.closest('.hamburger') === null) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('click', handleClickOutside, { capture: true });
      
    } else {
      document.removeEventListener('click', handleClickOutside, { capture: true });
    }
    return () => {
      document.removeEventListener('click', handleClickOutside, { capture: true });
    };
  }, [isOpen]);
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logopicture"/>
      <div className="navBar">
      <Link to="/" className='text-link' activeClassName="active-link">
        <div className='link'>Home</div>
      </Link>
      <Link to="/Videos" className='text-link' activeClassName="active-link">
        <div className='link'>Videos</div>
      </Link>
      <Link to="/Podcasts" className='text-link' activeClassName="active-link">
        <div className='link'>Podcasts</div>
      </Link>
      <Link to="/Blogs" className='text-link' activeClassName="active-link">
        <div className='link'>Blogs</div>
      </Link>
      <Link to="/AboutUs" className='text-link' activeClassName="active-link">
        <div className='link'>About Us</div>
      </Link>
      </div>
      <div className='hamburger'>
        <HamburgerIcon toggled={isOpen} size={40} toggle={handleHamburgerClick} />
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="links"
          >
            <div className="back-button" onClick={handleCloseClick}>
              <IoMdClose size={40} />
            </div>

            <div className='hamburger-links'>
            <Link to="/" className='text-link'>
        <div className='link'>Home</div>
        </Link>
      <Link to="/Videos" className='text-link'>
        <div className='link'>Videos</div>
      </Link>
      <Link to="/Podcasts" className='text-link'>
        <div className='link'>Podcasts</div>
      </Link>
      <Link to="/Blogs" className='text-link'>
        <div className='link'>Blogs</div>
      </Link>
      <Link to="/AboutUs" className='text-link'>
        <div className='link'>About Us</div>
      </Link>
            </div>
            
      </motion.div>
        )}
      </div>
    </div>
  );
};
export default Navbar;