import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ onHablemosClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const baseUrl = import.meta.env.BASE_URL

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e) => {
    setMenuOpen(false)
    onHablemosClick(e)   
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container">

        {/* Left links */}
        <ul className="navbar__links navbar__links--left">
          <li><NavLink to="/proyectos" className={({ isActive }) => isActive ? 'active' : ''}>Portafolio</NavLink></li>
          <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        </ul>

        {/* Center logo */}
        <Link to="/" className="navbar__logo" aria-label="Good Gods — inicio">
          <img src={`${baseUrl}GOOD-GODS--BLANCO.png`} alt="Good Gods" className="navbar__logo-img"/>
        </Link>

        {/* Right links */}
        <ul className="navbar__links navbar__links--right">
          <li><NavLink to="/nosotros" className={({ isActive }) => isActive ? 'active' : ''}>Acerca de nosotros</NavLink></li>
          <li>
            <a href="#contact" className="navbar__cta" onClick={handleClick}>Hablemos</a>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          className={`navbar__burger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}>
        <NavLink to="/proyectos" onClick={() => setMenuOpen(false)}>Portafolio</NavLink>
        <NavLink to="/" end      onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/nosotros"  onClick={() => setMenuOpen(false)}>Acerca de nosotros</NavLink>
        <a href="#contact" className="navbar__cta" onClick={handleClick}>Hablemos</a>
      </div>
    </header>
  )
}