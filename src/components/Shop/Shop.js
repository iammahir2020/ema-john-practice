import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";
import {
  addToDB,
  getStoredCart,
  removeFromDB,
} from "../../utilities/fakeDataBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import useCarts from "../../hooks/useCarts";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cartItems, setCartItems] = useCarts(products);

  const addToCart = (product) => {
    let newCartItems = [];
    const exists = cartItems.find((item) => item.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCartItems = [...cartItems, product];
    } else {
      const rest = cartItems.filter((item) => item.id !== product.id);
      exists.quantity = exists.quantity + 1;
      newCartItems = [...rest, exists];
    }
    setCartItems(newCartItems);
    addToDB(product.id);
  };
  const clearCart = () => {
    setCartItems([]);
    removeFromDB();
  };

  const navigate = useNavigate();

  const goToReviewPage = () => {
    navigate("/reviewOrder");
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="summary-container">
        <Cart cartItems={cartItems}>
          <button onClick={clearCart} className="summary-clear-btn">
            <p className="marginRight">Clear Cart</p>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
          <br />
          <button onClick={goToReviewPage} className="summary-review-btn">
            <p className="marginRight">Review Order</p>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
