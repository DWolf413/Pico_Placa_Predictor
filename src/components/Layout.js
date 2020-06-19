/* eslint-disable react/destructuring-assignment */
/* Create a templete with Navbar, in the future all pages cointain this part*/

import React from 'react';

import '../global.css';
import Navbar from './Navbar';

function Layout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}

export default Layout;
