import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import './HorizontalTextSection.scss'

gsap.registerPlugin(ScrollTrigger, SplitText)

const horizontalText = 'Me da nota 10 prfv ;).';

export function HorizontalTextSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const text = textRef.current

    if (!section || !text) {
      return undefined
    }

    let split: SplitText | undefined

    const ctx = gsap.context(() => {
      split = SplitText.create(text, {
        type: 'chars, words',
        charsClass: 'horizontal-text-section__char',
        wordsClass: 'horizontal-text-section__word',
      })

      const scrollTween = gsap.to(text, {
        xPercent: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          end: '+=5000px',
          scrub: true,
        },
      })

      split.chars.forEach((char) => {
        gsap.from(char, {
          yPercent: 'random(-200, 200)',
          rotation: 'random(-20, 20)',
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: char,
            containerAnimation: scrollTween,
            start: 'left 100%',
            end: 'left 30%',
            scrub: 1,
          },
        })
      })
    }, section)

    return () => {
      ctx.revert()
      split?.revert()
    }
  }, [])

  return (
    <section
      className="horizontal-text-section"
      id="stack"
      ref={sectionRef}
      aria-labelledby="horizontal-text-title"
    >
      <div className="horizontal-text-section__container">
        <h3
          className="horizontal-text-section__text"
          id="horizontal-text-title"
          ref={textRef}
        >
          {horizontalText}
        </h3>
      </div>
    </section>
  )
}
