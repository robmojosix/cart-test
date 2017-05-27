import React from 'react';
import { shallow, mount } from 'enzyme';
import cloneDeep from 'lodash.clonedeep';

import ProductList from './product-list';
import Cart from './cart';
import { Checkout } from './checkout';

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

  describe('Items in cart', () => {

    const filledCart = {
      items: [
        {id:1, title:"test1", "price": 5, "quantity":1},
        {id:2, title:"test2", "price": 10, "quantity":1},
        {id:3, title:"test3", "price": 15, "quantity":1},
      ],
      total: 30
    }

    beforeEach(() => {
      component = mount(<Checkout cart={cloneDeep(filledCart)} allProducts={cloneDeep(allProducts)} />);
    })

    it('renders correct items in cart', () => {
      expect(component.find('li').length).toEqual(3);
    });

    it('renders correct total', () => {
      expect(component.find('.total').text()).toEqual(filledCart.total.toString());
    });
  });
});
