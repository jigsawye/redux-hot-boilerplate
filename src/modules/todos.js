import { createAction, handleActions } from 'redux-actions';
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

let nextTodoId = 0;

export const addTodo = createAction(
  ADD_TODO,
  text => ({ id: nextTodoId++, text })
);

export const toggleTodo = createAction(TOGGLE_TODO);

const todo = handleActions({
  [ADD_TODO]: (state, { payload: { id, text } }) => ({
    id, text, completed: false,
  }),
  [TOGGLE_TODO]: (state, { payload }) => {
    if (state.id !== payload) {
      return state;
    }

    return {
      ...state,
      completed: ! state.completed,
    };
  },
});

export default handleActions({
  [ADD_TODO]: (state, action) => ([
    ...state,
    todo(undefined, action),
  ]),
  [TOGGLE_TODO]: (state, action) => state.map(
    t => todo(t, action)
  ),
}, []);
