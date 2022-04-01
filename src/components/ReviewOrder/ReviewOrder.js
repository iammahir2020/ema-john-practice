import React from "react";
import useCarts from "../../hooks/useCarts";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import "./ReviewOrder.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeItem } from "../../utilities/fakeDataBase";

const ReviewOrder = () => {
  const [products, setProducts] = useProducts();
  const [cartItems, setCartItems] = useCarts(products);

  const navigate = useNavigate();
  const goToShoppage = () => {
    navigate("/shop");
  };
  const checkOut = () => {
    alert("Thank you for shopping with us");
  };

  const removeFromCart = (removeProduct) => {
    const exist = cartItems.find((item) => item.id === removeProduct.id);
    if (exist) {
      const storedCart = removeItem(removeProduct.id);
      console.log(storedCart);
      const cartProducts = [];
      for (const id in storedCart) {
        const foundproduct = products.find((product) => product.id === id);
        if (foundproduct) {
          foundproduct.quantity = storedCart[id];
          cartProducts.push(foundproduct);
        }
      }
      // console.log(cartProducts)
      setCartItems(cartProducts);
    }
  };

  return (
    <div className="review-container">
      <div className="order-review-container">
        {cartItems.length === 0 && (
          <div className="empty-message">
            <h1>Cart is Empty!!</h1>
            <p>Please add items to cart.</p>
          </div>
        )}
        {cartItems.map((item) => (
          <ReviewItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="summary-container">
        <Cart cartItems={cartItems}>
          <br />
          <br />
          <button onClick={checkOut} className="summary-review-btn">
            <p className="marginRight">Check Out</p>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <br />
          <button onClick={goToShoppage} className="summary-review-btn">
            <FontAwesomeIcon className="marginRight" icon={faArrowLeft} />
            <p>Continue Shopping</p>
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default ReviewOrder;
