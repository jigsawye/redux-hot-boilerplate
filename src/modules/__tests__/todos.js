import test from 'ava';
import todos, * as actions from '../todos';

test('addTodo should create ADD_TODO action', t => {
  t.deepEqual(actions.addTodo('Use Redux'), {
    type: 'ADD_TODO',
    payload: { id: 0, text: 'Use Redux' },
  });
});

test('toggleTodo should create TOGGLE_TODO action', t => {
  t.deepEqual(actions.toggleTodo(1), {
    type: 'TOGGLE_TODO',
    payload: 1,
  });
});

test('should handle initial state', t => {
  t.deepEqual(todos(undefined, {}), []);
});

test('should handle ADD_TODO', t => {
  t.deepEqual(
    todos([], {
      type: 'ADD_TODO',
      payload: {
        text: 'Run the tests',
        id: 0,
      },
    }),
    [{
      text: 'Run the tests',
      completed: false,
      id: 0,
    }]
  );

  t.deepEqual(
    todos([
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
      },
    ], {
      type: 'ADD_TODO',
      payload: {
        text: 'Use Redux',
        id: 1,
      },
    }),
    [
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1,
      },
    ]
  );

  t.deepEqual(
    todos([
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1,
      },
    ], {
      type: 'ADD_TODO',
      payload: {
        text: 'Fix the tests',
        id: 2,
      },
    }),
    [
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1,
      }, {
        text: 'Fix the tests',
        completed: false,
        id: 2,
      },
    ]
  );
});

test('should handle TOGGLE_TODO', t => {
  t.deepEqual(
    todos([
      {
        text: 'Run the tests',
        completed: false,
        id: 1,
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
    ], {
      type: 'TOGGLE_TODO',
      payload: 1,
    }),
    [
      {
        text: 'Run the tests',
        completed: true,
        id: 1,
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
    ]
  );
});
