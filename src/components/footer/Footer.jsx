import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'


const Footer = () => {
  return (
    <footer>
      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/troy-sparks-a7899a262/"><BsLinkedin/></a>
        <a href="https://github.com/iskry"><FaGithub/></a>
        <a href="mailto:iskrydev@gmail.com"><MdOutlineEmail/></a>
    </div>

    <a href="#" className='footer__logo'>ISKRY</a>


    </footer>
  )
}

export default Footer
