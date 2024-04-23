import {useState, useContext} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'
const DishItem = ({dishDetails}) => {
  const {
    dishId,
    dishName,
    dishPrice,
    dishImage,
    dishCurrency,
    dishCalories,
    dishDescription,
    dishAvailability,
    dishType,
    addonCat,
  } = dishDetails

  const [quantity, setQuantity] = useState(0)
  const {addCartItem} = useContext(CartContext)

  const onIncreaseQuantity = () => setQuantity(prevState => prevState + 1)

  const onDecreaseQuantity = () =>
    setQuantity(prevState => (prevState > 0 ? prevState - 1 : 0))

  const onAddItemToCart = () => addCartItem({...dishDetails, quantity})

  const renderControllerButton = () => (
    <div>
      <button type="button" onClick={onDecreaseQuantity}>
        -
      </button>
      <p>{quantity}</p>
      <button type="button" onClick={onIncreaseQuantity}>
        +
      </button>
    </div>
  )

  return (
    <li className="list">
      <div className="card-container">
        <h1 className="align">{dishName}</h1>
        <p className="align">
          {dishCurrency} {dishPrice}
        </p>
        <p className="align">{dishDescription}</p>
        {dishAvailability && renderControllerButton()}
        {!dishAvailability && (
          <p className="not-availability align">Not available</p>
        )}
        {addonCat.length !== 0 && (
          <p className="menu-availability align">Customizations available</p>
        )}

        {quantity > 0 && (
          <button className="button" onClick={onAddItemToCart}>
            ADD TO CART
          </button>
        )}

        <p className="cal align">{dishCalories} calories</p>
        <img className="menu-image" alt={dishName} src={dishImage} />
      </div>
    </li>
  )
}
export default DishItem
