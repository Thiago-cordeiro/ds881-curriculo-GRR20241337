import { HeroSection } from './components/HeroSection'
import { BentoGallerySection } from './components/BentoGallerySection'
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
      <BentoGallerySection />
      <ProjectsSection />
      <HorizontalTextSection />
    </main>
  )
}

export default App
