import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

test('should render correctly', t => {
  const home = shallow(<Home />);

  t.is(home.type(), 'h1');
  t.is(home.text(), 'Home');
});
