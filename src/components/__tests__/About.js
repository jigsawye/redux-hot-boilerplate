import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import About from '../About';

test('should render correctly', t => {
  const about = shallow(<About />);

  t.is(about.type(), 'h1');
  t.is(about.text(), 'About');
});
