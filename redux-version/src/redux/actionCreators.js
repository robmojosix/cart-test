import * as types from './actions';

export const addToBasket = (id) => ({
  type: types.ADD_TO_BASKET,
  id: id
});

export const calculateTotal = () => ({
  type: types.CALCULATE_TOTAL
});

export const removeFromBasket = (id) => ({
  type: types.REMOVE_FROM_BASKET,
  id: id
});
