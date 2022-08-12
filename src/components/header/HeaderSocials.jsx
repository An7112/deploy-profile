import React from 'react'
import {FaFacebookSquare, FaGithubSquare} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.facebook.com/profile.php?id=100048142928129' target="_blank"><FaFacebookSquare/></a>
        <a href='https://github.com/An7112' target="_blank"><FaGithubSquare/></a>
    </div>
  )
}

export default HeaderSocials