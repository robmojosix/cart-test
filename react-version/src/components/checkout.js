import React, { Component } from 'react';
import PropTypes from 'prop-types';

const { array, object } = PropTypes;

import ProductList from './product-list';
import Cart from './cart';

class Checkout extends Component {

  static propTypes = {
    cart: object,
    allProducts: array
  }

  constructor(props) {
    super(props);

    const { cart, allProducts } = props;

    this.state = {
      cart: {...cart},
      allProducts
    }

    this.addToBasket = this.addToBasket.bind(this);
    this.removeFromBasket = this.removeFromBasket.bind(this);
    this.lookUpProductById = this.lookUpProductById.bind(this);
    this.lookUpProductInCartById = this.lookUpProductInCartById.bind(this);
    this.buildCartItemById = this.buildCartItemById.bind(this);
    this.itemInBasket = this.itemInBasket.bind(this);
    this.increaseItemQuantity = this.increaseItemQuantity.bind(this);
    this.addNewItemToBasket = this.addNewItemToBasket.bind(this);
    this.calculateCartTotal = this.calculateCartTotal.bind(this);
  }

  calculateCartTotal() {
    let total = 0;
    this.state.cart.items.forEach(({quantity, price}) => {
      total += price * quantity;
    });

    this.setState({ cart: { ...this.state.cart, total } });
  }

  lookUpProductById(Id) {
    let foundItem;
    this.state.allProducts.forEach((item, index) => {
      if(item.id === Id) {
        foundItem = item;
      }
    });
    return foundItem;
  }

  lookUpProductInCartById(Id) {
    let inCart;
    this.state.cart.items.forEach((item) => {
      if(item.id === Id) {
        inCart = item;
      };
    });
    return inCart;
  }

  buildCartItemById(Id) {
    const item = this.lookUpProductById(Id);
    const newCartItem = Object.assign({}, item, { quantity: 1 });

    return newCartItem;
  }

  itemInBasket(Id) {
    let inBasket = false;
    this.state.cart.items.forEach((item) => {
      if(item.id === Id) {
        inBasket = true;
      }
    });

    return inBasket;
  }

  increaseItemQuantity(Id) {
    const cart = { ...this.state.cart };
    cart.items.map((item) => {
      if(item.id === Id) {
        item.quantity ++;
        return item;
      }
    });
    this.setState({ cart });
  }

  addNewItemToBasket(Id) {
    const cart = { ...this.state.cart };
    const newItem = this.buildCartItemById(Id);
    cart.items.push(newItem);
    this.setState({ cart });
  }

  addToBasket(Id) {
    if(this.itemInBasket(Id)) {
      this.increaseItemQuantity(Id);
    } else {
      this.addNewItemToBasket(Id);
    }
    this.calculateCartTotal();
  }

  removeFromBasket(Id) {
    const cart = { ...this.state.cart };
    cart.items = cart.items.filter((item) => {
      if(item.id === Id) {
        if(item.quantity > 1) {
          return item.quantity --;
        }
      } else {
        return item;
      }
    });

    this.setState({cart});
    this.calculateCartTotal();
  }

  render() {
    const {allProducts, cart} = this.state;

    return (
      <div>
        <ProductList products={allProducts} addToBasket={this.addToBasket} />
        <Cart items={cart.items} total={cart.total} removeFromBasket={this.removeFromBasket} />
      </div>
    )
  }
}

export default Checkout
