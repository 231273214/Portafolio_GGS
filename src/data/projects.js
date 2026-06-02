const baseUrl = import.meta.env.BASE_URL
export const projects = [
  {
    id: 1,
    slug: 'proyecto-1',
    name: 'Proyecto 1',
    category: 'Editorial',
    year: 2025,
    description:
      'Desarrollo integral de personaje principal: desde concepto hasta entregables listos para producción en animación 2D.',
    coverImage: `${baseUrl}projects/proyect-1/model-sheet/ModeloFrontal - copia.png`, // ruta para imagen
    sheets: [
      {
        type: 'model_sheet',
        label: 'Model Sheet',
        images: [
          `${baseUrl}projects/proyect-1/model-sheet/ModeloFrontal.png`,
          `${baseUrl}projects/proyect-1/model-sheet/ModeloPerfil.png`,
          `${baseUrl}projects/proyect-1/model-sheet/ModeloPosterior.png`,
        ],
      },
      {
        type: 'expression_sheet',
        label: 'Expression Sheet',
        images: [
          `${baseUrl}projects/proyect-1/Expresion-sheet/Expression1.png`,
          `${baseUrl}projects/proyect-1/Expresion-sheet/Expression2.png`,
          `${baseUrl}projects/proyect-1/Expresion-sheet/Expression3.png`,
          `${baseUrl}projects/proyect-1/Expresion-sheet/Expression4.png`,
          `${baseUrl}projects/proyect-1/Expresion-sheet/Expression5.png`,
          `${baseUrl}projects/proyect-1/Expresion-sheet/Expression6.png`,
        ],
      },
      {
        type: 'dynamic_poses',
        label: 'Poses Dinámicas y bocetos',
        images: [
          `${baseUrl}projects/proyect-1/Poses_Dinamicas/BocetoFrontal-1.png`,
          `${baseUrl}projects/proyect-1/Poses_Dinamicas/BocetoLateral-1.png`,
          `${baseUrl}projects/proyect-1/Poses_Dinamicas/BocetoPosterior-1.png`,
          `${baseUrl}projects/proyect-1/Poses_Dinamicas/Silueta1.png`,
          `${baseUrl}projects/proyect-1/Poses_Dinamicas/Silueta2.png`,
        ],
      },
     
    ],
  },
  
  {
    id: 2,
    slug: 'proyecto-2',
    name: 'Proyecto 2',
    client: 'Empresa XYZ',
    category: 'Videojuego',
    year: 2025,
    description:
      'Creación de 1 personaje para un videojuego de plataformas en 3D, sigilo y rompecabezas con una estética cartoon.',
    coverImage: `${baseUrl}projects/project-3/Model-sheet/ModelFrontal - copia.png`,
    sheets: [
      { type: 'model_sheet',      label: 'Model Sheet',      images: [
        `${baseUrl}projects/project-3/Model-sheet/ModelFrontal.png`,
        `${baseUrl}projects/project-3/Model-sheet/ModelLateral.png`,
        `${baseUrl}projects/project-3/Model-sheet/ModelPosterior.png`,
      ] },
      { type: 'expression_sheet', label: 'Expression Sheet', images: [
         `${baseUrl}projects/project-3/Expresion-sheet/Expression1.png`,
          `${baseUrl}projects/project-3/Expresion-sheet/Expression2.png`,
          `${baseUrl}projects/project-3/Expresion-sheet/Expression3.png`,
          `${baseUrl}projects/project-3/Expresion-sheet/Expression4.png`,
          `${baseUrl}projects/project-3/Expresion-sheet/Expression5.png`,
          `${baseUrl}projects/project-3/Expresion-sheet/Expression6.png`,
      ] },
      { type: 'dynamic_poses',    label: 'Poses Dinámicas y bocetos',  images: [
        `${baseUrl}projects/project-3/Poses-Dinamicas/PoseDinamica.png`,
        `${baseUrl}projects/project-3/Poses-Dinamicas/BocetoFrontal.png`,
        `${baseUrl}projects/project-3/Poses-Dinamicas/BocetoLateral.png`,
        `${baseUrl}projects/project-3/Poses-Dinamicas/BocetoPosterior.png`,
      ] },
      { type: 'model_3d',         label: 'Modelo 3D',        images: [], modelFile: `${baseUrl}projects/project-3/Pose_1_pj2.glb` },
    ],
  },
  {
    id: 3,
    slug: 'proyecto-3',
    name: 'Proyecto 3',
    client: 'Empresa de animación',
    category: 'Animación',
    year: 2026,
    description:
      'Este personaje se uso para un cortometraje animado de aventura y comedia donde este compañero usa su astucia y agilidad para infiltrarse en la megacorporación y rescatar a su colonia.',
    coverImage: null,
    sheets: [
      { type: 'model_sheet',      label: 'Model Sheet',      images: [] },
      { type: 'expression_sheet', label: 'Expression Sheet', images: [] },
      { type: 'dynamic_poses',    label: 'Poses Dinámicas',  images: [] },
      { type: 'model_3d',         label: 'Modelo 3D',        images: [], modelFile: `${baseUrl}projects/project-4/Pose_1.glb` },
    ],
  },
]
