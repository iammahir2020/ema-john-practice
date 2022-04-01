import React from "react";

import "./Cart.css";

const Cart = (props) => {
  // console.log(props);
  const { cartItems } = props;

  let quantity = 0;
  let total = 0;
  let shippingCharge = 0;
  for (const item of cartItems) {
    quantity = quantity + item.quantity;
    total = total + item.price * item.quantity;
    shippingCharge = shippingCharge + item.shipping;
  }
  const tax = (total * 0.1).toFixed(2);
  const grandTotal = total + shippingCharge + parseFloat(tax);
  return (
    <div className="summary-body">
      <p className="summary-title">Order Summary</p>
      <p>
        <small>Selected Items: {quantity}</small>
      </p>
      <p>
        <small>Total Price: ${total}</small>
      </p>
      <p>
        <small>Total Shipping Charge: ${shippingCharge}</small>
      </p>
      <p>
        <small>Tax: ${tax}</small>
      </p>
      <p className="summary-total">Grand Total: ${grandTotal}</p>
      {props.children}
    </div>
  );
};

export default Cart;
