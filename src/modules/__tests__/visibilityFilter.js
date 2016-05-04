import test from 'ava';
import { setVisibilityFilter } from '../visibilityFilter';

test('setVisibilityFilter should create SET_VISIBILITY_FILTER action', t => {
  t.deepEqual(setVisibilityFilter('active'), {
    type: 'SET_VISIBILITY_FILTER',
    payload: { filter: 'active' },
  });
});
