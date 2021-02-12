import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  
  //Rimuovi effetto link
  const navStyle = {
    textDecoration: 'none',
    color: '#121212',
  };

  return (
    <nav>
      <Link to="/" style={navStyle}>
        <div className="logo"><img src={'./img/drink.svg'} /> Cocktail Time </div>
      </Link>
    </nav>
  );
}

export default Nav;
