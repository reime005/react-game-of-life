/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import createReducer from './reducers';

export default function configureStore(initialState = {}) {
  const middlewares = [];

  const enhancers = [applyMiddleware(...middlewares)];
      
  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers)
  );

  store.asyncReducers = {}; // Async reducer registry

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      require('./reducers/').then((reducerModule) => {
        const createReducers = reducerModule.default;
        const nextReducers = createReducers(store.asyncReducers);

        store.replaceReducer(nextReducers);
      });
    });
  }

  return store;
}
