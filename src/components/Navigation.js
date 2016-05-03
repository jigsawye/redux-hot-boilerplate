import React from 'react';
import { Link } from 'react-router';

export default () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/todos">Todo</Link>
    <Link to="/about">About</Link>
  </div>
);
