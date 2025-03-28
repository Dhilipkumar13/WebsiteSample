import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router';
import shopicon from '../../img/shop icon.png'
import down from '../../img/download.png'
import { ShopContext } from '../../Context/ShopContext';
export default function Navbar() {
  const [menuBar,setMenuBar]=useState('shop');
  const {getCartCount} = useContext(ShopContext)
  return (
    <div className='nav_bar'>
        <div className='nav_logo'>
          <img src={shopicon} alt="" />
        <h2>13dhilip</h2>
        </div>
        <div className="nav_menu">
            <ul className="nac_list">
              <li onClick={()=>setMenuBar('shop')}><Link to="/">Shop</Link>{menuBar==='shop'?<hr/>:<></>}</li>
                <li onClick={()=>setMenuBar('mens')}><Link to="/mens">Mens</Link>{menuBar==='mens'?<hr/>:<></>}</li>
                <li onClick={()=>setMenuBar('womens')}><Link to="/womens">Womens</Link>{menuBar==='womens'?<hr/>:<></>}</li>
                <li onClick={()=>setMenuBar('kids')}><Link to="/kids" >Kids</Link>{menuBar==='kids'?<hr/>:<></>}</li>
            </ul>
        </div>
        <div className="nav_log_button" style={{display:"flex"}}>
          <div className='navigate_nav_log'><Link to="/singup">Login</Link></div>
          <div style={{alignItems:"center"}}>
            <Link to="/cart"><img src={down} alt="not found" /></Link>
          </div>        
          <div className='nav_cort_count'>{getCartCount()}</div>
        </div>
    </div>
  )
}
