import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  routing,
  todos,
  visibilityFilter,
});
