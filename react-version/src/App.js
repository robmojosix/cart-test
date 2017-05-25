import React, { Component } from 'react';
import './App.css';
import Checkout from './components/checkout';

import data from './fixtures/fixtures';
const { cart, allProducts } = data;

class App extends Component {

  render() {
    return (
      <div className="App">
        <Checkout cart={cart} allProducts={allProducts}/>
      </div>
    );
  }
}

export default App;
