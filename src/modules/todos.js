import { Map, List } from 'immutable';
import { createAction, handleActions } from 'redux-actions';
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

let nextTodoId = 0;

export const addTodo = createAction(
  ADD_TODO,
  text => ({ id: nextTodoId++, text })
);

export const toggleTodo = createAction(TOGGLE_TODO);

export default handleActions({
  [ADD_TODO]: (state, { payload: { id, text } }) => state.push(Map({ id, text, completed: false })),
  [TOGGLE_TODO]: (state, { payload }) => {
    const index = state.findIndex(todo => todo.get('id') === payload);
    const todo = state.get(index);
    const nextTodo = todo.set('completed', ! todo.get('completed'));
    return state.set(index, nextTodo);
  },
}, List());
