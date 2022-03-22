import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartItems,setCartItems] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const addToCart =(product) =>{
        const newCartItems = [...cartItems,product];
        setCartItems(newCartItems)
        console.log(newCartItems)
    }
    const clearCart = ()=>{
        setCartItems([])
    }
    const reducer = (previous, current)=>{
        return previous + current.price;
    }
    const total  = cartItems.reduce(reducer,0);
    let shippingCharge;
    if(total===0){
        shippingCharge=0;
    }else if(total>0 && total<1000){
        shippingCharge=30;
    }else if(total>1000 && total<5000){
        shippingCharge=20;
    }else{
        shippingCharge=10;
    }
    const tax = ((total+shippingCharge)*.15).toFixed(2);
    const grandTotal = total+shippingCharge+parseFloat(tax);
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
                <p className='summary-title' >Order Summary</p>
                <p><small>Selected Items: {cartItems.length}</small></p>
                <p><small>Total Price: ${total}</small></p>
                <p><small>Total Shipping Charge: ${shippingCharge}</small></p>
                <p><small>Tax: ${tax}</small></p>
                <p className='summary-total' >Grand Total: ${grandTotal}</p>
                <button onClick={clearCart} className='summary-clear-btn' >
                    <p className='marginRight' >Clear Cart</p>
                    <FontAwesomeIcon icon={faTrashCan}/>
                </button><br />
                <button className='summary-review-btn' >
                    <p className='marginRight' >Review Order</p>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </button>
            </div>
        </div>
    );
};

export default Shop;