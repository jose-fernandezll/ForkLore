import React, { useState } from 'react';
import Toast from './Toast';
import './Contact.css';

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    try {
      // Use your Formspree endpoint here: https://formspree.io/f/your-id
      const response = await fetch('https://formspree.io/f/placeholder', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setShowToast(true);
        form.reset();
      } else {
        alert('Oops! There was a problem submitting your form');
      }
    } catch (error) {
      alert('Oops! There was a problem submitting your form');
    }
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
          <p>Have questions or want to customize your route? Reach out to us and we'll help you plan your perfect ForkLore experience.</p>
          <div className="contact-details">
            <div className="detail-item">
              <span>📍</span>
              <p>Av. Gastronomía 123, Ciudad de Sabor</p>
            </div>
            <div className="detail-item">
              <span>📧</span>
              <p>hola@forklore.com</p>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Tell us about your tastes..." rows="4" required></textarea>
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
