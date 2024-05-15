import React from 'react'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/nipuna-yasanga-2b4a02ab" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/nipunayasanga" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://www.instagram.com/nipuna_yasa" target="_blank" rel='noreferrer'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials