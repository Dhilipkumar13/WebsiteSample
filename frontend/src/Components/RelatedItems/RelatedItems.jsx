import React from 'react'
import './RelatedItems.css'
import date_product from '../Assets/data'
import { Items } from '../Items/Items'

function RelatedItems() {
  return (
    <div className='relateditem'>
         <h1>Related Item</h1>
        <hr />
        <div className="related_item">
        {date_product.map((item,i)=>{
            return <Items key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}    
        </div>   
    </div>
  )
}

export default RelatedItems