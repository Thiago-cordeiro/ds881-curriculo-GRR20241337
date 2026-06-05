import heroImg from '../assets/hero.png'
import './HeroSection.scss'

const skills = ['React', 'TypeScript', 'SCSS', 'UX/UI', 'Docker']

export function HeroSection() {
  return (
    <section className="hero-shell" id="top" aria-label="Apresentacao do portfolio">
      <header className="hero-nav">
        <a className="hero-brand" href="#top" aria-label="Inicio do portfolio">
          <span className="hero-brand__mark">T</span>
          <span>Thiago</span>
        </a>

        <nav className="hero-menu" aria-label="Navegacao principal">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#stack">Stack</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="hero-nav__cta" href="mailto:thiago@email.com">
          Vamos conversar
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <div className="hero-grid">
        <article className="hero-card hero-card--intro">
          <p className="hero-kicker">
            <span className="hero-kicker__flag" aria-hidden="true"></span>
            Portfolio Front-end - 2026
          </p>

          <h1>Desenvolvo interfaces fortes, claras e com boa experiencia.</h1>

          <div className="hero-actions">
            <a className="button button--primary" href="#projetos">
              Ver projetos
            </a>
            <span className="hero-signal" aria-hidden="true"></span>
            <p>Codigo limpo, componentes reutilizaveis e CSS bem cuidado.</p>
          </div>
        </article>

        <article className="hero-card hero-card--visual">
          <div className="hero-visual__badge" aria-hidden="true">
            ✦
          </div>
          <img src={heroImg} alt="Ilustracao abstrata em camadas do portfolio" />
          <h2>Interfaces modernas para produtos digitais</h2>
        </article>

        <article className="hero-card hero-card--contact">
          <div className="profile-mini" aria-hidden="true">
            TC
          </div>
          <div className="contact-meta">
            <span>Disponivel para projetos</span>
            <span>Curitiba, PR</span>
          </div>
          <h2>Vamos criar algo mais forte juntos.</h2>
        </article>

        <article className="hero-card hero-card--score">
          <div className="score-row">
            <strong>4.98</strong>
            <span aria-label="Avaliacao maxima">★★★★★</span>
          </div>
          <p>Baseado em entregas, aprendizado continuo e atencao aos detalhes.</p>

          <div className="skill-list" aria-label="Principais habilidades">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
