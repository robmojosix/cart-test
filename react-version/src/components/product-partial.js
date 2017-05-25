import React from 'react';
import PropTypes from 'prop-types';
const { string, func, number } = PropTypes;

const ProductPartial = ({title, id, price, addToBasket}) => {

  return (
    <div>
      <h1>{title}</h1>
      <h2>{price}</h2>
      <button onClick={() => addToBasket(id)}>Add to cart</button>
    </div>
  )

}

ProductPartial.propTypes = {
  title: string.isRequired,
  addToBasket: func.isRequired,
  id: number.isRequired,
  price: number.isRequired
}

export default ProductPartial;
