import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      return (
        <ul>
          {cartList.map(eachCartItem => (
            <CartItem
              key={eachCartItem.dishId}
              cartItemDetails={eachCartItem}
            />
          ))}
        </ul>
      )
    }}
  </CartContext.Consumer>
)
export default CartListView
