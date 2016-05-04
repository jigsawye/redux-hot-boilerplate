import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import AddTodo from '../../../containers/Todo/AddTodo';
import VisibleTodoList from '../../../containers/Todo/VisibleTodoList';
import Footer from '../Footer';

test('should render correctly', t => {
  const app = shallow(<App />).children();

  t.is(app.at(0).type(), AddTodo);
  t.is(app.at(1).type(), VisibleTodoList);
  t.is(app.at(2).type(), Footer);
});
