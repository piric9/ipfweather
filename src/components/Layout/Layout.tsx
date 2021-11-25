import React from 'react';
import Header from 'components/Header/Header';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
