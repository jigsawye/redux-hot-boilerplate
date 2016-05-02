import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { apiMiddleware } from 'redux-api-middleware';
import reducer from '../modules/reducer';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const router = routerMiddleware(browserHistory);

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(apiMiddleware, router, logger)
  );

  if (module.hot) {
    module.hot.accept('../modules/reducer', () => {
      const nextRootReducer = require('../modules/reducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
