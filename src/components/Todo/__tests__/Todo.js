import test from 'ava';
import React from 'react';
import { spy } from 'sinon';
import { shallow } from 'enzyme';
import Todo from '../Todo';

const setup = (text = 'todo', completed = false) => {
  const onClick = spy();
  const todo = shallow(
    <Todo completed={completed} onClick={onClick} text={text} />
  );

  return { onClick, todo };
};

test('should render li element', t => {
  const { todo } = setup('todo test');

  t.is(todo.type(), 'li');
  t.is(todo.text(), 'todo test');
  t.deepEqual(todo.prop('style'), { textDecoration: 'none' });
});

test('should have specified style when completed is true', t => {
  const { todo } = setup('completed is true', true);

  t.deepEqual(todo.prop('style'), { textDecoration: 'line-through' });
  t.is(todo.text(), 'completed is true');
});

test('should handle onClick event and change className', t => {
  const { onClick, todo } = setup();

  todo.simulate('click', { preventDefault() {} });

  t.is(onClick.callCount, 1);
});
