import { handleActions } from 'redux-actions';

export default handleActions({
  SET_VISIBILITY_FILTER: (state, { payload }) => payload.filter,
}, 'SHOW_ALL');
