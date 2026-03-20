import React from 'react';
import './About.css';

const About = ({ data }) => {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-text">
          <span className="section-subtitle">Our Heritage</span>
          <h2 className="section-title" style={{ textAlign: 'left' }}>{data.aboutTitle}</h2>
          <p>{data.aboutText}</p>
          <p>
            Our mission is twofold: to provide you with unique, dynamic food routes based on your tastes, 
            and to empower local vendors by building trust through quality standards and visibility.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <h3>50+</h3>
              <p>Authentic Routes</p>
            </div>
            <div className="stat-item">
              <h3>200+</h3>
              <p>Verified Vendors</p>
            </div>
          </div>
        </div>
        <div className="about-visual">
          <div className="visual-card glass">
            <h3>Supporting Local Talent</h3>
            <p>Every tour contributes directly to the sustainability of family-owned street food stalls.</p>
          </div>
          <div className="visual-accent"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
