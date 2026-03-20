import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ regions, currentRegion, onRegionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight * 100}`;

      setScrollProgress(scroll);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>
      <div className="container nav-content">
        <div className="logo-section">
          <div className="logo">
            <span style={{ color: 'var(--primary)' }}>Fork</span>
            <span style={{ color: 'var(--accent)' }}>Lore</span>
            <span className="brand-dot" style={{ backgroundColor: 'var(--brand-color)' }}></span>
          </div>

          <div className="region-nav-chips">
            {regions.map((region) => (
              <button
                key={region.id}
                className={`nav-chip ${currentRegion.id === region.id ? 'active' : ''}`}
                onClick={() => onRegionChange(region)}
              >
                {region.name}
              </button>
            ))}
          </div>
        </div>

        <ul className="nav-links">
          <li><a href="#about">Experiences</a></li>
          <li><a href="#routes">Routes</a></li>
          <li><a href="#vendors">Commerce</a></li>
        </ul>

        <a href="#contact" className="btn-cta">Start exploring</a>
      </div>
    </nav>
  );
};

export default Navbar;
