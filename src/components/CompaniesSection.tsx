import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import bneLogo from '../assets/bne-logo.svg'
import './CompaniesSection.scss'

gsap.registerPlugin(ScrollTrigger)

const companies = [
  {
    name: 'BNE',
    role: 'Desenvolvedor Front-end',
    period: 'Experiência profissional',
    summary: 'Atuação em interfaces web, componentes reutilizáveis e evolução de produto digital.',
    logo: bneLogo,
    logoAlt: 'Logo BNE',
  },
  {
    name: 'Trabalha Brasil',
    role: 'Desenvolvedor Front-end',
    period: 'Experiência profissional',
    summary: 'Construção e manutenção de experiências digitais voltadas para busca de empregos.',
    logo:
      'https://www.trabalhabrasil.com.br/images/logo-trabalha-brasil.svg?v=-fcxNQ9phI-8VGVazj5e-UBFe97hTfUoF__-IQ21FCY',
    logoAlt: 'Logo Trabalha Brasil',
  },
]

export function CompaniesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return undefined
    }

    const buildTimeline = () => {
      const orb = section.querySelector<HTMLElement>('.companies-section__orb')
      const fill = section.querySelector<HTMLElement>('.companies-section__rail-fill')
      const rail = section.querySelector<HTMLElement>('.companies-section__rail')
      const checkpoints = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll('.company-checkpoint'),
      )

      if (!orb || !fill || !rail || checkpoints.length === 0) {
        return undefined
      }

      const railRect = rail.getBoundingClientRect()
      const orbRect = orb.getBoundingClientRect()
      const points = checkpoints.map((checkpoint) => {
        const marker = checkpoint.querySelector<HTMLElement>('.company-checkpoint__dot')
        const markerRect = marker?.getBoundingClientRect()
        const centerY = markerRect
          ? markerRect.top + markerRect.height / 2
          : checkpoint.getBoundingClientRect().top

        return centerY - railRect.top - orbRect.height / 2
      })

      gsap.set(orb, { y: points[0] })
      gsap.set(fill, { scaleY: 0 })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section.querySelector('.companies-section__timeline'),
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      })

      points.slice(1).forEach((point) => {
        timeline.to(orb, {
          y: point,
          duration: 1,
          ease: 'none',
        })
      })

      gsap.to(fill, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: section.querySelector('.companies-section__timeline'),
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      })

      checkpoints.forEach((checkpoint) => {
        ScrollTrigger.create({
          trigger: checkpoint,
          start: 'top center',
          end: 'bottom center',
          toggleClass: {
            targets: checkpoint,
            className: 'company-checkpoint--active',
          },
        })
      })

      return timeline
    }

    let ctx: gsap.Context | undefined

    const createContext = () => {
      ctx?.revert()
      ctx = gsap.context(() => {
        buildTimeline()
      }, section)
    }

    const handleResize = () => {
      createContext()
    }

    createContext()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      ctx?.revert()
    }
  }, [])

  return (
    <section
      className="companies-section"
      id="experiencia"
      ref={sectionRef}
      aria-labelledby="companies-title"
    >
      <div className="companies-section__intro">
        <p className="companies-section__kicker">Experiência</p>
        <h2 id="companies-title">Empresas e contextos onde transformei ideia em interface.</h2>
      </div>

      <div className="companies-section__timeline" aria-label="Linha do tempo de experiencia">
        <div className="companies-section__rail" aria-hidden="true">
          <div className="companies-section__rail-fill"></div>
          <div className="companies-section__orb">
            <span>TC</span>
          </div>
        </div>

        {companies.map((company, index) => (
          <article className="company-checkpoint" key={company.name}>
            <div className="company-checkpoint__dot" aria-hidden="true"></div>
            <div className="company-checkpoint__card">
              <span className="company-checkpoint__index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <img
                  className="company-checkpoint__logo"
                  src={company.logo}
                  alt={company.logoAlt}
                />
                <p className="company-checkpoint__period">{company.period}</p>
                <h3>{company.name}</h3>
                <p className="company-checkpoint__role">{company.role}</p>
                <p className="company-checkpoint__summary">{company.summary}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
