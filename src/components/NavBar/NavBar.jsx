import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBar">
      <div className="navbar">
        <div className="nav">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <p>
              <span className="all-pokemons">Все покемоны</span>
            </p>
          </Link>
          <Link to="/help" style={{ textDecoration: 'none' }}>
            <p>Помощь</p>
          </Link>
          <p>Контакты</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
