import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakeDataBase";

const useCarts = (products) => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const storedCart = getStoredCart();
    // console.log(storedCart)
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
  }, [products]);
  return [cartItems, setCartItems];
};

export default useCarts;
