import {Component} from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Restaurant from './components/Restaurant'
import LoginPage from './components/LoginPage'
import Cart from './components/Cart'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'
import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const filtredData = cartList.filter(each => each.dishId !== id)
    this.setState({cartList: filtredData})
  }

  addCartItem = item => {
    // console.log(item)
    this.setState(prev => ({cartList: [...prev.cartList, item]}))
  }

  incrementCartItemQuantity = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.map(each => {
      if (each.dishId === id) {
        const newQty = each.quantity + 1
        return {...each, quantity: newQty}
      }
      return each
    })
    this.setState({cartList: updatedCartList})
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.map(each => {
      if (each.dishId === id) {
        const newQty = each.quantity - 1
        return {...each, quantity: newQty}
      }
      return each
    })
    this.setState({cartList: updatedCartList})
  }

  render() {
    const {cartList} = this.state
    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeAllCartItems: this.removeAllCartItems,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path='/login' component={LoginPage} />
            <ProtectedRoute exact path='/' component={Restaurant} />
            <ProtectedRoute exact path='/cart' component={Cart} />
          </Switch>
        </BrowserRouter>
      </CartContext.Provider>
    )
  }
}
export default App
