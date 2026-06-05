import { HeroSection } from './components/HeroSection'
import { HorizontalTextSection } from './components/HorizontalTextSection'
import { ProjectsSection } from './components/ProjectsSection'
import './styles/app.scss'

function App() {
  return (
    <main className="portfolio-page">
      <HeroSection />
      <HorizontalTextSection />
      <ProjectsSection />
    </main>
  )
}

export default App
