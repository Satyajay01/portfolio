import React, { useEffect, useState } from 'react'
import './home.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Logo from './Logo/Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArry = ['a', 't', 'y', 'a', 'j', 'a', 'y']
  const jobArray = [
    // 'w',
    // 'e',
    // 'b',
    'M',
    'e',
    'r',
    'n',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]
  useEffect(() => {
    const timer= setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer); 
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <span className={`${letterClass} _13`}>,</span>
          <br />
          <span className={`${letterClass} _14`}>I</span>
          <span className={`${letterClass} _15`}>'</span>
          <span className={`${letterClass} _16`}>m</span>
          <img src={LogoTitle} alt="Developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArry}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={21}
          />
        </h1>
        <h2>Full-stack Developer / React.js / Node.js</h2>
        <Link to="/contact" className="flat-button btn41-43 btn-43">
          Contact Me
        </Link>
        <a href="https://drive.google.com/uc?export=download&id=1ie42PW6f2WKXAFETtsvVJZD__UA_uW7w" className="flat-button btn41-43 btn-43">
          Resume Dow.
        </a>
      </div>
      <Logo/>
    </div>
  )
}

export default Home
