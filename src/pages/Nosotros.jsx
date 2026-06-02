import './Nosotros.css'

const team = [
  {
    name: 'Axel Prieto',
    role: 'Ilustrador & Animador',
    bio: 'Axel transforma ideas en personajes llenos de expresión y movimiento. Su enfoque en ilustración y animación permite desarrollar diseños con personalidad, emoción y lenguaje visual propio.',
    photo: null, 
  },
  {
    name: 'Isabella Silva',
    role: 'Diseñadora UX/UI',
    bio: 'Isabella se encarga de convertir la experiencia visual en algo intuitivo y atractivo. Su trabajo conecta la identidad creativa de Good Gods con interfaces modernas, claras y funcionales.',
    photo: null,
  },
  {
    name: 'Sergio Rangel',
    role: 'Artista 3D & Programador',
    bio: 'Sergio lleva los personajes más allá del concepto visual, integrando modelado 3D, desarrollo interactivo y tecnología para construir experiencias inmersivas y universos con vida propia.',
    photo: null,
  },
]

function TeamMember({ member }) {
  return (
    <article className="team-member">
      <div className="team-member__photo">
        {member.photo
          ? <img src={member.photo} alt={member.name} />
          : <div className="team-member__photo-ph">
              <svg viewBox="0 0 4 4" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="0" x2="4" y2="4" strokeWidth="0.06" />
                <line x1="4" y1="0" x2="0" y2="4" strokeWidth="0.06" />
              </svg>
            </div>
        }
      </div>
      <div className="team-member__info">
        <h3 className="team-member__name">{member.name}</h3>
        <p className="team-member__role"><span>Cargo:</span> {member.role}</p>
        <p className="team-member__bio">{member.bio}</p>
      </div>
    </article>
  )
}

export default function Nosotros() {
  return (
    <div className="nosotros">

      {/* HERO */}
      <section className="nosotros-hero section-pad">
        <div className="nosotros-hero__glow" />
        <div className="container">
          <p className="nosotros-eyebrow">El equipo</p>
          <h1 className="nosotros-title">
            Creamos personajes con<br />
            <span className="nosotros-title__accent">identidad y propósito</span>
          </h1>
          <p className="nosotros-lead">
            Somos un equipo creativo enfocado en el desarrollo de personajes con coherencia
            visual, personalidad y narrativa. Combinamos ilustración, diseño, animación y 3D
            para construir personajes memorables.
          </p>
        </div>
      </section>

      {/* FILOSOFÍA */}
      <section className="filosofia section-pad">
        <div className="container">
          <h2 className="filosofia__title">Filosofía de equipo</h2>
          <p className="filosofia__desc">
            Cada personaje que creamos tiene una razón de existir. Desde la silueta hasta
            las expresiones, los accesorios y el lenguaje visual, cada detalle está pensado
            para transmitir identidad, emoción y presencia.
          </p>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="equipo section-pad">
        <div className="container">
          <h2 className="equipo__title">Equipo creativo</h2>
          <div className="equipo__list">
            {team.map(m => <TeamMember key={m.name} member={m} />)}
          </div>
        </div>
      </section>

    </div>
  )
}