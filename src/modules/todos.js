import { createAction, handleActions } from 'redux-actions';

let nextTodoId = 0;

export const addTodo = createAction(
  'ADD_TODO',
  text => ({ id: nextTodoId++, text })
);

export const setVisibilityFilter = createAction(
  'SET_VISIBILITY_FILTER',
  filter => ({ filter })
);

export const toggleTodo = createAction(
  'TOGGLE_TODO',
  id => ({ id })
);

const todo = handleActions({
  ADD_TODO: (state, { payload: { id, text } }) => ({
    id, text, completed: false,
  }),
  TOGGLE_TODO: (state, { payload: { id } }) => {
    if (state.id !== id) {
      return state;
    }

    return {
      ...state,
      completed: ! state.completed,
    };
  },
});

export default handleActions({
  ADD_TODO: (state, action) => ([
    ...state,
    todo(undefined, action),
  ]),
  TOGGLE_TODO: (state, action) => state.map(
    t => todo(t, action)
  ),
}, []);
