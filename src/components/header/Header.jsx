import React from 'react'
import './header.css'
import CTA from './CTA'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import Donga1 from '../../assets/donga1.jpg'
import Donga2 from '../../assets/donga2.jpg'
import HeaderSocials from './HeaderSocials'
export const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>An</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Donga1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Donga2} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
