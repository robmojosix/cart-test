import ProductPartial from './product-partial';
import React from 'react';
import { shallow, render } from 'enzyme'

const titleText = 'title 1';

describe('Product partial component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ProductPartial title={titleText}/>);
  });

  it('Renders correct title', () => {
    expect(component.find('h1').text()).toEqual(titleText);
  });

  it('Renders add to basket button', () => {
    expect(component.find('button').exists()).toEqual(true);
  });

});
