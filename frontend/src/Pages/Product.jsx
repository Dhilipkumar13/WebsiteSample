import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router';
import { BreakCrums } from '../Components/Breakcrums/BreakCrums';
import ProductsDisplay from '../Components/ProductsDisplay/ProductsDisplay'

export const Product = () => {
  const {allProducts} = useContext(ShopContext);
  const {productId} = useParams();
  //console.log(productId)
  const product = allProducts.find((p)=> p.id === Number(productId));
  return (
    <div>
      <BreakCrums product={product} />
      <ProductsDisplay product={product}/>
    </div>
  )
}
