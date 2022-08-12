import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
export default function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src="https://scontent.fdad6-1.fna.fbcdn.net/v/t1.6435-9/122156636_187021786245918_7250090496918473542_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=slCkv7ObQCwAX8XaXc5&_nc_ht=scontent.fdad6-1.fna&oh=00_AT_a3StKIgtENUqp9tZgRsJU86SVJy-51gbGbX8OMd_KGw&oe=6318DC83" alt="About Image" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1 year working with React JS and Node JS at university</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Specialization</h5>
              <small>Software technology</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Project</h5>
              <small>20+ completed</small>
            </article>
          </div>
          <p>Thank you for looking at my profile, hopefully through this profile the company can give me an opportunity to work and contribute to the company.</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
