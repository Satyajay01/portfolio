import React, { useEffect, useState } from 'react'
import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faNodeJs, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; 
import { faBoxes } from '@fortawesome/free-solid-svg-icons';

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
        <p  align="LEFT">
          I'm quietly confident, naturally curious, and perpetually working on
          improving my chops one project problem at a time.
        </p>
        <p>
          If I have to define myself in one sentence I would be a son of a small
          beautiful family, a sports lover, a swimming enthusiast and a
          technology freak...!
        </p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
          <FontAwesomeIcon icon={faBoxes} color="#38BDF8" title="Tailwind CSS" />
          </div>
          <div className='face2'>
          <FontAwesomeIcon icon={faJsSquare} color="#F7DF1E" title="JavaScript" />
          </div>
          <div className='face3'>
          <FontAwesomeIcon icon={faReact} color="#61DAFB" title="React" />
          </div>
          <div className='face4'>
          <FontAwesomeIcon icon={faNodeJs} color="#68A063" title="Node.js" />
          </div>
          <div className='face5'>
          <FontAwesomeIcon icon={faDatabase} color="#47A248" title="MongoDB" />
          </div>
          <div className='face6'>
          <FontAwesomeIcon icon={faGitAlt} color="#F1502F" title="Git" />
          </div>
          

        </div>

      </div>
    </div>
  )
}

export default About
