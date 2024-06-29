import React from 'react'
import { assets } from '../assets/assets.js'

const Navbar = () => {
  return (
    <div>
      <img src={assets.logo} alt="" />

      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Contact us</li>
      </ul>
      
        <img src={assets.profile} alt="" />
        <img src={assets.cart} alt="" />

      
    </div>

    
  )
}

export default Navbar
