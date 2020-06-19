
/* Componet that coitain a Navbar */

import React from 'react';
import './styles/Navbar.css';

const logo = 'https://i.ibb.co/R7sJfzP/amt-2.png';

function Navbar(props) {
  return (
    <div className='Navbar'>
      <div className='container__fluid'>
        <img className='Navbar__fluid-logo' src={logo} alt='Logo' />
        <span className='font-weight-bold'>AGENCIA MUNICIPAL DE TRÁNSITO</span>
        <span className='font-weight-light'>QUITO</span>
      </div>
    </div>
  );
}

export default Navbar;
