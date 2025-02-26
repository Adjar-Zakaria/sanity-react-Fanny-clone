import { React, useEffect, useState } from 'react';
//import { Helmet, HelmetProvider } from 'react-helmet-async';
import ReactPlayer from 'react-player'

import { Link } from 'react-router'

function Home() {
  const [toggleNav, setToggleNav] = useState(true);
  const [playIndex, setPlayIndex] = useState(0);

  const VIDEOS = [
    'videos/VIDEO1.mp4',
    'videos/VIDEO2.mp4',
    'videos/VIDEO3.mp4',
    'videos/VIDEO4.mp4',
    'videos/VIDEO5.mp4',
    'videos/VIDEO6.mp4',
    'videos/VIDEO7.mp4',
    'videos/VIDEO8.mp4',
    'videos/VIDEO9.mp4',
    'videos/VIDEO10.mp4',
    'videos/VIDEO11.mp4',
    'videos/VIDEO12.mp4',
    'videos/VIDEO13.mp4',
    'videos/VIDEO14.mp4',
    'videos/VIDEO15.mp4',
    'videos/VIDEO16.mp4'

  ]
  function changeIndex() {
    setPlayIndex(playIndex + 1)
  }
  if (playIndex === 16) {
    setPlayIndex(0)
  }

  return (
    <>
      <div className="background-video">

        <ReactPlayer
          url={VIDEOS[playIndex]}
          style={{ width: "100%", height: "100%", overflow: "hidden", minWidth: "100%", minHeight: "100%" ,objectFit:"cover"}}
          muted
          playing
          controls
          onEnded={changeIndex}
        />
        {/*
        
        <src="https://www.youtube.com/embed/2ah_lnzBu-Q?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0"  
        <iframe frameborder="0" allow="autoplay" 
        src="https://www.youtube.com/embed/2ah_lnzBu-Q?autoplay=1&loop=1&playsinline=1&showinfo=0&playlist=2ah_lnzBu-Q" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
        */}
      </div>
      <div className="background-color"></div>
      <div className="container">
        <div className="home">
          <nav>
            <div className="logo">
              <Link><h1> Hajar Ouahbi </h1></Link>
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
                  <Link className="link" to="/portfolios">PORTFOLIO</Link>
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
                    <Link className="link" onClick={() => setToggleNav(!toggleNav)} to="/portfolios">Portfolio</Link>
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
          <main>
            <section className="hero">

              <div className="hero-content">
                <h1>Documentary
                  <br /> Filmmaker.</h1>
                <p>Fanny Texier is an award-winning director, cinematographer and editor. She specializes in cinematic documentaries and compelling character-driven stories.</p>
              </div>

            </section>
          </main>
        </div>
      </div>


    </>
  )
}

export default Home
