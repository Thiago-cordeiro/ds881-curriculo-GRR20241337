import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './BentoGallerySection.scss'

gsap.registerPlugin(ScrollTrigger)

const galleryItems = [
  {
    src: 'https://assets.codepen.io/16327/portrait-pattern-1.jpg',
    alt: 'Padrao abstrato em tons escuros',
  },
  {
    src: 'https://assets.codepen.io/16327/portrait-image-12.jpg',
    alt: 'Retrato artistico com luz suave',
  },
  {
    src: 'https://assets.codepen.io/16327/portrait-image-8.jpg',
    alt: 'Retrato vertical com composicao editorial',
    label: 'Thiago',
    isPortfolio: true,
  },
  {
    src: 'https://assets.codepen.io/16327/portrait-pattern-2.jpg',
    alt: 'Padrao abstrato colorido',
  },
  {
    src: 'https://assets.codepen.io/16327/portrait-image-4.jpg',
    alt: 'Retrato com enquadramento aproximado',
  },
  {
    src: 'https://assets.codepen.io/16327/portrait-image-3.jpg',
    alt: 'Retrato em fundo escuro',
  },
  {
    src: 'https://assets.codepen.io/16327/portrait-pattern-3.jpg',
    alt: 'Padrao grafico de apoio visual',
  },
  {
    src: 'https://assets.codepen.io/16327/portrait-image-1.jpg',
    alt: 'Retrato editorial em formato vertical',
  },
]

export function BentoGallerySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const portfolioCardRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const portfolioCard = portfolioCardRef.current
    const projectsSection = document.querySelector<HTMLElement>('.projects-section')

    if (!section || !portfolioCard) {
      return undefined
    }

    const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (shouldReduceMotion) {
      gsap.set(projectsSection, { autoAlpha: 1 })
      return undefined
    }

    const ctx = gsap.context(() => {
      const otherItems = gsap.utils.toArray<HTMLElement>(
        '.bento-gallery__item:not(.bento-gallery__item--portfolio)',
      )

      gsap.set(projectsSection, { autoAlpha: 0 })

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=100%',
            scrub: true,
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        .to(
          '.bento-gallery-section__copy',
          {
            autoAlpha: 0,
            y: -48,
            ease: 'power2.out',
          },
          0,
        )
        .to(
          otherItems,
          {
            autoAlpha: 0,
            scale: 0.78,
            ease: 'power2.inOut',
          },
          0,
        )
        .to(
          portfolioCard,
          {
            scale: 5,
            borderRadius: 0,
            ease: 'power3.inOut',
          },
          0,
        )
        .to(
          '.bento-gallery__portfolio-title',
          {
            scale: 2.6,
            autoAlpha: 0,
            ease: 'power2.in',
          },
          0.28,
        )
        .to(
          section,
          {
            autoAlpha: 0,
            ease: 'power1.in',
          },
          0.72,
        )
        .to(
          projectsSection,
          {
            autoAlpha: 1,
            ease: 'power1.out',
          },
          0.50,
        )
    }, section)

    return () => {
      gsap.set(projectsSection, { clearProps: 'opacity,visibility' })
      ctx.revert()
    }
  }, [])

  return (
    <section
      className="bento-gallery-section"
      id="portfolio-transition"
      ref={sectionRef}
      aria-labelledby="bento-gallery-title"
    >
      <div className="bento-gallery-section__copy">
        <p className="bento-gallery-section__kicker">Portfolio</p>
        <h2 id="bento-gallery-title">Web Development, baseado em boas práticas, desempenho e seo.</h2>
      </div>

      <div className="bento-gallery-section__wrap">
        <div className="bento-gallery" aria-label="Galeria visual em mosaico">
          {galleryItems.map((item) => (
            <figure
              className={`bento-gallery__item${
                item.isPortfolio ? ' bento-gallery__item--portfolio' : ''
              }`}
              key={item.src}
              ref={item.isPortfolio ? portfolioCardRef : undefined}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              {item.isPortfolio && (
                <figcaption>
                  <span className="bento-gallery__portfolio-title">{item.label}</span>
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
