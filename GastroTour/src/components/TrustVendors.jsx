import React from 'react';
import './TrustVendors.css';
import vendorImage from '../assets/images/vendor.png';

const TrustVendors = ({ data }) => {
  return (
    <section id="vendors" className="vendors">
      <div className="container vendors-grid">
        <div className="vendors-image">
          <img src={vendorImage} alt="Friendly local culinary partner" />
          <div className="trust-badge">
            <span>Verified Partner</span>
          </div>
        </div>
        <div className="vendors-content">
          <span className="section-subtitle">A Network of Excellence</span>
          <h2 className="section-title" style={{ textAlign: 'left' }}>Empowering the Soul <br/>of Regional Commerce</h2>
          <p>
            We curate the best culinary and commercial experiences across the country. From rigorous hygiene standards 
            in rural food stalls to the exquisite service of top-tier city restaurants and local boutiques, 
            we ensure every stop in your tour is of the highest quality in {data?.name || 'every city'}.
          </p>
          <ul className="benefits-list">
            <li>✓ High-End Culinary Standards</li>
            <li>✓ Verified Boutique Commerce</li>
            <li>✓ Ethical Support for Local Artisans</li>
            <li>✓ Authentic Cultural Experiences</li>
          </ul>
          <button className="btn-primary">Become a Partner</button>
        </div>
      </div>
    </section>
  );
};

export default TrustVendors;
