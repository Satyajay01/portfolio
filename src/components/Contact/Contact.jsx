import React, { useEffect, useState } from 'react'
import './Contact.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')


  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e','.']}
              idx={15}
            />
          </h1>
          <p>
            I am particularly interested in Web app project development.
            However, if you have any other requests or questions, feel free to
            contact me using the links below.
          </p>
          <div className="contact-form">
          {/* Links */}
          <div className='contact-link'>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://wa.me/917024993010"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} color="green" /> <span> WhatsApp</span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="mailto:satyajaydibya9@gmail.com"
                    >
                      <FontAwesomeIcon icon={faEnvelope} color="rgb(191, 109, 54)" /> <span>Email</span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/satyajay01"
                    >
                      <FontAwesomeIcon icon={faLinkedin} color="rgb(20, 105, 199)" /> <span>Linkedin</span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/Satyajay01"
                    >
                      <FontAwesomeIcon icon={faGithub} color="#000000" /> <span>Github</span>
                    </a>
                  </li>
                </ul>
          </div>
            {/* <form>
              <ul>
                <li className="half">
                  <input type="text" name="" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Name"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="SEND"
                  ></input>
                </li>
              </ul>
            </form> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
