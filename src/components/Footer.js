import React from 'react';
import './Footer.css';  

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Big Dawgz Gym</p>
                <div className="footer-links">
                    <a href="/about" className="footer-link">About Us</a>
                    <a href="/services" className="footer-link">Services</a>
                    <a href="/contact" className="footer-link">Contact</a>
                    <a href="/waiver" className="footer-link">Waiver</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;