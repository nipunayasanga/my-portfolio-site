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
             <strong style={{ color: '#ff6b6b' }}>Nipuna</strong>, <strong style={{ color: '#ff6b6b' }}>user-centered digital 
              experiences</strong>, <strong style={{ color: '#ff6b6b' }}>detail-oriented</strong>, <strong style={{ color: '#ff6b6b' }}>strong work ethic</strong>,
               <strong style={{ color: '#ff6b6b' }}>usability</strong>, <strong style={{ color: '#ff6b6b' }}>accessibility</strong>, 
               and <strong style={{ color: '#ff6b6b' }}>overall user satisfaction</strong>.
            </p>

          </div>
      </div>
    </section>
  )
}

export default About