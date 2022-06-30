import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
          <a href="https://www.linkedin.com/in/dharmen895/" target="_blank"><BsLinkedin/></a>
          <a href="https://github.com/Dharmen895" target="_blank"><FaGithub/></a>
          <a href="https://twitter.com/Dharmen895" target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials