import test from 'ava';
import React from 'react';
import { spy } from 'sinon';
import { shallow } from 'enzyme';
import Link from '../Link';

const setup = (children, active = false) => {
  const onClick = spy();
  const link = shallow(
    <Link active={active} onClick={onClick}>{children}</Link>
  );

  return { onClick, link };
};

test('should render children element', t => {
  const { link } = setup('display children element');

  t.is(link.type(), 'a');
  t.is(link.text(), 'display children element');
});

test('should render span element when active is true', t => {
  const { link } = setup('active is true', true);

  t.is(link.type(), 'span');
  t.is(link.text(), 'active is true');
});

test('should handle onClick event', t => {
  const { onClick, link } = setup('Test', false);

  link.simulate('click', { preventDefault() {} });

  t.is(onClick.callCount, 1);
});
