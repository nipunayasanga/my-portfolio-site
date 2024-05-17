import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img5.jpg'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'
import IMG6 from '../../assets/img6.jpeg'
import IMG7 from '../../assets/img7.jpg'
import IMG8 from '../../assets/img8.jpg'
import IMG9 from '../../assets/img9.jpg'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>CURD web application using the MERN </h3>
            <small className='text-light'>MongoDB|ExpressJs| ReactJs| NodeJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/nipunayasanga/my-react-app.git" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Full-Functional Flutter Grocery Mobile App</h3>
            <small className='text-light'>Flutter | Dart | JS | Android </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/nipunayasanga/Flutter-grocery-app.git" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>Design a Music player UI kit Design using Adobe XD</h3>
            <small className='text-light'>Adobe XD</small>
            <div className="portfolio__item-cta">
              
              <a href="https://www.behance.net/gallery/135912801/Music-player-UI-kit-design" target="_blank" rel='noreferrer' className='btn btn-primary'>behance</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>Complaint Management System For University</h3>
            <small className='text-light'>HTML | JS | Bootstrap | PHP | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/nipunayasanga/COMPLAINT-REGISTRATION-AND-MANAGEMENT-SYSTEM-FOR-UNIVERSITY" target="_blank" rel='noreferrer' className='btn'>Github</a>
                
            </div>
            
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG6} alt="" />
            </div>
            <h3>My Portfolio Website(This website)</h3>
            <small className='text-light'>React | CSS | JS | Github </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/nipunayasanga/my-portfolio-site" target="_blank" rel='noreferrer' className='btn'>Github</a>
                
            </div>
            
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG7} alt="" />
            </div>
            <h3>My Freelancing Profiles as a Designer</h3>
            <small className='text-light'>Photoshop | Illustrator | XD </small>
            <div className="portfolio__item-cta">
              <a href="https://www.fiverr.com/nipuna_yasa?public_mode=true" target="_blank" rel='noreferrer' className='btn btn-outline-success'>Fiverr</a>
              <a href="https://www.upwork.com/freelancers/~01db16eea5935a5e9b?viewMode=1" target="_blank" rel='noreferrer' className='btn btn-outline-success'>Upwork</a>
                
            </div>
            
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG9} alt="" />
            </div>
            <h3>Commission Work for client</h3>
            <small className='text-light'>Wordpress | Elementor| TutorLMS  </small>
            <div className="portfolio__item-cta">
              <a href="https://onewaylanka.com" target="_blank" rel='noreferrer' className='btn btn-primary'>Live Website</a>
                
            </div>
            
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG8} alt="" />
            </div>
            <h3>Doctor Appointmnet System using MERN Stack</h3>
            <small className='text-light'>React | Redux | MongoDB | NodeJS </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/nipunayasanga/Doctor-appointmnet-system" target="_blank" rel='noreferrer' className='btn'>Github</a>
                
            </div>
            
        </article>


      </div>
    </section>
  )
}

export default Myprojects