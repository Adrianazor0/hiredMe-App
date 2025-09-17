import React from 'react';
import './styles/Services.css';
// Si usas React Icons, instalar y importar: npm install react-icons
import { FaLaptopCode, FaDatabase, FaEnvelope } from 'react-icons/fa'; 

const Services = () => {
  return (
    <div className="services-container">
      <header className="services-header">
        <h1>Mis Servicios</h1>
        <p>A continuación, una breve descripción de lo que puedo ofrecerte para tus próximos proyectos.</p>
      </header>

      <section className="services-list">
        
        {/* Tarjeta de Servicio 1 */}
        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <h2>Desarrollo Web con React</h2>
          <p>
            Creación de aplicaciones web modernas, dinámicas y escalables, optimizadas para una excelente experiencia de usuario, todo de la mas alta calidad.
          </p>
        </div>

        {/* Tarjeta de Servicio 2 */}
        <div className="service-card">
          <FaDatabase className="service-icon" />
          <h2>Análisis y Diseño de Bases de Datos</h2>
          <p>
            Diseño de esquemas de bases de datos relacionales (MySQL, SQL Server) para garantizar la integridad y eficiencia de la información, aplicando las mejores practicas que yo y la IA podamos encontrar.
          </p>
        </div>

      </section>

      {/* Sección de Llamada a la Acción */}
      <section className="services-cta">
        <FaEnvelope className="cta-icon" />
        <h2>¿Listo para empezar?</h2>
        <p>Contáctame para ver cómo puedo ayudarte a  
            <span style={{textDecoration: "line-through"}}> hacerle la inversa de Thanos a los avenger </span> 
            construir tus ideas. Estoy abierto a nuevas propuestas y colaboraciones.
        </p>
        <a href="/contact" className="contact-button">Contáctame</a>
      </section>

    </div>
  );
};

export default Services;