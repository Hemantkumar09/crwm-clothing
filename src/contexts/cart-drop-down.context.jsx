import { useState, createContext, useEffect } from "react";
//import React from 'react';

const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
    const existingCartItems = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    //If found, increment quantity
    if(existingCartItems){
       return cartItems.map((cartItem) => 
        cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
       );
    }

    //return new array with modified cartItems/new cartItems
    return [...cartItems, {...productToAdd, quantity: 1}]; 
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount  = cartItems.reduce(
            (total,cartItems) => total + cartItems.quantity, 0)
            setCartCount(newCartCount)
    }, [cartItems])
    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount}; 
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>      
};