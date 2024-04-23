import CartContext from '../../context/CartContext'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props
      const {
        dishId,
        dishName,
        dishImage,
        dishCalories,
        dishCurrency,
        dishPrice,
        quantity,
      } = cartItemDetails

      const onRemoveCartItem = () => {
        removeCartItem(dishId)
      }
      // TODO: Update the functionality to increment and decrement quantity of the cart item
      const onIncrementQuantity = () => {
        incrementCartItemQuantity(dishId)
      }
      const onDecrementQuantity = () => {
        if (quantity < 2) {
          removeCartItem(dishId)
        } else {
          decrementCartItemQuantity(dishId)
        }
      }
      return (
        <li>
          <img className="menu-image" src={dishImage} alt={dishName} />
          <div>
            <div>
              <h1>{dishName}</h1>
              <p>{dishCalories} Calories</p>
            </div>
            <div>
              {/* eslint-disable-next-line */}
              <button
                onClick={onDecrementQuantity}
                type="button"
                data-testid="minus"
              >
                -
              </button>
              <p>{quantity}</p>
              {/* eslint-disable-next-line */}
              <button
                onClick={onIncrementQuantity}
                type="button"
                data-testid="plus"
              >
                +
              </button>
            </div>
            <div>
              <p>
                {dishCurrency} {dishPrice * quantity}/-
              </p>
              <button
                type="button"
                data-testid="remove"
                onClick={onRemoveCartItem}
              >
                Remove
              </button>
            </div>
          </div>
          {/* eslint-disable-next-line */}
        </li>
      )
    }}
  </CartContext.Consumer>
)
export default CartItem
