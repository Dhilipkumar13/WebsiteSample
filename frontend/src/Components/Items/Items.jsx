import React from 'react'
import './Items.css'
import { Link } from 'react-router'
export const Items = ({id,image,name,old_price,new_price}) => {
  return (
    <div className='item'>
        <Link to={`/product/${id}`} ><img onClick={window.scrollTo(0,0)} src={image} alt="Not Found" /> </Link>
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
