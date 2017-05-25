import React from 'react';
import PropTypes from 'prop-types';
import ProductPartial from './product-partial';

const { array, func } = PropTypes;

const ProductList = ({products, addToBasket}) => {

  const productPartials = products.map((data) => {
    return <ProductPartial key={data.id} id={data.id} title={data.title} price={data.price} addToBasket={addToBasket} />
  });

  return <div>{productPartials}</div>
}

ProductList.PropTypes = {
  products: array.isRequired,
  addToBasket: func.isRequired
}

export default ProductList;
