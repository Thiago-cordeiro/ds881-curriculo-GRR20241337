import { HeroSection } from './components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'
import './styles/app.scss'

function App() {
  return (
    <main className="portfolio-page">
      <HeroSection />
      <ProjectsSection />
    </main>
  )
}

export default App
