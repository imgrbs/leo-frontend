import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import match from './match';
import ranking from './matching/ranking';
import user from './user';

const logger = createLogger();

const middleware = [thunk, logger];

export const reducers = combineReducers({
  match, ranking, user,
});

function initialStore(initialState = {}) {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));
}

export default initialStore;
