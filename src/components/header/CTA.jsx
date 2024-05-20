import React from 'react'
import CV from '../../assets/Nipuna-Yasanga_CV.pdf'

const CTA = () => {

  return (
    
    <div className="cta">

        <a href={CV} download className='btn btn-primary'>Download CV</a>
        <a href="#contacts" className='btn '>Contact Me</a>
    </div>
  )
}

export default CTA