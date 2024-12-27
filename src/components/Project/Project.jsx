import React, { useEffect, useState } from 'react'
import './project.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  // project video 
  const videoId1 = "hSBhJjST2vs";
  const videoId2 = "fIUk4rcQbnc";
  return (
    <div>
      <div className="project-container">
        <h1 className="animation-text-project">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'c ', 't', 's', '.']}
            idx={10}
          />
        </h1>
        <br /> <br />
        <h3 className="project-heading">
          I have created many projects to enhance my skills which are available
          in my <a href="https://github.com/Satyajay01">GitHub</a> profile
          <br />
          and sample of some projects are given below.
        </h3>
        <div className="project">
        <iframe
        src={`https://www.youtube.com/embed/${videoId1}?autoplay=1&loop=1&playlist=${videoId1}&vq=hd700`}
        frameBorder="0"
        allow="accelerometer; autoplay;"
        allowFullScreen
      ></iframe>
          <div>
            <h3>BookStore— Full-Stack (MERN) Project</h3>
            <a href="https://github.com/Satyajay01/BookStore-MERN">
              https://github.com/Satyajay01/BookStore-MERN
            </a>
            <br />
            ● The Bookstore project aims to provide an online book-shop platform
            where users can purchase and download books. <br /> ● The front-end
            of the project is built using React.js, Tailwind CSS, and DaisyUI
            allowing the design to enhance user experience with fast and
            responsive interactions. <br /> ● The back-end, built with Node.js,
            Express, and MongoDB, eciently manages user authentication, book
            inventory, and order processing.
          </div>
        </div>{' '}
        <br /> <br />
        <div className="project">
        <iframe
        src={`https://www.youtube.com/embed/${videoId2}?autoplay=1&loop=1&playlist=${videoId2}&vq=hd700`}
        frameBorder="0"
        allow="accelerometer; autoplay;"
        allowFullScreen
      ></iframe>
          <div>
            <h3>Ochi— Animated home page clone</h3>
            <a href="https://github.com/Satyajay01/OCHI">
            https://github.com/Satyajay01/OCHI
            </a>
            <br />● This project is a clone of ochi.design website which I
            created with the help of React.js. <br />● To make the WebPage look good
            and attractive, Tailwind, which is a CSS framework, has been used. <br /> ●
            and in this project we have used Framer Motion, which makes the
            WebPage smooth and applies the animation.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
