import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

const Header=() => {
  return (
    <header>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
    </header>
  );
}
export default Header;

