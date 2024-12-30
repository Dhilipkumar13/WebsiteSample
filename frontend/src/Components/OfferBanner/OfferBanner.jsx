import React from 'react'
import './OfferBanner.css'
function OfferBanner(props) {
  return (
    <div className='offerbanner'>
        <div className="bannermsg">
            <h2>FLAT 50% OFFER </h2>
            <p><span>12</span> Hour <span>20</span> Mins</p>
            <div className="bannerbtn">Explore Now</div>
        </div>
        <div className="bannerimg">
        <img src={props.showBanner} alt="" />
        </div>
    </div>
  )
}

export default OfferBanner