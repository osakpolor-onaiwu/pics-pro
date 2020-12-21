import React from 'react';
import ReactDOM from 'react-dom';
import './mycsslibrary.css';
import './app.css'
import 'font-awesome/css/font-awesome.min.css';
import 'materialize-css/dist/css/materialize.min.css'
import './main.css'
import App from './App';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import Reducer from './reducer/reducer'

const store=createStore(Reducer,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
