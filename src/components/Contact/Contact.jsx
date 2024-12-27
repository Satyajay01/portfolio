import React, { useEffect, useState } from 'react';
import './Contact.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendMail = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const data = {
      to_name: name,
      to_email: email,
      message,
    };
    const serviceId = 'satyajay_email_serviceId';
    const templateId = 'Satyajay_templateid';
    const userId = 'yefBktnctXaY8sbkM';

    emailjs.send(serviceId, templateId, data, userId).then(
      (response) => {
        alert('Message sent successfully!');
        console.log('Success:', response);
        setName('');
        setEmail('');
        setMessage('');
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.log('Error:', error);
      }
    );
  };

  return (
    <div className="contact-container">
      <div className="text-zone-contac">
        <h1 className='animation-text-contact'>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e', '.']}
            idx={10}
          />
        </h1> <br /> <br />
        <p className='info-text'>
          I am specifically interested in web app project development and I
          need an internship or job. However, if you have any other requests or
          questions, please feel free to contact me using the form below.
        </p>
        <div className="contact-form">
          <form onSubmit={sendMail}>
            <ul>
              <li className="half">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </li>
              <li className="half">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </li>
              <li>
                <button type="submit" className="flat-button">
                  SEND
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
