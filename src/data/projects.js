export const projects = [
  {
    id: 1,
    slug: 'proyecto-1',
    name: 'Proyecto 1',
    category: 'Editorial',
    year: 2025,
    description:
      'Desarrollo integral de personaje principal: desde concepto hasta entregables listos para producción en animación 2D.',
    coverImage: null, // ruta para imagen
    sheets: [
      {
        type: 'model_sheet',
        label: 'Model Sheet',
        images: [
          '/proyecto-1/model-sheet/ModeloFrontal.png',
          '/proyecto-1/model-sheet/ModeloPerfil.png',
          '/proyecto-1/model-sheet/ModeloPosterior.png',
        ],
      },
      {
        type: 'expression_sheet',
        label: 'Expression Sheet',
        images: [],
      },
      {
        type: 'dynamic_poses',
        label: 'Poses Dinámicas',
        images: [],
      },
     
    ],
  },
  {
    id: 2,
    slug: 'proyecto-2',
    name: 'Proyecto 2',
    client: 'Empresa Cliente B',
    category: 'Videojuegos',
    year: 2024,
    description:
      'Diseño de personaje secundario para videojuego indie, con énfasis en legibilidad de silueta y poses de acción.',
    coverImage: null,
    sheets: [
      { type: 'model_sheet',      label: 'Model Sheet',      images: [] },
      { type: 'expression_sheet', label: 'Expression Sheet', images: [] },
      { type: 'dynamic_poses',    label: 'Poses Dinámicas',  images: [] },
    ],
  },
  {
    id: 3,
    slug: 'proyecto-3',
    name: 'Proyecto 3',
    client: 'Editorial XYZ',
    category: 'Editorial',
    year: 2025,
    description:
      'Creación de cast de 5 personajes para novela gráfica, con guía de estilo y paletas de color por personaje.',
    coverImage: null,
    sheets: [
      { type: 'model_sheet',      label: 'Model Sheet',      images: [] },
      { type: 'expression_sheet', label: 'Expression Sheet', images: [] },
      { type: 'dynamic_poses',    label: 'Poses Dinámicas',  images: [] },
      { type: 'model_3d',         label: 'Modelo 3D',        images: [], modelFile: 'proyecto-3/Pose_1_pj2.glb' },
    ],
  },
  {
    id: 4,
    slug: 'proyecto-4',
    name: 'Proyecto 4',
    client: 'Empresa Cliente D',
    category: 'Animación',
    year: 2025,
    description:
      'Personaje protagonista con modelo 3D rigeado para animación, incluyendo blendshapes faciales.',
    coverImage: null,
    sheets: [
      { type: 'model_sheet',      label: 'Model Sheet',      images: [] },
      { type: 'expression_sheet', label: 'Expression Sheet', images: [] },
      { type: 'dynamic_poses',    label: 'Poses Dinámicas',  images: [] },
      { type: 'model_3d',         label: 'Modelo 3D',        images: [], modelFile: '/proyect-4/Pose_1.glb' },
    ],
  },
]
