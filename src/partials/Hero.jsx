import React from 'react';
import { Link as AnLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import Illustration from '../images/hero-illustration.svg';
import Logo from '../images/newlogo.png';
import '../css/general.css'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Bg gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div className="absolute left-1/2 -translate-x-1/4 pointer-events-none -z-10" aria-hidden="true">
        <img src={Logo} className="max-w-none" width="1200vw" height="auto" alt="Hero Illustration" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero content */}

          <div className="max-w-xl mx-auto md:max-w-[640px] md:mx-0 text-center md:text-left">
            <div data-aos="zoom-out">
              <div className="relative text-sm text-gray-300 bg-gray-800 rounded-full inline-block px-4 py-1 mb-6 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
                <div className="text-gray-400">
                  NULL OFA指標第三波{' '}
                  <Link className="font-medium text-blue-500 inline-flex items-center transition duration-150 ease-in-out group" to="/indicators">
                    詳細資訊{' '}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </Link>
                </div>
              </div>
            </div>
            <h1 className="h1 font-uncut-sans mb-6" data-aos="zoom-out" data-aos-delay="100">
              Invest. <br />Together. <em className="font-italic">Passionately.</em>
            </h1>
            <p className="punchline text-xl text-white-400 mb-10" data-aos="zoom-out" data-aos-delay="200">
              <span>NULL Investing即刻捕捉投資從零到一的一站模式討論平台</span>
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <div>
                <a className="btn text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group" href="https://discord.com/invite/ScJdWjDNVw" target="_blank">
                  加入我們{' '}
                  <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </a>
              </div>
              <div>
                <AnLink className="btn text-gray-300 bg-gradient-to-t from-gray-800 to-gray-700 hover:to-gray-800 w-full shadow-lg" to="discord" spy={true} smooth={true} offset={50} duration={500}>
                  更多資訊
                </AnLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
