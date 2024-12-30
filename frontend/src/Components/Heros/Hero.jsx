import React from 'react'
import './Hero.css'
import emoji from '../../img/smile.png';
import fasion from '../../img/girl.png'


export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero_right">
            <h2>NEW ARRIVALS ONLY</h2>
            <div className='hero_right_new'>
                <div >
                <p>New </p>
                <img src={emoji} alt="" />
                 </div>
                <p>Collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero_latest">
                <p>{" Latest Collection  -->> "}</p>
            </div>
        </div>
        <div className="hero_left">
            <img src={fasion} alt="no image" />
        </div>
        
    </div>
  )
}
