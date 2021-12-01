import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'redux/reducers';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
// Stylesheets
import './UI/vendors/aileron/aileron.css';
import 'UI/vendors/icomoon/style.css';

const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
