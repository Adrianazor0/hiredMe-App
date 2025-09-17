import React from 'react';
import "./styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>¡Bienvenido a mi aplicación!</h1>
        <p>El punto de partida para explorar las maravillas del routing en React.</p>
      </header>

      <section className="home-intro">
        <h2>Un ejemplo sencilo pero funcional para que no se pierda nadie</h2>
        <p>
          Esta aplicación fue diseñada para mostrar de manera clara y sencilla
          cómo funciona la navegación entre diferentes vistas usando React Router.
          Naveguemos a través de los enlaces en la parte superior para ver cómo cambia el contenido
          sin recargar la página. en esta mi single web aplication o SPA para los panas
        </p>
      </section>

      <section className="home-cta">
        <h2>¿Qué esperas? empieza a clickar!</h2>
        <p>
          Visita mi página de Servicios para ver lo que te puedo ofrecer o
          contácme si tienes alguna pregunta (o te interesan mis servicios...).
        </p>
        <div className="cta-buttons">
          {/* Puedes usar Link o NavLink aquí para una navegación real */}
          <a href="/services" className="button primary">Ver Servicios</a>
          <a href="/contact" className="button secondary">Contáctanos</a>
        </div>
      </section>
    </div>
  );
};

export default Home;