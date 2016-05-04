import test from 'ava';
import React from 'react';
import { spy } from 'sinon';
import { shallow } from 'enzyme';
import List from '../List';

const setup = () => {
  const onTodoClick = spy();
  const todos = [
    { id: 0, completed: false, text: 'first todo' },
    { id: 1, completed: false, text: 'second todo' },
    { id: 2, completed: false, text: 'third todo' },
  ];

  const wrapper = shallow(<List onTodoClick={onTodoClick} todos={todos} />);

  return {
    todos: wrapper.children(),
    onTodoClick,
  };
};

test('should render three todos', t => {
  const { todos } = setup();

  t.is(todos.at(0).prop('text'), 'first todo');
  t.is(todos.at(1).prop('text'), 'second todo');
  t.is(todos.at(2).prop('text'), 'third todo');
});

test('should handle onTodoClick event', t => {
  const { todos, onTodoClick } = setup();

  todos.at(0).simulate('click');
  t.true(onTodoClick.calledWith(0));

  todos.at(1).simulate('click');
  t.true(onTodoClick.calledWith(1));

  todos.at(2).simulate('click');
  t.true(onTodoClick.calledWith(2));
});
