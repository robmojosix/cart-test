import React from 'react';
import { shallow } from 'enzyme';
import cloneDeep from 'lodash.clonedeep';

import ProductList from './product-list';
import Cart from './cart';
import Checkout from './checkout';

import data from '../fixtures/fixtures';
const { cart, allProducts } = data;

describe('<Checkout />', () => {

  let component;

  beforeEach(() => {
    component = shallow(<Checkout cart={cloneDeep(cart)} allProducts={cloneDeep(allProducts)} />);
  });

  it('Renders a ProductList', () => {
    expect(component.find(ProductList).length).toEqual(1);
  });

  it('Renders a Cart', () => {
    expect(component.find(Cart).length).toEqual(1);
  });

  describe('Add to basket', () => {

    describe('When a product exists in the basket', () => {

      beforeEach(() => {
        component.instance().addToBasket(3);
      });

      it('Increases the quantity of the cart item', () => {
        expect(component.state().cart.items[0].quantity).toEqual(1);
        component.instance().addToBasket(3);
        expect(component.state().cart.items.length).toEqual(1);
        expect(component.state().cart.items[0].quantity).toEqual(2);
        expect(component.state().cart.total).toEqual(24);
      });
    });

    describe('When a product does not exist in the basket', () => {
      it('Adds a new product to the cart', () => {
        expect(component.state().cart.items.length).toEqual(0);
        component.instance().addToBasket(3);
        expect(component.state().cart.items.length).toEqual(1);
        expect(component.state().cart.total).toEqual(12);
      });
    });

    it('Removes a product from the cart', () => {
      component.instance().addToBasket(3);
      expect(component.state().cart.items.length).toEqual(1);
      component.instance().removeFromBasket(3);
      expect(component.state().cart.items.length).toEqual(0);
      expect(component.state().cart.total).toEqual(0);
    });

  });
});
