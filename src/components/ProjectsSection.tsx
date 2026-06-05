import './ProjectsSection.scss'

const projects = [
  {
    title: 'Dashboard de vendas',
    type: 'React + TypeScript',
    summary: 'Painel responsivo com cards de metricas, filtros e visualizacao rapida.',
  },
  {
    title: 'Landing page SaaS',
    type: 'UI + SCSS',
    summary: 'Interface comercial com hierarquia forte e componentes reutilizaveis.',
  },
  {
    title: 'Portfolio interativo',
    type: 'GSAP + UX',
    summary: 'Experiencia com transicoes suaves, scroll narrativo e foco visual.',
  },
]

export function ProjectsSection() {
  return (
    <section className="projects-section" id="projetos" aria-labelledby="projects-title">
      <div className="projects-section__header">
        <p className="projects-section__kicker">Projetos selecionados</p>
        <h2 id="projects-title">Interfaces com foco em clareza, ritmo e entrega.</h2>
      </div>

      <div className="projects-section__grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <span className="project-card__index">{String(index + 1).padStart(2, '0')}</span>
            <p className="project-card__type">{project.type}</p>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
