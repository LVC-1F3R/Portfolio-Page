import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/troy-sparks-a7899a262/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/iskry" target="_blank"><FaGithub/></a>
        <a href="mailto:iskrydev@gmail.com" target="_blank"><MdOutlineEmail/></a>
    </div>
  )
}

export default HeaderSocials
