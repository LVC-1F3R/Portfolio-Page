import React from 'react'
import './footer.css'
import {MdOutlineEmail} from 'react-icons/md'


const Footer = () => {
  return (
    <footer id="contact">
      <a href="#" className='footer__logo'>ISKRY</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
      </ul>


      <a href="mailto:iskrydev@gmail.com" target="_blank"><MdOutlineEmail/></a>


    </footer>
  )
}

export default Footer
