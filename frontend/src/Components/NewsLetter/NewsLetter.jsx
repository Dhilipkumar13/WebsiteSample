import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <div className="newsletterin">
            <h2>Get Eclusive Offers On Your Email</h2>
            <p>subscribe to our newsletter and stay updated</p>
            <div>
                <input type="text" placeholder='Your Email id'/>
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}
