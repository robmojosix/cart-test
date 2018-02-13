import React from 'react';
import { shallow } from 'enzyme';
import Cart from './cart';

const cartItems = [
  {id:1, title: 'Product 1', price: 5, quantity: 1},
  {id:2, title: 'Product 2', price: 10, quantity: 2},
  {id:3, title: 'Product 3', price: 12, quantity: 1}
]

const cartTotal = 37;

describe('Cart component', () => {

  let component;

  beforeEach(() => {
    component = shallow(<Cart items={cartItems} total={cartTotal}/>);
  });

  it('Renders correct number of cart items', () => {
    expect(component.find('li').length).toEqual(3);
  });

  it('Renders correct cart total', () => {
    expect(component.find('h2').text()).toEqual(cartTotal.toString());
  });

});
