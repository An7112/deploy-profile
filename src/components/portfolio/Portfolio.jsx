import React from 'react'
import './portfolio.css'
import { DATA } from '../../Data'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Where Do I Study ?</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {DATA.map((ele) => (
          <article className='portfolio__items'>
            <div className='portfolio__item-image'>
              <img src={ele.IMG} alt="" />
            </div>
            <h5>{ele.Title}</h5>
            <div className='portfolio__item-cta'>
              <a href={ele.Link} target="_blank" className='btn'>{ele.Name}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio