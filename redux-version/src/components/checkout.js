import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToBasket, removeFromBasket, calculateTotal } from '../redux/actionCreators';

const { array, object } = PropTypes;

import ProductList from './product-list';
import Cart from './cart';

const Checkout = (props) => {

  const addToBasketHelper = (Id) => {
    props.addToBasket(Id);
    props.calculateTotal();
  }

  const removeFromBasketHelper = (Id) => {
    props.removeFromBasket(Id);
    props.calculateTotal();
  }

  return (
    <div>
      <ProductList products={props.allProducts} addToBasket={addToBasketHelper} />
      <Cart items={props.cart.items} total={props.cart.total} removeFromBasket={removeFromBasketHelper} />
    </div>
  )
}

Checkout.propTypes = {
  cart: object,
  allProducts: array
}

const mapDispatchToProps = dispatch => ({
  addToBasket: (Id) => dispatch(addToBasket(Id)),
  removeFromBasket: (Id) => dispatch(removeFromBasket(Id)),
  calculateTotal: () => dispatch(calculateTotal())
});

const mapStateToProps = ({cart, allProducts}) => {
  return {
    cart,
    allProducts
  }
};

export { Checkout };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
