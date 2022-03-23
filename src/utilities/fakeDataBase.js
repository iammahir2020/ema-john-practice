const addToDB = (addProductId)=>{
    let shoppingCart = {};
    const storedCart = getStoredCart();
    if(storedCart){
        shoppingCart = storedCart;
    }

    const quantity = shoppingCart[addProductId];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[addProductId] = newQuantity;
    }else{
        shoppingCart[addProductId] = 1;
    }

    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))

}

const clearCart = ()=>{
    localStorage.removeItem('shopping-cart');
}

const getStoredCart = ()=>{
    const storedCart = JSON.parse(localStorage.getItem('shopping-cart'))
    return storedCart;
}

export {
    addToDB,
    clearCart as removeFromDB,
    getStoredCart
}