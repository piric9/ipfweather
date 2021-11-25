import React from 'react';

const Header: React.FC = ({ children }) => (
  <header className="main-header">
    <nav className="container">{children}</nav>
  </header>
);

export default Header;
