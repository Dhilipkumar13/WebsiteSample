import React from 'react'
import shopicon from '../../img/shop icon.png'
import './Footer.css'
import { Link } from 'react-router'
import whatsapp from '../../img/whatsapp.png'
import insta from '../../img/Insta.png'
import linkedin from '../../img/linkedin.png'

function Footer() {
  return (
    <div className='footer_f'>
        <div className="footer">
            <div className='footer_top'>
                <img src={shopicon} alt="" />
                <h1>13dhilip</h1>
            </div>
            <ul className='fotter_category'>
                <li><Link to="/">Shop</Link></li>
                <li><Link to="/mens">Mens</Link></li>
                <li><Link to="/womens">Womens</Link></li>
                <li><Link to="/kids">Kids</Link></li>
            </ul>
            <div className="footer_app" style={{marginTop:'10px'}}>
                <img src={whatsapp} alt="" />
                <img src={insta} alt="" />
                <img src={linkedin} alt="" />
            </div>
        </div>
        <hr />
        <div className="footer_bottom">
            <h2>CopyRight @ 2025 - All Right Reserved </h2>
        </div>
    </div>
  )
}

export default Footer