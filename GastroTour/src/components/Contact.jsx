import React, { useState } from 'react';
import Toast from './Toast';
import './Contact.css';

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      {showToast && (
        <Toast 
          message="Message sent! We'll contact you soon." 
          type="success" 
          onClose={() => setShowToast(false)} 
        />
      )}
      <div className="container contact-container glass">
        <div className="contact-info">
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Ready to Taste <br/>the Culture?</h2>
          <p>Have questions or want to customize your route? Reach out to us and we'll help you plan your perfect GastroTour.</p>
          <div className="contact-details">
            <div className="detail-item">
              <span>📍</span>
              <p>Av. Gastronomía 123, Ciudad de Sabor</p>
            </div>
            <div className="detail-item">
              <span>📧</span>
              <p>hola@gastrotour.com</p>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Tell us about your tastes..." rows="4" required></textarea>
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
