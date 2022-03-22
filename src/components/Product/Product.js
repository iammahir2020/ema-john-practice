import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {addToCart,product} = props;
    const {name,seller,price,ratings,img} = product;
    return (
        <div className='product-card' >
            <img src={img} alt="" />
            <p>{seller}</p>
            <h4>{name}</h4>
            <h2>${price}</h2>
            <p><small>Rating: {ratings} Stars</small></p>
            <br />
            <br />
            <button onClick={()=>addToCart(product)} className='product-add-btn' >
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>

        </div>
    );
};

export default Product;