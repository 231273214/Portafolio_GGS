import Navbar from './Navbar'
import Footer from './Footer'
import './Layout.css'
import { useNavigate, useLocation } from 'react-router-dom'
import ScrollToTop from "./ScrollToTop";

export default function Layout({ children }) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleHablemos = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }

  return (
    <div className="layout">
      <ScrollToTop />   
      <Navbar onHablemosClick={handleHablemos} />
      <main className="layout__main">
        {children}
      </main>
      <Footer onHablemosClick={handleHablemos} />
    </div>
  )
}