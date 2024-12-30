import React from 'react'
import './Items.css'
export const Items = ({image,name,old_price,new_price}) => {
  return (
    <div className='item'>
        <img src={image} alt="Not Found" />
        <h3>{name}</h3>
        <div className="item_price">
            <div className="item_price_new">
                ${new_price}
            </div>
            <div className="item_price_old">
                ${old_price}
            </div>
        </div>
    </div>
  )
}
