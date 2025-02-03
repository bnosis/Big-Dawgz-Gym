import React, { useState } from 'react';
import './Header.css'; 


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <a href="/" className="logo-link">
        <img src="/logo.png" alt="Big Dawgz Logo" className="logo" />
        <h1 className="title">Big Dawgz</h1>
      </a>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={isMenuOpen ? "open" : ""}>
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact Us</a>      
        <a href="/waiver">Waiver</a>
      </nav>
    </header>
  );
};

export default Header;