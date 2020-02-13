import React, { Component } from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './redux/reducers/'
import Navigation from './components/Navigation';
import './style.css';

const store = createStore(allReducers);

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Navigation/>          
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
