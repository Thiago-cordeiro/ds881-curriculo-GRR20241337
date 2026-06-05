import { HeroSection } from './components/HeroSection'
import { CompaniesSection } from './components/CompaniesSection'
import { HorizontalTextSection } from './components/HorizontalTextSection'
import { ProjectsSection } from './components/ProjectsSection'
import './styles/app.scss'

function App() {
  return (
    <main className="portfolio-page">
      <HeroSection />
      <HorizontalTextSection />
      <CompaniesSection />
      <ProjectsSection />
    </main>
  )
}

export default App
