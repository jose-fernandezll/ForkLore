import React from 'react';
import './Hero.css';

const Hero = ({ data }) => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <img src={data.heroImage} alt={`Vibrant ${data.name} culinary scene`} className="hero-bg" />
      <div className="container hero-content">
        <h1 className="animate-fade">{data.heroTitle}</h1>
        <p className="animate-fade">{data.heroSubtitle}</p>
        <div className="hero-btns animate-fade">
          <button className="btn-primary">Explore Routes</button>
          <button className="btn-secondary">Restaurants & Commerce</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
