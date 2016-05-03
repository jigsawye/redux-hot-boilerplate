import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { apiMiddleware } from 'redux-api-middleware';
import reducer from '../modules/reducer';

const router = routerMiddleware(browserHistory);

export default initialState => createStore(
  reducer,
  initialState,
  applyMiddleware(apiMiddleware, router)
);
