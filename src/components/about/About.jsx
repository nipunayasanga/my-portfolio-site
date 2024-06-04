import React from 'react'
import './about.css'
import myImage from '../../assets/my-image2.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

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
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Freelancer</h5>
                  <small>Fiverrr<br /></small> 
                  <small>Upwork</small>
                  
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Full Stak Development</li>
                      <li>Graphic Designs</li>
                      <li>UI Designs</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
             <b> Hi, Im Nipuna<br></br></b>
            I am a dedicated and driven individual, fueled by a deep passion for innovation and backed by a robust 
            foundation in computer science. My enthusiasm, self-motivation, sense of responsibility, 
            and strong work ethic enable me to excel under pressure and meet stringent deadlines effectively.I thrive on challenges 
            and enjoy solving complex problems using my analytical skills and logical thinking. 
            My enthusiasm for learning drives me to stay updated with the latest technologies 
            and trends in the ever-evolving tech industry.
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About