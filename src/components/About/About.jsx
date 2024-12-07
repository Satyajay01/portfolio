import React, { useEffect, useState } from 'react'
import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I'm very ambitious Full-Stack developer looking for a role in
          established IT compuny with the opprtunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p>
          I'm quietly confident, naturally curious, and perpetually working on
          improving my chops one project problem at a time.
        </p>
        <p>
          If I have to define myself in one sentence I would be a son of a small
          beautiful family, a sports lover, a swimming enthusiast and a
          technology freak...!
        </p>
      </div>
    </div>
  )
}

export default About
