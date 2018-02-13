import * as types from './actions';
import initialState from '../fixtures/fixtures';

const calculateCartTotal = (cart) => {
  let total = 0;
  cart.items.forEach(({quantity, price}) => {
    total += price * quantity;
  });

  return total;
}

const removeFromBasket = (basket, Id) => {
  const updatedBasket = basket.filter((item) => {
    return item.id !== Id
  });

  return updatedBasket;
}

const buildCart = (allItems, id) => {
  let foundItem;

  allItems.forEach((item, index) => {
    if(item.id === id) {
      foundItem = item;
    }
  });

  return { ...foundItem, quantity: 1 };
}

const cart = (state=initialState.cart, action) => {
  switch(action.type) {
    case types.ADD_TO_BASKET:
      const item = buildCart(initialState.allProducts, action.id);
      return { ...state, items: [ ...state.items, item ] }
    case types.REMOVE_FROM_BASKET:
      const items = removeFromBasket(state.items, action.id);
      return { ...state, items: items }
    case types.CALCULATE_TOTAL:
      const total = calculateCartTotal(state);
      return { ...state, total: total }
    default:
      return state;
  }
}

export default cart;
