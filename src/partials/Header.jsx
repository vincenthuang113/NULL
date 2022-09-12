import React, { useState } from 'react';
import { Link as AnLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import '../css/general.css'

function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
              <Link to='/' class="logoTitle"><span class="null">NULL</span> Investing</Link>
            {/* <Link className="block" to="/" aria-label="Cruip">
              <svg className="w-8 h-8" viewBox="0 0 32 32" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                  <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="108.567%" gradientTransform="matrix(-.00915 -.82755 .99996 -.00757 -.394 1.319)" id="logo1-b">
                    <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                    <stop stopColor="#F472B6" stopOpacity=".876" offset="100%" />
                  </radialGradient>
                  <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="108.567%" gradientTransform="matrix(-.00915 -.82755 .99996 -.00757 -.394 1.319)" id="logo1-d">
                    <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                    <stop stopColor="#D375C2" stopOpacity=".833" offset="50.358%" />
                    <stop stopColor="#FBCFE8" stopOpacity=".876" offset="100%" />
                  </radialGradient>
                  <path d="M12 32c8-6.915 12-12.582 12-17 0-6.627-5.373-12-12-12S0 8.373 0 15c0 4.418 4 10.085 12 17Z" id="logo1-a" />
                  <path d="M20 29c8-6.915 12-12.582 12-17 0-6.627-5.373-12-12-12S8 5.373 8 12c0 4.418 4 10.085 12 17Z" id="logo1-c" />
                </defs>
                <g fill="none" fillRule="evenodd">
                  <use fill="url(#logo1-b)" opacity=".64" transform="matrix(1 0 0 -1 0 35)" xlinkHref="#logo1-a" />
                  <use fill="url(#logo1-d)" opacity=".961" xlinkHref="#logo1-c" />
                </g>
              </svg>
            </Link> */}
          </div>

          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul id="navigation" className="flex grow justify-end">
              <div onclick={toggleHamburger}>
                <div className="hamburger" >
                    <div className="burger"/>
                    <div className="burger"/>
                    <div className="burger"/>
                </div>
              </div>
              <div className="drop">
                <div className="menuList">
                  <AnLink to="aboutus" spy={true} smooth={true} offset={50} duration={500}>關於我們</AnLink>
                  <AnLink to="discord" spy={true} smooth={true} offset={50} duration={500}>Discord</AnLink>
                  <AnLink to="indicator" spy={true} smooth={true} offset={50} duration={500}>黃金指標</AnLink>
                  <AnLink to="multimedia" spy={true} smooth={true} offset={50} duration={500}>Podcast</AnLink>
                  <AnLink to="partner" spy={true} smooth={true} offset={50} duration={500}>合作|投稿</AnLink>
                  {/* <div className="close">
                    <h1>x</h1>
                  </div> */}
                </div>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
