import React from 'react'
import './BreakCrums.css'
import { Link } from 'react-router';

export const BreakCrums = (props) => {
  const {product} = props;
  return (
    <div className='breakcrum'>
    <Link to='/'>  HOME </Link> &gt; <Link to='/shop' > SHOP</Link> &gt; <Link to={`/${product.categorie}s`}>{product.categorie}</Link> &gt;  {product.name} 
    </div>
  )
}
