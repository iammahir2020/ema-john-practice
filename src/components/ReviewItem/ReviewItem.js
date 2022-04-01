import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ item, removeFromCart }) => {
  const { img, name, price, quantity, shipping } = item;

  return (
    <div className="item-card">
      <div>
        <img className="item-img" src={img} alt="" />
      </div>
      <div className="item-description">
        <div className="item-info">
          <h3>{name}</h3>
          <h2>
            ${price}
            <small>/unit</small>
          </h2>
          <h5>Shipping: {shipping}</h5>
          <h5>Quantity: {quantity}</h5>
        </div>
        <div className="info-button">
          <button onClick={() => removeFromCart(item)}>
            <FontAwesomeIcon className="button-icon" icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
