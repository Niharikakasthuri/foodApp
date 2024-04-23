import React from 'react'
const CartContext = React.createContext({
  cartList: [],
  removeAllCartItems: () => {},
  addCartItems: () => {},
  removeCartItems: () => {},
  increaseCartItemQuantity: () => {},
  decreaseCartItemQuantity: () => {},
})
export default CartContext
