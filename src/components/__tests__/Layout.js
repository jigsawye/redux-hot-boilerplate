import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../Layout';
import Navigation from '../Navigation';

const setup = () => shallow(
  <Layout>
    <div>children element</div>
  </Layout>
).children();

test('should render correctly', t => {
  const layout = setup();

  t.is(layout.at(1).type(), 'div');
  t.is(layout.at(1).text(), 'children element');
});

test('should render Navigation as first child element', t => {
  const layout = setup();

  t.is(layout.at(0).type(), Navigation);
});
