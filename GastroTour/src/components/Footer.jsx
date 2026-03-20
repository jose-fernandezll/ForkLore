import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo">Gastro<span>Tour</span></div>
          <p>Connecting you to the true flavors of our heritage, one bite at a time.</p>
        </div>
        <div className="footer-links">
          <h4>Explore</h4>
          <a href="#about">About Us</a>
          <a href="#routes">Routes</a>
          <a href="#vendors">Vendors</a>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2024 GastroTour. All rights reserved. Created with ❤️ for our culture.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
