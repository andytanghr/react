import {createStore, compose, applyMiddleware} from 'redux';
// import {createStore} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, reducer.initialState, composeEnhancers(applyMiddleware(thunk)));
// const store = createStore(reducer, reducer.initialState);

// var pastStates = [];

export default store;