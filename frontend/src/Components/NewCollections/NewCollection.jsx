import React from 'react'
import './NewCollection.css'
import new_Collection from '../Assets/newCollection'
import { Items } from '../Items/Items'

export const NewCollection = () => {
  return (
    <div className='newcollection'>
        <h2>New Collection</h2>
        <hr />
        <div className="newcollection_item">
                {
            new_Collection.map((item,i)=>{
            return <Items key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
         })
        }
        </div>
    </div>
  )
}
