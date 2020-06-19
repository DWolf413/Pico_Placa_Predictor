/* eslint-disable react/destructuring-assignment */
import React from 'react';

import '../global.css';
import Navbar from './Navbar';

function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default Layout;
