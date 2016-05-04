import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';
import FilterLink from '../../../containers/Todo/FilterLink';

test('should render correctly', t => {
  const filterLinks = shallow(<Footer />).find(FilterLink);

  t.is(filterLinks.at(0).prop('filter'), 'SHOW_ALL');
  t.is(filterLinks.at(1).prop('filter'), 'SHOW_ACTIVE');
  t.is(filterLinks.at(2).prop('filter'), 'SHOW_COMPLETED');
});
