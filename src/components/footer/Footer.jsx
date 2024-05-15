import React from 'react'
import './footer.css'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>NIPUNA.Y</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://linkedin.com/in/nipuna-yasanga-2b4a02ab"><BsLinkedin/></a>
          <a href="https://github.com/nipunayasanga"><BsGithub/></a>
          <a href="https://www.instagram.com/nipuna_yasa"><BsInstagram/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Nipuna Yasanga.All rightts reserved.</small>
        </div>
    </footer>
  )
}

export default Footer