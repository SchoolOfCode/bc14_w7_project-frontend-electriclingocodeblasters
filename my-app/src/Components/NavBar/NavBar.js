import React from 'react';
import Logo from '../../images/V3_Logo.png';

function NavBar() {
  return (
    <header>
      <div className="NavBar">
        <div>
          <button>Variables</button>
          <button>Arrays</button>
          <button>Functions</button>
        </div>
        <div id="logoDiv">
        <img id="logo" src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  );
}

export default NavBar; 
