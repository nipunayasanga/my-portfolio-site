import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img5.jpg'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'

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
            <h3>Full-stack web application using the MERN </h3>
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
            <h3>Design a Music player UI kit Design</h3>
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
            <small className='text-light'>HTML | CSS | JS | Bootstrap | PHP | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/nipunayasanga/COMPLAINT-REGISTRATION-AND-MANAGEMENT-SYSTEM-FOR-UNIVERSITY" target="_blank" rel='noreferrer' className='btn'>Github</a>
                
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects