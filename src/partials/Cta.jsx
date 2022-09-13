import React from 'react';

import Illustration from '../images/cta-illustration.svg';

function Cta() {
  return (
    <section id="partner" className='lastSec'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" >
        {/* CTA box */}
        <div className="relative bg-gradient-to-tr from-blue-600 to-gold-500 rounded py-10 px-8 md:py-16 md:px-12 overflow-hidden" data-aos="zoom-out" data-aos-delay='200'>
          {/* Bg illustration */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 mt-8 -z-10" aria-hidden="true">
            <img src={Illustration} className="max-w-none" width="582" height="662" alt="Illustration" />
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
              <h3 className="text-4xl font-bold font-uncut-sans mb-2">合作與投稿</h3>
              <p className="text-blue-200">歡迎各位投資高手們與我們合作、投稿，甚至是加入我們的團隊！<br/>請於Discord和任何NULL成員進行聯繫！</p>
            </div>
            {/* CTA button */}
            <div className="shrink-0">
              <a className="btn-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full group shadow-lg" href="https://discord.com/invite/ScJdWjDNVw" target="_blank">
                加入我們 <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
