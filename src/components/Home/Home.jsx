import React from 'react'
import './home.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={LogoTitle} alt="Developer" />
          atyajay
          <br />
          web Developer
        </h1>
        <h2>Full-stack Developer / React.js / Node.js</h2>
        <Link to="/contact" className="flat-button btn41-43 btn-43">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
