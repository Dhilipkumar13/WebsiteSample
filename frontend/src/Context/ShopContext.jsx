import React, { createContext, useState } from 'react'
import allProducts from '../Components/Assets/allProducts';

export const ShopContext = createContext('null');

const getDefaultCart = () => {
    let cart = {};
    for(let index=0 ; index < allProducts.length ; index++)
    {
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItem,setCartItem] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItem((prev)=>({...prev,[itemId]:1+prev[itemId]}))
        console.log(cartItem)
    }

    const removeFromCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:Math.max(prev[itemId]-1,0)}))
    }

    const getCartCount = () =>{
        let count=0;
        for(const item in cartItem)
        {
            if( cartItem[item]>0)
                count++
        }
        return count;
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for( const item in cartItem)
        {
            if( cartItem[item] > 0 )
            {
                let itemInfo = allProducts.find((product)=>(product.id===Number(item)))
                totalAmount+=itemInfo.new_price*cartItem[item]
            }
        }
        return totalAmount;
    }
    
    const contextValue = {allProducts,addToCart,removeFromCart,cartItem,getTotalCartAmount,getCartCount};
        
    return  <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
}
export default ShopContextProvider;
