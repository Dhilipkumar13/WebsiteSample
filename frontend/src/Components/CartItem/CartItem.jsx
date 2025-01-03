import React, { useContext } from 'react'
import allProducts from '../Assets/allProducts'
import { ShopContext } from '../../Context/ShopContext'
export default function CartItem() {
    const {cartItem,removeFromCart} = useContext(ShopContext)
  return (
    <div>{allProducts.map(e=>{
        if(cartItem[e.id]>0)
        {
          return <div>
            <div className="cart-title">
              <img src={e.image} alt="" />
              <div>{e.name}</div>
              <div>{e.new_price}</div>
              <button>{cartItem[e.id]}</button>
              <div>{e.new_price*cartItem[e.id]}</div>
              <button onClick={()=>removeFromCart(e.id)}>-</button>
            </div>
          </div>
        }
      })}
    </div>
  )
}
