import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>

      <h5>The skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">

            <h3>Frontend </h3>

            <div className="experience__content">

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Figma</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Adobe XD</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Tailwind CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>React Js</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Next JS</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
        </div>
     {/* End of frontend part */}

        <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">

            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>


              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Redux</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Flutter </h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience