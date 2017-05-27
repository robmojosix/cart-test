import * as actions from '../actionCreators';
import * as types from '../actions';

describe('action creators', () => {

  it('creates the addToBasket action', () => {
    const id = 4
    const expectedAction = {
      type: types.ADD_TO_BASKET,
      id
    }
    expect(actions.addToBasket(id)).toEqual(expectedAction);
  });

  it('creates the removeFromBasket action', () => {
    const id = 4
    const expectedAction = {
      type: types.REMOVE_FROM_BASKET,
      id
    }
    expect(actions.removeFromBasket(id)).toEqual(expectedAction);
  });

  it('creates the calculateTotal action', () => {
    const expectedAction = {
      type: types.CALCULATE_TOTAL,
    }
    expect(actions.calculateTotal()).toEqual(expectedAction);
  });

});
