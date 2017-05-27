import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';
import Checkout from './components/checkout';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Checkout />
        </Provider>
      </div>
    );
  }
}

export default App;
