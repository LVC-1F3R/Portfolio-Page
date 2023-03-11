import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ISKRY</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://facebook.com"><MdOutlineEmail/></a>
      </div>

    </footer>
  )
}

export default Footer
