import React from 'react';
import './Routes.css';

const Routes = ({ data }) => {
  return (
    <section id="routes" className="routes">
      <div className="container">
        <span className="section-subtitle">Choose Your Path</span>
        <h2 className="section-title">Dynamic Routes in {data.name}</h2>
        <div className="routes-grid">
          {data.routes.map(route => (
            <div key={route.id} className="route-card glass">
              <div className="route-icon">{route.icon}</div>
              <h3>{route.title}</h3>
              <p>{route.desc}</p>
              <button className="btn-text">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Routes;
