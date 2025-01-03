import React, { useContext } from 'react'
import allProducts from '../Components/Assets/allProducts'
import { ShopContext } from '../Context/ShopContext'
import './CSS/Cart.css'

export const Cart = () => {
  const {cartItem,removeFromCart,getTotalCartAmount} = useContext(ShopContext)
  return (
    <div className='cart'>
      <div className="cart-title">
        <div>Product</div>
        <div>Title</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
        <div>Remove</div>
      </div>
      <hr />
      {allProducts.map(e=>{
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
      <div className="cartitem-down">
        <div className="cartitem-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cartitem-subtotal">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cartitem-ship-fee">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <div className="cartitem-total">
              <p>Total</p>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitem-promocode">
            <p>It you have promo code, Enter it here </p>
            <div className="cartitem-promobox">
              <input type="text" />
              <button>
                Submit
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}
