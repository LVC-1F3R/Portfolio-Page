import React from 'react'
import './projects.css'
import TALES from '../../assets/img/talesalgo.png'
import ECOM from '../../assets/img/ecommerce.jpeg'
import SOCIAL from '../../assets/img/social.png'
import {BsPatchCheckFill} from 'react-icons/bs'




const Projects = () => {



  return (
    <section id='experience'>
      <h5>Check Out</h5>
      <h2>My Recent Projects</h2>
      
      <div className="container project__container ">
          <a href="https://github.com/iskry/TalesfromtheAlgorithm">
          <img src={TALES} alt="Tales from the Algorithm" />
          </a>

          <a href="https://github.com/iskry/E-Commerce-BackEnd">
          <img src={ECOM} alt="E-Commerce Backend" />
          </a>


          <a href="https://github.com/iskry/introvertsUnite">
          <img src={SOCIAL} alt="Social Network Backend" />
          </a>
      </div>

      <h2>Experience</h2>
        <div className="container experience__container">
        <div className="experience__frontend experience">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend experience">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Express</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>AWS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>C#</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Apollo</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
                        <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>GraphQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>


        {/* END OF BACKEND */}


      </div>
  </section>
  )
}

export default Projects
