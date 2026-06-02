import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <span className="footer__logo">
            <span>GOOD</span><span className="footer__logo-accent">GODS</span>
          </span>
          <p className="footer__tagline">Diseño de personajes para animación,<br />videojuegos y editoriales.</p>
        </div>

        <nav className="footer__nav">
          <Link to="/proyectos">Portafolio</Link>
          <Link to="/nosotros">Acerca de nosotros</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </div>

      <div className="footer__bottom container">
        <p>© {new Date().getFullYear()} Good Gods. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
