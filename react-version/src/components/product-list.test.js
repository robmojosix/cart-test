import React from 'react';
import { shallow } from 'enzyme';
import ProductList from './product-list';

const productListData = [
  {id:1, title: 'Product1'},
  {id:2, title: 'Product2'},
  {id:3, title: 'Product3'}
]

describe('<ProductList />', () => {
  let component;
    console.log('test');

  beforeEach(() => {
    component = shallow(<ProductList products={productListData} />);
  });

  it('Renders product partials', () => {
    expect(component.children().length).toEqual(productListData.length);
  });

});
