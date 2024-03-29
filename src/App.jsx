import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';
import ScrollButton from './partials/ScrollButton';
import AOS from 'aos';

import Home from './pages/Home';

import AboutUs from './pages/Aboutus';
import Indicators from './pages/Indicators';
import Comingsoon from './pages/Comingsoon';
import Purchase from './pages/Purchase';
import BIT from './pages/binanceInternal';
import BET from './pages/binanceExternal';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 500,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/aboutus" element={<AboutUs />} /> */}
        <Route exact path="/indicators" element={<Indicators />} />
        <Route exact path="/comingsoon" element={<Comingsoon />}/>
        <Route exact path="/purchase" element={<Purchase />}/>
        <Route exact path='/binanceinternaltransfer' element={<BIT />}/>
        <Route exact path='/binanceexternaltransfer' element={<BET />}/>
      </Routes>
      <ScrollButton/>
    </>
  );
}

export default App;
