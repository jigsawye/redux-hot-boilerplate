import test from 'ava';
import visibilityFilter, { setVisibilityFilter } from '../visibilityFilter';

test('setVisibilityFilter should create SET_VISIBILITY_FILTER action', t => {
  t.deepEqual(setVisibilityFilter('active'), {
    type: 'SET_VISIBILITY_FILTER',
    payload: 'active',
  });
});

test('should handle initial state', t => {
  t.deepEqual(visibilityFilter(undefined, {}), 'SHOW_ALL');
});


test('should handle setVisibilityFilter', t => {
  t.deepEqual(
    visibilityFilter('SHOW_ALL', {
      type: 'SET_VISIBILITY_FILTER',
      payload: 'SHOW_ACTIVE',
    }),
    'SHOW_ACTIVE',
  );

  t.deepEqual(
    visibilityFilter('SHOW_ALL', {
      type: 'SET_VISIBILITY_FILTER',
      payload: 'SHOW_COMPLETED',
    }),
    'SHOW_COMPLETED',
  );
});
