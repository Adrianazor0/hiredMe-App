import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/styles/Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/confirmation/${formData.name}`);
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contáctame</h1>
        <p>¿Tienes alguna pregunta, propuesta o simplemente quieres saludar? ¡No dudes en escribirme!</p>
      </header>

      <div className="contact-content">
        
        {/* Sección de Formulario */}
        <div className="contact-form-card">
          <h2>Envía un mensaje</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="submit-button">Enviar Mensaje</button>
          </form>
        </div>

        {/* Sección de Información de Contacto */}
        <div className="contact-info-card">
          <h2>Información de contacto</h2>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <p>adrianzor0@hotmail.com</p>
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <p>+123 456 7890 (Simulado)</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <p>Ciudad, País (Simulado)</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;