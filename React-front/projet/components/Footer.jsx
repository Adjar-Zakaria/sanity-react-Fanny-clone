import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname == '/' ? null  :

      <footer>
        <div className="wrapper">
          <div className="text">
            <p>
              Copyright Fanny Texier. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>}

    </>
  )
}

export default Footer

