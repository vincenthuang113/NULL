import React from 'react';
import TVLogo from '../images/tv.png';
import DiscordLogo from '../images/Discord-logo.png';
import BinanceLogo from '../images/binance.png';
import NullLogo from '../images/nullLong.png';

function PressLogos() {
  return (
    <section className='logoBg'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-4 border-b border-gray-800">
          {/* Items */}
          <div id="pressed" className="max-w-sm md:max-w-5xl mx-auto grid grid-cols-4 md:grid-cols-4">
            {/* TV */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto" data-aos="zoom-out">
              <img className="max-w-full fill-gray-500" width="124" height="24" viewBox="0 0 124 24" src={TVLogo} />
            </div>
            {/* Discord */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto" data-aos="zoom-out">
              <img className="max-w-full fill-gray-500" width="124" height="24" viewBox="0 0 124 24" src={DiscordLogo} />
            </div>
            {/* binance */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto" data-aos="zoom-out">
              <img className="max-w-full fill-gray-500" width="124" height="24" viewBox="0 0 124 24" src={BinanceLogo} />
            </div>
            {/* Null */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto" data-aos="zoom-out">
              <img className="max-w-full fill-gray-500" width="124" height="24" viewBox="0 0 124 24" src={NullLogo} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PressLogos;
