// Importa la imagen, si la tienes en tu carpeta de assets
import "./styles/About.css";
import hireMeImage from '../assets/hire-me-pressed-means-job-candidate-or-contractor.jpg';

const About = () => {
    return (
        <div className="about-container">
            <header className="about-header">
                <h1>Acerca de mí</h1>
                <p>Soy una persona apasionada por la tecnología en busca de la oportunidad de ganarse un par de pesos en el área de programación.</p>
            </header>

            <section className="about-content">
                <div className="about-image-wrapper">
                    <img src={hireMeImage} alt="Un personaje 3D presionando un botón que dice 'Hire Me'" className="about-image" />
                </div>
                <p className="about-description">
                    Mi viaje en la programación comenzó con la curiosidad y se ha convertido en una búsqueda constante (ma o meno) de conocimiento y oportunidades. Cada línea de código que escribo es un paso más en mi camino ninja para convertir ideas en realidad. Busco un entorno donde pueda crecer, aprender de profesionales experimentados y, sobre todo, aportar valor. Siempre activo nunca inactivo!
                </p>
            </section>
        </div>
    );
};

export default About;