import React, { useState } from 'react'
import { Link } from 'react-router'
import { useLocation } from "react-router-dom";


function Navbar() {
  const { pathname } = useLocation();

    const [toggleNav, setToggleNav] = useState(true);
    return (
        <>
      {pathname == '/' ? null  :
      


            <nav>
                <div className="logo">
                   <Link to={"/"}> <h1> Hajar Ouahbi </h1></Link>
                </div>

                <div className="links">
                    <ul>
                        <li>
                            <Link className="link" to="/">HOME</Link>
                        </li>
                        <li>
                            <Link className="link" to="/about">ABOUT</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Portfolio">PORTFOLIO</Link>
                        </li>
                        <li>
                            <Link className="link" to="/contact">CONTACT</Link>
                        </li>
                        <li>
                            <div className="instagram-icon">
                                <Link to=""><i className="fa-brands fa-instagram"></i></Link>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="menu">
                    <button onClick={() => setToggleNav(!toggleNav)}> <span> <i className="fa-solid fa-bars"></i></span></button>
                </div>
                <div className="sm-nav" id="sm-nav" style={{ display: toggleNav ? 'none' : 'block' }}>


                    <div className="content" >

                        <div className="x">
                            <button onClick={() => setToggleNav(!toggleNav)}> <span> X </span></button>
                        </div>
                        <ul>
                            <li>
                                <Link className="link" onClick={() => setToggleNav(!toggleNav)} to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="link" onClick={() => setToggleNav(!toggleNav)} to="/about">About</Link>
                            </li>
                            <li>
                                <Link className="link" onClick={() => setToggleNav(!toggleNav)} to="/Portfolio">Portfolio</Link>
                            </li>
                            <li>
                                <Link className="link" onClick={() => setToggleNav(!toggleNav)} to="/contact">Contact</Link>
                            </li>
                            <li>
                                <div className="instagram-icon">
                                    <Link to=""><i className="fa-brands fa-instagram"></i></Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>


            </nav>


}
        </>
    )
}

export default Navbar
