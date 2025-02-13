import React, { useEffect, useState } from 'react'
import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faJsSquare,
  faNodeJs,
  faReact,
  faPhp,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faBoxes } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 6000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="main-container">
      <div className="text-box">
        <h1 className="animation-text-about">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={5}
          />
        </h1>
        <br />
        <div className="info-text">
          <p>
            i'm very ambitious fresher Full-Stack developer looking for a role
            in established IT company with the opportunity to work with the
            latest technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I have completed my graduation in
            <span className="skill-text">
              Bachelor of Computer Applications
            </span>
            and also pursuing MSc Computer Science, and I have completed my{' '}
            <span className="skill-text">Full Stack Developer course</span>, I
            also have
            <span className="skill-text">1 year of experience</span> as a
            <span className="skill-text">Computer Technician.</span>
          </p>
          <h1 className="animation-text-skill" style={{ fontSize: '30px' }}>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']}
              idx={10}
            />
          </h1>
          <h3> Full-Stack Development:</h3>
          <span className="skill-text"> HTML </span>
          <span className="skill-text"> CSS </span>
          <span className="skill-text"> JavaScript </span>
          <span className="skill-text"> Bootstrap </span>
          <span className="skill-text"> Tailwind CSS</span>
          <span className="skill-text"> Daisy UI </span>
          <span className="skill-text"> React.js </span>
          <span className="skill-text"> PHP </span>
          <span className="skill-text"> Node.js </span>
          <span className="skill-text"> Express.js </span>
          <span className="skill-text"> MongoDB </span>
          <span className="skill-text"> MySql</span>
          <span className="skill-text"> NoSql</span>
          <span className="skill-text"> Database</span>
          <span className="skill-text"> Rest API</span>
          <span className="skill-text"> JSON </span>
          <span className="skill-text"> OOP </span>
          <span className="skill-text"> C/C++ </span>
          <span className="skill-text"> Git/Github </span>
          <span className="skill-text"> ChatGPT </span>
          <span className="skill-text"> Postman </span>
          <span className="skill-text"> Vs Code </span>
          <h3> Computer Technician:</h3>
          <span className="skill-text"> Technical Support </span>
          <span className="skill-text"> Remote Access Software </span>
          <span className="skill-text"> IT </span>
          <span className="skill-text"> Help Desktop Support </span>
          <span className="skill-text"> Software Troubleshooting</span>
          <span className="skill-text"> Operating system </span>
          <span className="skill-text"> Hardware </span>
        </div>
      </div>

      {/* ---------cube----------- */}
      <div className="cube-box">
        <div className="cube-contener">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon
                icon={faBoxes}
                color="#38BDF8"
                title="Tailwind CSS"
              />
            </div>
            <div className="face2">
              <FontAwesomeIcon
                icon={faJsSquare}
                color="#F7DF1E"
                title="JavaScript"
              />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#61DAFB" title="React" />
            </div>
            <div className="face4">
              <FontAwesomeIcon
                icon={faNodeJs}
                color="#68A063"
                title="Node.js"
              />
            </div>
            <div className="face5">
              <FontAwesomeIcon
                icon={faDatabase}
                color="#47A248"
                title="MongoDB"
              />
            </div>
            <div className="face6">
              <FontAwesomeIcon
                icon={faPhp}
                color="#5d629e"
                title="PHP"
                transform={{ rotate: -90 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
