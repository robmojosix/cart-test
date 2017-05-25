import React from 'react';
import { array, number, func } from 'prop-types'

const Cart = ({items, total, removeFromBasket}) => {

  const cartItems = items.map((item, i) => {
    return <li key={i}>{item.title} - {item.price} x{item.quantity} <button onClick={ () => removeFromBasket(item.id)}> x </button></li>
  });

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems}
      </ul>
      <h2>{total}</h2>
    </div>
  )
}

Cart.propTypes = {
  items: array,
  total: number,
  removeFromBasket: func
}

export default Cart;
