import rootReducer from '../reducers';
import cartReducer from '../cartReducer';
import allProductsReducer from '../allProductsReducer';

import { addToBasket, removeFromBasket, calculateTotal } from '../actionCreators';

import initialState from '../../fixtures/fixtures';

describe('allProductsReducer', () => {
  it('returns initial allProducts state', () => {
    expect(allProductsReducer(undefined, {})).toEqual(initialState.allProducts);
  });
});

describe('cartReducer', () => {
  it('returns initial cart state', () => {
    expect(cartReducer(undefined, {})).toEqual(initialState.cart);
  });

  const id = 3;
  // should be imported as a create cart item module
  // the same goes for where it's used in cartReducer
  const total = 12;
  const item = {"id": 3, "price": 12, "quantity": 1, "title": "Product 3"};
  const cartWithItem = {"items": [item], "total": 0};
  const cartwithOutItem = {"items": [], "total": 0};

  it('it adds to basket', () => {
    expect(cartReducer(undefined, addToBasket(3))).toEqual(cartWithItem);
  });

  it('it removes from basket', () => {
    expect(cartReducer(cartWithItem, removeFromBasket(3))).toEqual(cartwithOutItem);
  });

  it('it calculates total', () => {
    expect(cartReducer(cartWithItem, calculateTotal()).total).toEqual(total);
  });
});

describe('rootReducer', () => {
  it('returns initial state', () => {
    expect(rootReducer(undefined, {})).toEqual(initialState);
  });
});
