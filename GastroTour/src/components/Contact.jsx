import React, { useState } from 'react';
import Toast from './Toast';
import './Contact.css';

const Contact = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    try {
      // He actualizado el endpoint para que sea funcional o al menos no de 404 si es posible
      const response = await fetch('https://formspree.io/f/xoqgjojy', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setToast({ show: true, message: '¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.', type: 'success' });
        form.reset();
      } else {
        setToast({ show: true, message: 'Problema al enviar. Por favor verifica tu conexión.', type: 'info' });
      }
    } catch (error) {
      setToast({ show: true, message: 'Error de red. Inténtalo más tarde.', type: 'info' });
    }
  };

  return (
    <section id="contact" className="contact">
      {toast.show && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast({ ...toast, show: false })} 
        />
      )}
      <div className="container contact-container glass">
        <div className="contact-info">
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>¿Listo para probar <br/>la cultura?</h2>
          <p>¿Tienes preguntas o quieres personalizar tu ruta? Contáctanos y te ayudaremos a planear tu experiencia ForkLore perfecta.</p>
          <div className="contact-details">
            <div className="detail-item">
              <span>📍</span>
              <p>Av. Gastronomía 123, Ciudad de Sabor</p>
            </div>
            <div className="detail-item">
              <span>📧</span>
              <p>josefernandez012571@gmail.com</p>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Tu nombre" required />
          </div>
          <div className="form-group">
            <input type="email" name="_replyto" placeholder="Tu email" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Cuéntanos sobre tus gustos..." rows="4" required></textarea>
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
