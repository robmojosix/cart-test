import { combineReducers } from 'redux';

import cart from './cartReducer';
import allProducts from './allProductsReducer';

export default combineReducers({
  cart,
  allProducts
})
