import React from 'react';
import Youtube from 'react-youtube';

import firststoryLogo from '../images/firststory.png';
import applepodLogo from '../images/applepod.png';
import spotifyLogo from '../images/spotify.png';
import kkboxLogo from '../images/kkbox.png';
import youtube from '../images/youtube.png';
import '../css/general.css';

function Testimonials() {

  return (
    <section id="multimedia" className="relative">
      {/* Bg gradient: top */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10" aria-hidden="true" />
      {/* Bg gradient: bottom */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans">NULL's Multimedia</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-400">
                多媒體資訊｜Podcast｜Live直播
              </p>
            </div>
          </div>
          <div className='multimedia'>
            <h1 className='podcastTitle'>Podcast</h1>
            {/* Testimonials container */}
            <div className='card' data-aos="fade-up">
              <div data-aos-id-testimonials>
                {/* podcast */}
                <div className='podcastDiv' data-aos="fade-up" data-aos-anchor="[data-aos-id-testimonials]" >
                  <a className="podcast" href="https://open.firstory.me/user/nullinvesting" target="_blank"><img className="podcast" src={firststoryLogo} /></a>
                  <a className="podcast" href="https://podcasts.apple.com/podcast/id1574845575" target="_blank"><img className="podcast" src={applepodLogo}/></a>
                  <a className="podcast" href="https://open.spotify.com/show/4j0utyhFkC4o78HJcGwuj9" target="_blank"><img className="podcast" src={spotifyLogo}/></a>
                  <a className="podcast" href="https://podcast.kkbox.com/tw/channel/OkgQUoue2-y_UwbCQa" target="_blank"><img className="podcast" src={kkboxLogo}/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* youtube */}
      <div className='youtubeDiv'>
        <h1 className='podcastTitle'>Youtube</h1>
          <a href="https://www.youtube.com/watch?v=CA2_1RQOxB8&ab_channel=NULLInvestingLLC" target="_blank"><img id='youtubeLogo' src={youtube} alt="youtube" data-aos="fade-up"/></a>
      </div>
      <div className='wrap'>
        <iframe width="1520vw" height="630vw"src="https://www.youtube.com/embed/CA2_1RQOxB8?fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=2&vq=hd1080&autoplay=1&loop=1&playlist=CA2_1RQOxB8&mute=1&showinfo=0&controls=0"data-aos="zoom-out"></iframe>
      </div>
      
    </section>
    
  );
}

export default Testimonials;