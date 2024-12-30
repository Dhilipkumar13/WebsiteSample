import React from 'react'
import offer from '../../img/offer.png'
import './Offers.css'
export const Offers = () => {
  return (
    <div className="super_offer">
    <div className='offer'>
      <div className="offer_left">
      <h2>Exclusive </h2>
      <h2>Offer For You</h2>
      <p>ONLY ON BEST SELLERS PRODUCTS</p>
      <button>Check Now</button>
      </div>
      <div className="offer_right">
        <img src={offer} alt="" />
      </div>
    </div>
    </div>
  )
}
