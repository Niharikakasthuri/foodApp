import CartContext from '../../context/CartContext'

import EmptyCartView from '../EmptyCartView'

import Navbar from '../Navbar'

import CartListView from '../CartListView'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const removeAllItems = () => {
        removeAllCartItems()
      }
      return (
        <div>
          <Navbar />
          <hr />
          <div>
            {cartList.length < 1 ? (
              <EmptyCartView />
            ) : (
              <div>
                <h1>My Cart</h1>
                <button type="button" onClick={removeAllItems}>
                  Remove All
                </button>
                <CartListView />
              </div>
            )}
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
