import React from 'react'
import './ProductsDisplay.css'
import redstar from '../../img/red_star.png'
import star from '../../img/star.png'
function ProductsDisplay(props) {
  const {product} = props
  return (
    <div className='productdisplay'>
      <div className="productdisleft">
          <div className="productdis_list">
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
          </div>
          <div className="productdis_img">
              <img src={product.image} alt="" />
          </div>
      </div>
      <div className="productdisright">
          <h1>{product.name}</h1>
          <div className="productdis_rate">
            <div className="productdis_star">
              <img src={redstar} alt="" />
              <img src={redstar} alt="" />
              <img src={redstar} alt="" />
              <img src={redstar} alt="" />
              <img src={star} alt="" />
            </div>
            <div className="product_rate">
              (210)
            </div>
          </div>
          <div className="product_price">
            <div className="prooduct_oldprice">${product.old_price}</div>
            <div className="product_newprice">${product.new_price}</div>
          </div>
          <div className="product_description">
          React is a free, open-source JavaScript library for building user interfaces for web and mobile apps
          </div>
          <div className="productdis_size">
            <h1>Select Size</h1>
            <div className="productdis_right_size">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
            <button>ADD TO CART</button>
          </div>
      </div>

    </div>
  )
}

export default ProductsDisplay