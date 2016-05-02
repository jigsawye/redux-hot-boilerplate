import React, { PropTypes } from 'react';
import Navigation from './Navigation';

const Layout = ({ children }) => (
  <div>
    <Navigation />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
