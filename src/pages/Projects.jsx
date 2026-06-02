import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './Projects.css'

function ImagePlaceholder({ label = '' }) {
  return (
    <div className="img-ph" aria-label={label}>
      <svg viewBox="0 0 4 3" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="4" y2="3" strokeWidth="0.04" />
        <line x1="4" y1="0" x2="0" y2="3" strokeWidth="0.04" />
      </svg>
    </div>
  )
}

export default function Projects() {
  return (
    <div className="projects-page section-pad">
      <div className="container">
        <header className="projects-header">
          <p className="projects-eyebrow">Portafolio</p>
          <h1 className="projects-title">Proyectos</h1>
          <p className="projects-sub">
            Los siguientes proyectos son un resumen de lo que se trabajó con
            diferentes empresas y los entregables para ellos.
          </p>
        </header>

        <div className="projects-list">
          {projects.map((p, i) => (
            <Link
              key={p.id}
              to={`/proyectos/${p.slug}`}
              className="project-row"
            >
              <span className="project-row__num">0{i + 1}</span>

              <div className="project-row__cover">
                {p.coverImage
                  ? <img src={p.coverImage} alt={p.name} />
                  : <ImagePlaceholder label={p.name} />}
              </div>

              <div className="project-row__info">
                <span className="project-row__tag">{p.category}</span>
                <h2 className="project-row__name">{p.name}</h2>
                <p className="project-row__desc">{p.description}</p>
                <div className="project-row__chips">
                  {p.sheets.map(s => (
                    <span key={s.type} className="chip">{s.label}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
