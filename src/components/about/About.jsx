import React from 'react'
import './about.css'
import myImage from '../../assets/my-image2.jpg'
import {TfiWorld} from 'react-icons/tfi'
import {GiGraduateCap, GiBriefcase} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

            <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>
                    <ul>
                      <li>Bsc.(Hons) Information and Communication Technology</li>
                      <li>University of SJP.</li>
                     
                    </ul>
                  </small>
              </article>

            <article className='about__card'>
                  <GiBriefcase   className='about__icon'/>
                  <h5>Experience</h5>
                  <small>
                    <ul>
                      <li>IT Lecturer (The Open University of Sri Lanka) </li>
                      <li>IT Instructor (Uni.of Moratuwa)</li>
                      <li>Freelancer</li>
                    </ul>
                  </small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>UI/UX Development </li>
                      <li>Graphic Designs</li>
                      <li>Full Stak Development</li>
                    </ul>
                  </small>
              </article>



              

            </div>
            <p>
             <strong>Hi, I'm Nipuna</strong><br />
             I am a <strong>passionate</strong> and <span style={{ color: '#ff6b6b' }}>detail-oriented</span> 
             individual with a strong foundation in computer science and a deep interest in designing 
             <span style={{ color: '#ff6b6b' }}>intuitive</span> and user-centered digital experiences. 
             I enjoy transforming complex ideas into simple, elegant, and functional interfaces through 
             <span style={{ color: '#ff6b6b' }}>creativity</span>, research, and analytical thinking. 
             With a strong work ethic and problem-solving mindset, I focus on creating solutions that 
             improve <strong>usability</strong>, accessibility, and overall user satisfaction. 
             I am also committed to continuous learning and staying updated with emerging technologies and design 
             trends in the evolving digital landscape.
            </p>

          </div>
      </div>
    </section>
  )
}

export default About