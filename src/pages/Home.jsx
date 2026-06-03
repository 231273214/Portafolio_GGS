import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
const baseUrl = import.meta.env.BASE_URL
import './Home.css'

/* ── Imagen placeholder mientras no hay assets reales ─── */
function ImagePlaceholder({ className = '', label = '' }) {
  return (
    <div className={`img-placeholder ${className}`} aria-label={label}>
      <svg viewBox="0 0 4 3" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="4" y2="3" strokeWidth="0.04" />
        <line x1="4" y1="0" x2="0" y2="3" strokeWidth="0.04" />
      </svg>
    </div>
  )
}

export default function Home() {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <div className="home">

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="hero section-pad">
        <div className="hero__bg-glow" />
        <div className="container hero__inner">
          <div className="hero__text">
            <p className="hero__eyebrow">Diseño de personajes</p>
            <h1 className="hero__title">
              Damos vida<br />a tus ideas
            </h1>
            <p className="hero__desc">
              Desarrollamos personajes para animación, videojuegos y editoriales.
              Desde concept art hasta entregables listos para producción.
            </p>
            <div className="hero__actions">
              <Link to="/proyectos" className="btn btn--primary">Ver proyectos</Link>
            </div>
          </div>

          {/* Galería escalonada */}
          <div className="hero__gallery">
            <img 
                src={`${baseUrl}projects/proyect-1/model-sheet/ModeloFrontal - copia.png`} 
                alt="Imagen secundaria izquierda" 
                className="hero__img hero__img--left" 
              />
              <img 
                src={`${baseUrl}projects/project-3/Poses-Dinamicas/PoseDinamica.png`} 
                alt="Imagen principal" 
                className="hero__img hero__img--main" 
              />
              
              <img 
                src={`${baseUrl}projects/project-4/Pose_Dinamica/Posedinamica.png`} 
                alt="Imagen secundaria derecha" 
                className="hero__img hero__img--right" 
              />
            </div>
        </div>
      </section>

      {/* ── PROYECTOS PREVIEW ─────────────────────────── */}
      <section className="projects-preview section-pad">
        <div className="container">
          <h2 className="section-title">Proyectos</h2>
          <p className="section-desc">
            Los siguientes proyectos son un resumen de lo que se trabajó
            con diferentes empresas y los entregables para ellos.
          </p>

          <div className="projects-grid">
            {projects.map(p => (
              <Link key={p.id} to={`/proyectos/${p.slug}`} className="project-card">
                <div className="project-card__img">
                  {p.coverImage
                    ? <img src={p.coverImage} alt={p.name} />
                    : <ImagePlaceholder label={p.name} />}
                </div>
                <div className="project-card__info">
                  <span className="project-card__tag">{p.category}</span>
                  <h3 className="project-card__name">{p.name}</h3>
                  <span className="project-card__year">{p.year}</span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ display: "flex", gap: "1rem", alignItems: "center", justifyContent: "center" }}>
            <div className="projects-preview__cta">
              <Link to="/proyectos" className="btn btn--ghost">Ver todos los proyectos</Link>
            </div>
            <div className="projects-preview__cta">
             <a 
                  href={`${import.meta.env.BASE_URL}projects/Manual-de-uso.pdf`} 
                  className="btn btn--ghost" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Abrir manual de uso
                </a>
            </div>
          </div>
          </div>
      </section>

      {/* ── SERVICIOS ─────────────────────────────────── */}
      <section className="services section-pad">
        <div className="container">
          <h2 className="section-title">Lo que entregamos</h2>
          <div className="services__grid">
            {[
              { label: 'Model Sheet',      desc: 'Vistas ortogonales, proporciones y detalles de construcción.' },
              { label: 'Expression Sheet', desc: 'Rango emocional completo: de neutro a extremos expresivos.' },
              { label: 'Poses Dinámicas',  desc: 'Poses de acción que comunican personalidad y movimiento.' },
              { label: 'Modelo 3D',        desc: 'Modelo rigeado listo para animación o render de producción.' },
            ].map(s => (
              <div key={s.label} className="service-card">
                <span className="service-card__icon">{s.icon}</span>
                <h3 className="service-card__title">{s.label}</h3>
                <p className="service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REDES Y CONTACTO ──────────────────────────── */}
<section  id="contact" className="contact-section section-pad">
  <div className="contact-section__glow" />
  <div className="container contact-section__inner">

    {/* Left: info y links */}
    <div className="contact-cta">
      <p className="contact-cta__eyebrow">¿Tienes un proyecto?</p>
      <h2 className="contact-cta__title">Hablemos</h2>
      <p className="contact-cta__sub">
        Cuéntanos tu idea y la hacemos realidad. Desde concepto
        hasta entregables listos para producción.
      </p>
      <div className="contact-cta__links">
        <a href="mailto:GoodGods.studio@gmail.com" className="contact-link">
          <span className="contact-link__label">Correo</span>
          <span className="contact-link__value">GoodGods.studio@gmail.com</span>
        </a>
        <a href="https://instagram.com/GoodGods.studio" target="_blank" rel="noopener noreferrer" className="contact-link">
          <span className="contact-link__label">Instagram</span>
          <span className="contact-link__value">@GoodGods.studio</span>
        </a>
        <a href="https://tiktok.com/@GoodGods.studio" target="_blank" rel="noopener noreferrer" className="contact-link">
          <span className="contact-link__label">TikTok</span>
          <span className="contact-link__value">@GoodGods.studio</span>
        </a>
      </div>
    </div>

    {/* Right: form rápido */}
    <div className="contact-form">
      <p className="contact-form__label">Redes y contacto</p>
      <div className="contact-form__row">
        <input
          type="email"
          placeholder="Ingresa tu correo"
          className="contact-form__input"
          aria-label="Tu correo electrónico"
        />
        <a href="mailto:GoodGods.studio@gmail.com" className="btn btn--primary">
          Contactar
        </a>
      </div>
      <p className="contact-form__hint">
        O escríbenos directamente a nuestras redes sociales.
      </p>
    </div>

  </div>
</section>

    </div>
  )
}
