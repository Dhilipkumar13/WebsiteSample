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
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:Math.max(prev[itemId]-1,0)}))
    }

    
    const contextValue = {allProducts,addToCart,removeFromCart,cartItem};
        
    return  <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
}
export default ShopContextProvider;
