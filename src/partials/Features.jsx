import React from 'react';
import '../css/general.css'
import OFA from '../images/OFA1.png';
import M4Q from '../images/M4Q.png';
import { Link } from 'react-router-dom';

function Features() {
  return (
    <section id="indicator" className='indicatorBg'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">  
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans" data-aos="zoom-out">NULL Investing<br/>黃金指標</h2>
          </div>
          <div className='indicatorLogo'>
            {/* <div className="pb-16" data-aos="zoom-out">
              <Link to="/indicators"><img className='ofa' src={OFA} width="400vw" height="auto" alt="Features"/></Link>
            </div> */}
            <div className="ofaCon">
            <Link to="/indicators"><h1 className='ofaLogo'>[OFA]</h1></Link>
            </div>
            <h1 id='upup'>⬆點擊上方⬆</h1>
            {/* <div className="pb-16" data-aos="zoom-out">
              <img className='m4q' src={M4Q} width="400vw" height="auto" alt="Features"/>
            </div> */}
          </div>
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">
            {/* 1st item */}
            <div className="flex flex-col items-center" data-aos="zoom-out">
              <div className="mb-4">
                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="89.85%" id="icon1-b">
                      <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                      <stop stopColor="#F472B6" stopOpacity=".876" offset="100%" />
                    </radialGradient>
                    <circle id="icon1-a" cx="28" cy="28" r="28" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use fill="url(#icon1-b)" xlinkHref="#icon1-a" />
                    <g stroke="#FDF2F8" strokeLinecap="square" strokeWidth="2">
                      <path d="M17 28h22" opacity=".64" />
                      <path d="M20 23v-3h3M33 20h3v3M36 33v3h-3M23 36h-3v-3" />
                    </g>
                  </g>
                </svg>
              </div>
              <h4 className="h4 text-gray-200 text-center mb-2">進/出場點搜尋</h4>
              <p className="text-lg text-gray-400 text-center">利用趨勢、價格、高階理論等等<br/>無時無刻尋找精準的進出場點</p>
            </div>
            {/* 2nd item */}
            <div className="flex flex-col items-center" data-aos="zoom-out" data-aos-delay="200">
              <div className="mb-4">
                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="89.85%" id="icon2-b">
                      <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                      <stop stopColor="#F472B6" stopOpacity=".876" offset="100%" />
                    </radialGradient>
                    <circle id="icon2-a" cx="28" cy="28" r="28" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use fill="url(#icon2-b)" xlinkHref="#icon2-a" />
                    <g stroke="#FDF2F8" strokeLinecap="square" strokeWidth="2">
                      <path d="m22 24-4 4 4 4M34 24l4 4-4 4" />
                      <path d="m26 36 4-16" opacity=".64" />
                    </g>
                  </g>
                </svg>
              </div>
              <h4 className="h4 text-gray-200 text-center mb-2">簡單明瞭的設計</h4>
              <p className="text-lg text-gray-400 text-center">乾淨利落的指標訊號<br/>一目了然，前顯易懂</p>
            </div>
            {/* 3rd item */}
            <div className="flex flex-col items-center" data-aos="zoom-out" data-aos-delay="400">
              <div className="mb-4">
                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="89.85%" id="icon3-b">
                      <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                      <stop stopColor="#F472B6" stopOpacity=".876" offset="100%" />
                    </radialGradient>
                    <circle id="icon3-a" cx="28" cy="28" r="28" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use fill="url(#icon3-b)" xlinkHref="#icon3-a" />
                    <g stroke="#FDF2F8" strokeLinecap="square" strokeWidth="2">
                      <path d="m18 31 4 4 12-15" />
                      <path d="M39 25h-3M39 30h-7M39 35H28" opacity=".64" />
                    </g>
                  </g>
                </svg>
              </div>
              <h4 className="h4 text-gray-200 text-center mb-2">多元化的市場應用</h4>
              <p className="text-lg text-gray-400 text-center">不論是台股、美股、幣圈等等<br/>都能為您帶來無限可能</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
