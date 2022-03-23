import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDB,getStoredCart,removeFromDB } from '../../utilities/fakeDataBase';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartItems,setCartItems] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    useEffect(()=>{
        const storedCart = getStoredCart();
        // console.log(storedCart)
        const cartProducts = [];
        for(const id in storedCart){
            const foundproduct = products.find(product=>product.id===id);
            if(foundproduct){
                foundproduct.quantity = storedCart[id];
                cartProducts.push(foundproduct);
            }
        }
        // console.log(cartProducts)
        setCartItems(cartProducts)
    },[products])
    const addToCart =(product) =>{
        let newCartItems =[];
        const exists = cartItems.find(item=>item.id===product.id);
        if(!exists){
            product.quantity = 1;
            newCartItems = [...cartItems,product];
        }else{
            const rest = cartItems.filter(item=>item.id!== product.id);
            exists.quantity = exists.quantity + 1;
            newCartItems = [...rest,exists];
        }
        setCartItems(newCartItems)
        addToDB(product.id)
    }
    const clearCart = ()=>{
        setCartItems([])
        removeFromDB()
    }
    return (
        <div className='shop-container' >
            <div className='products-container' >
                {
                    products.map(product=><Product
                    key = {product.id}
                    product = {product}
                    addToCart = {addToCart}
                    ></Product>)
                }
            </div>
            <div className='summary-container' >
                <Cart 
                cartItems = {cartItems}
                clearCart = {clearCart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;