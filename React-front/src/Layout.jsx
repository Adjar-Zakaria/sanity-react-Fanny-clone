import React from 'react';
import Navbar from '../projet/components/Navbar';
import Footer from '../projet/components/Footer';
import {  Outlet} from 'react-router-dom';
import { useLocation } from "react-router-dom";


function Layout() {
  const { pathname } = useLocation();

  return (
    <>
     <div className="container-fluid">
        <div className={ pathname == '/' ? ''  : 'container'}>
      
          <Navbar />
          <Outlet />
          <Footer />

        </div>
      </div>
      
    </>
  )
}

export default Layout
