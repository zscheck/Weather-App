// import { createStore, applyMiddleware, compose } from 'redux';
// import { combineReducers } from 'redux';
// import promiseMiddleware from 'redux-promise-middleware';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compos;
// const rootStore = createStore(rootReducer, composeEnhancers(applyMiddleware(promiseMiddleware())));

// export default rootStore;

import { createStore } from 'redux';
import rootReducer from './rootReducer';

const rootStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default rootStore;
