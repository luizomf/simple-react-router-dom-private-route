import React from 'react';
import { Link } from 'react-router-dom';

const headerStyles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    alignItens: 'center',
    padding: '20px 0',
  },

  link: {
    marginRight: '10px',
  },
};

export default function Header() {
  return (
    <header>
      <nav style={headerStyles.nav}>
        <Link style={headerStyles.link} to="/">
          Home
        </Link>
        <Link style={headerStyles.link} to="/login/">
          Login
        </Link>
        <Link style={headerStyles.link} to="/closed/">
          Closed
        </Link>
      </nav>
    </header>
  );
}
