const addToDB = (addProductId) => {
  let shoppingCart = {};
  const storedCart = getStoredCart();
  if (storedCart) {
    shoppingCart = storedCart;
  }

  const quantity = shoppingCart[addProductId];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[addProductId] = newQuantity;
  } else {
    shoppingCart[addProductId] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const clearCart = () => {
  localStorage.removeItem("shopping-cart");
};

const getStoredCart = () => {
  const storedCart = JSON.parse(localStorage.getItem("shopping-cart"));
  return storedCart;
};

const removeItem = (removeProductId) => {
  const storedCart = getStoredCart();
  delete storedCart[removeProductId];
  localStorage.setItem("shopping-cart", JSON.stringify(storedCart));
  return storedCart;
};

export { addToDB, removeItem, clearCart as removeFromDB, getStoredCart };
