import React from 'react'
import logo from '../assets/logo-bookmark.svg'
import facebook from '../../images/icon-facebook.svg'
import twitter from '../../images/icon-twitter.svg'

const Footer = () => {
  return (
    <div>
        <div>
            <img src={logo} alt="" />
            <div>
                <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </div>
            
        </div>
        <div>
            <a href="#"><img src={facebook} alt="facebook" /></a>
            <a href="#"><img src={twitter} alt="twitter" /></a>
        </div>
    </div>
  )
}

export default Footer