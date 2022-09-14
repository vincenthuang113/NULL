import React, { useState } from 'react';
import { Link as AnLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import '../css/general.css'

function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }
  function closeDiv() {
    window.parent.document.getElementById("close").style.display = "none";
  }

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
              <Link to='/' class="logoTitle"><span class="null">NULL</span> Investing</Link>
          </div>

          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul id="navigation" className="flex grow justify-end">
              <div>
                <div className="hamburger" >
                    <div className="burger"/>
                    <div className="burger"/>
                    <div className="burger"/>
                </div>
              </div>
              <div className="drop">
                <div className="menuList">
                  <AnLink to="aboutus" id="closeAbout" spy={true} smooth={true} offset={50} duration={500}>關於我們</AnLink>
                  <AnLink to="discord" spy={true} smooth={true} offset={50} duration={500}>Discord</AnLink>
                  <AnLink to="indicator" spy={true} smooth={true} offset={50} duration={500}>NULL OFA指標</AnLink>
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

