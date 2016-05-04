import { createAction, handleActions } from 'redux-actions';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const setVisibilityFilter = createAction(
  SET_VISIBILITY_FILTER,
  filter => ({ filter })
);

export default handleActions({
  SET_VISIBILITY_FILTER: (state, { payload }) => payload.filter,
}, 'SHOW_ALL');
