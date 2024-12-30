import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Items } from '../Components/Items/Items'
import OfferBanner from '../Components/OfferBanner/OfferBanner'
import './CSS/ShopCatrgorie.css'
export const ShopCategorie = (props) => {
          const {allProducts} = useContext(ShopContext);
  return (
    <div className='shop_category'>
      <OfferBanner showBanner={props.banner}/>
      <div className="shop_indexshort">
        <p>
          <span>Showing 1-12 </span> out of 36 products
        </p>
        <div className="shopcategory_sort">
          Sort by &#8595;
        </div>
      </div>
      <div className="shopcategory_products">
        {
          allProducts.map((item,i)=>{
            if(props.categorie === item.categorie){
              return <Items key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else
             return null;
          })
        }
      </div>
    </div>
  )
}
