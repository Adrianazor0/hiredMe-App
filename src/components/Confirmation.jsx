import React from 'react';
import { useParams } from 'react-router-dom';
import '../components/styles/Confirmation.css'; 

import meme from '../assets/what-it-is-about.jpg'; 

const Confirmation = () => {
  const { name } = useParams(); 

  return (
    <div className="confirmation-container">
      <h1>¡Gracias por contactarme, {name}!</h1>
      <p className="confirmation-message">
        Tu mensaje ha sido enviado correctamente.
        <br />
        Pronto me pondré en contacto contigo y recuerda...
      </p>
      <div className="meme-wrapper">
        <img src={meme} alt="Meme de mumen rider apunto de recibir tremenda paliza del rey del mar (OnePunch Man) y la confirmación" className="meme-image" />
      </div>
    </div>
  );
};

export default Confirmation;