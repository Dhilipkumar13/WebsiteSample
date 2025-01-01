import React from 'react'
import './ProductsDisplay.css'
import start from '../../img/star.png'
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
          <div className="productdis_star">
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={start} alt="" />
          </div>
          <div className="product_rate">
            (210)
          </div>
      </div>

    </div>
  )
}

export default ProductsDisplay