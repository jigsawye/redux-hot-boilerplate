import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';

export default (
  <Route component={Layout}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
  </Route>
);
