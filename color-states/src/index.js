import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// import reducer from './reducer';
import {Provider} from 'react-redux';
import Store from './store';


// const store = Store();





ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>, document.getElementById('root'));
// registerServiceWorker();