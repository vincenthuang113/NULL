import React from 'react';

import Header from '../partials/Header';
import Hero from '../partials/Hero';
import PressLogos from '../partials/PressLogos';
import Features from '../partials/Features';
import Features02 from '../partials/Features02';
import Pricing from '../partials/Pricing';
import Testimonials from '../partials/Testimonials';
import Resources from '../partials/Resources';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';
import AboutUs from './Aboutus';
import '../css/general.css';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <Hero />
        <AboutUs />
        <Features02 />
        <PressLogos />
        <Features />

        <Pricing />
        <Testimonials />
        {/* <Resources /> */}
        <div className='empty'></div>
        <Cta />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;