import { createContext, useEffect, useState } from 'react';




export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart : () => {},
  cartCount : () => {},
  setCartCount : () => {},
  cartTotal: 0,
  clearItemFromCart : () => {},
  removeCartItem : () => {},
  addItemToCart : () => {}
});


const addCartItem = (product, items) => {
   var cartProduct = items.find(item => item.id === product.id);
   if(cartProduct == null){
    var newItem = {...product,quantity:1}
    return [newItem,...items]
   }
   
   return items.map((item) =>
      item.id == cartProduct.id ? {...cartProduct, quantity:cartProduct.quantity + 1}
      : {...item}
   )
}



const removeItemFromCart = (cartItems,cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
      );
    
      // check if quantity is equal to 1, if it is remove that item from the cart
      if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
      }
    
      // return back cartitems with matching cart item with reduced quantity
      return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
  }


export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems,setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(()=>{
      var newCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity,0)
      setCartCount(newCount);

      var newTotal = cartItems.reduce((total,cartItem) => total + (cartItem.quantity * cartItem.price),0)
      setCartTotal(newTotal)
  },[cartItems])

  

  const addItemToCart = (product) => {
    setCartItems(addCartItem(product,cartItems))
  }

  const clearItemFromCart = (cartItem) => {
     var newItems = cartItems.filter(item => item.id !== cartItem.id);
     setCartItems([...newItems])
  }


  const removeCartItem = (cartItem) => {
      setCartItems(removeItemFromCart(cartItems,cartItem))
  }

 
  const value = { 
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    setCartCount,
    cartTotal,
    clearItemFromCart,
    removeCartItem,
    };

  return (
  <CartContext.Provider value={value}>
    {children}
  </CartContext.Provider>
  );
};