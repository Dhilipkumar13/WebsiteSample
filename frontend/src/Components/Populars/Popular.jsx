import React from 'react'
import data_product from '../Assets/data';
import { Items } from '../Items/Items'
import './Popular.css'
export const Popular = () => {
  return (
    <div className='popular'>
        <h1> Popular in Women </h1>
        <hr />        
        <div className="popular_prod">
            {
                data_product.map(item => {
                    return <Items key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })
            }
        </div>

    </div>
  )
}
