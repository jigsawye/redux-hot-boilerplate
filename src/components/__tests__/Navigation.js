import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import Navigation from '../Navigation';

test('should display three Link in Navigation', t => {
  const nav = shallow(<Navigation />).children();

  t.is(nav.at(0).type(), Link);
  t.is(nav.at(1).type(), Link);
  t.is(nav.at(2).type(), Link);

  t.is(nav.at(0).prop('to'), '/');
  t.is(nav.at(1).prop('to'), '/todos');
  t.is(nav.at(2).prop('to'), '/about');

  t.is(nav.at(0).children().node, 'Home');
  t.is(nav.at(1).children().node, 'Todo');
  t.is(nav.at(2).children().node, 'About');
});
