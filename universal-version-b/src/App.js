import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';
import Checkout from './components/checkout';

// Grab the state from a global variable injected into the server-generated HTML
// const preloadedState = window.__PRELOADED_STATE__
//
// // Allow the passed state to be garbage-collected
// delete window.__PRELOADED_STATE__
//
// // Create Redux store with initial state
// const store = createStore(Reducers, preloadedState)

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
