import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import './ProjectDetail.css'

function ImagePlaceholder({ label = '' }) {
  return (
    <div className="detail-img-ph" aria-label={label}>
      <svg viewBox="0 0 4 3" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="4" y2="3" strokeWidth="0.04" />
        <line x1="4" y1="0" x2="0" y2="3" strokeWidth="0.04" />
      </svg>
    </div>
  )
}

function SheetGallery({ sheet }) {
  if (sheet.type === 'model_3d') {
    return (
      <div className="model3d-viewer">
        <model-viewer
          src={sheet.modelFile}
          alt="Modelo 3D"
          auto-rotate
          camera-controls
          shadow-intensity="1"
        />
      </div>
    )
  }

  if (!sheet.images || sheet.images.length === 0) {
    return (
      <div className="sheet-gallery sheet-gallery--empty">
        {[1, 2, 3].map(n => (
          <ImagePlaceholder key={n} label={`${sheet.label} ${n}`} />
        ))}
      </div>
    )
  }

  return (
    <div className="sheet-gallery">
      {sheet.images.map((src, i) => (
        <img key={i} src={src} alt={`${sheet.label} ${i + 1}`} loading="lazy" />
      ))}
    </div>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  const [activeTab, setActiveTab] = useState(0)

  if (!project) return <Navigate to="/proyectos" replace />

  const activeSheet = project.sheets[activeTab]

  return (
    <div className="detail section-pad">
      <div className="container">

        {/* ── Breadcrumb ─────────────────────────────── */}
        <nav className="detail__breadcrumb">
          <Link to="/proyectos">Proyectos</Link>
          <span>/</span>
          <span>{project.name}</span>
        </nav>

        {/* ── Header ─────────────────────────────────── */}
        <header className="detail__header">
          <div className="detail__meta">
            <span className="detail__tag">{project.category}</span>
            <span className="detail__year">{project.year}</span>
          </div>
          <h1 className="detail__title">{project.name}</h1>
          {project.client && (
            <p className="detail__client">Cliente: <strong>{project.client}</strong></p>
          )}
          <p className="detail__desc">{project.description}</p>
        </header>

        {/* ── Tabs ───────────────────────────────────── */}
        <div className="detail__tabs" role="tablist">
          {project.sheets.map((sheet, i) => (
            <button
              key={sheet.type}
              role="tab"
              aria-selected={i === activeTab}
              className={`tab-btn${i === activeTab ? ' tab-btn--active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {sheet.label}
            </button>
          ))}
        </div>

        {/* ── Tab content ────────────────────────────── */}
        <div className="detail__content" role="tabpanel">
          <div className="detail__content-header">
            <h2 className="detail__sheet-title">{activeSheet.label}</h2>
            <p className="detail__sheet-desc">{getSheetDescription(activeSheet.type)}</p>
          </div>
          <SheetGallery sheet={activeSheet} />
        </div>

      </div>
    </div>
  )
}

function getSheetDescription(type) {
  const map = {
    model_sheet:      'Vistas ortogonales del personaje con proporciones, detalles constructivos y guía de color.',
    expression_sheet: 'Rango emocional del personaje: expresiones faciales que definen su personalidad.',
    dynamic_poses:    'Poses de acción y actitud que comunican el carácter y movimiento del personaje.',
    model_3d:         'Modelo tridimensional con geometría limpia, listo para animación o render de producción.',
  }
  return map[type] ?? ''
}
