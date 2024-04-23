import {Link} from 'react-router-dom'

const EmptyCartView = () => (
  <div className="cart-empty-view-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
      alt="cart empty"
    />
    <h1>Your Cart Is Empty</h1>

    <Link to="/">
      <button type="button">
        Order Now
      </button>
    </Link>
  </div>
)
export default EmptyCartView
