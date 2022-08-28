import React from 'react'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 HiTa headphones All rights reserved</p>
      <p className='icons'>
        <a href='https://www.instagram.com/harshit___tiwari/?hl=en'><AiFillInstagram /></a>
        <a href='https://twitter.com/Harshit04086908'><AiOutlineTwitter /></a> 
      </p>
    </div>
  )
}

export default Footer
