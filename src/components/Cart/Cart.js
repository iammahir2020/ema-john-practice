import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = (props) => {
    const {cartItems,clearCart} = props;
    let quantity = 0;
    let total = 0;
    let shippingCharge = 0;
    for(const item of cartItems){
        quantity = quantity + item.quantity;
        total = total + (item.price * item.quantity);
        shippingCharge = shippingCharge + item.shipping;
    }
    const tax = (total*.10).toFixed(2);
    const grandTotal = total+shippingCharge+parseFloat(tax);
    return (
        <div className='summary-body' >
            <p className='summary-title' >Order Summary</p>
            <p><small>Selected Items: {quantity}</small></p>
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
    );
};

export default Cart;