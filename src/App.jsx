import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Nosotros from './pages/Nosotros'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/"                element={<Home />} />
          <Route path="/proyectos"       element={<Projects />} />
          <Route path="/proyectos/:slug" element={<ProjectDetail />} />
          <Route path="/nosotros"        element={<Nosotros />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}