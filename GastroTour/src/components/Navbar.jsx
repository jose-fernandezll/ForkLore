import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ regions, currentRegion, onRegionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div className="nav-top-bar">
          <div className="logo">
            <span style={{ color: 'var(--primary)' }}>Fork</span>
            <span style={{ color: 'var(--accent)' }}>Lore</span>
            <span className="brand-dot" style={{ backgroundColor: 'var(--brand-color)' }}></span>
          </div>

          <button 
            className={`mobile-menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
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

        <div className={`nav-actions ${isMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Experiences</a></li>
            <li><a href="#routes" onClick={() => setIsMenuOpen(false)}>Routes</a></li>
            <li><a href="#vendors" onClick={() => setIsMenuOpen(false)}>Commerce</a></li>
          </ul>

          <a href="#contact" className="btn-cta" onClick={() => setIsMenuOpen(false)}>Start exploring</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
