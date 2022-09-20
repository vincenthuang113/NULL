import React from "react";
import { Carousel } from 'react-responsive-carousel';
import Header from "../partials/Header";

import '../css/general.css';
// import CarouselProf from "../partials/Carousel";

function AboutUs(){
    return(
        <section id='aboutus' >
            <div className="aboutusDiv" data-aos-id-testimonials>
                <div className="stateCard" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-testimonials]">
                    <h3 className='statement'>OUR VISION</h3>
                    <h1>成為投資市場正和的推手</h1>
                    <h4>在網路資訊爆炸與不對稱的時代<br/>
                        投資者們時常感到沉默與無助<br/>
                        我們希望能夠協助投資者們<br/>
                        在生活與投資市場中創造雙贏<br/>
                        一起將財富與心靈的雪球滾大<br/>
                        啟動人生正向的複利效應</h4>
                </div>
                <div className="stateCard" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-testimonials]">
                    <h3 className='statement'>OUR MISSION</h3>
                    <h1>秉持著我們的核心理念</h1>
                    <h4>Integrity, Transparency<br/>
                        Ethics, Client-Centric<br/>
                        正直｜透明｜道德｜客戶導向<br/>
                        秉持著回饋社會的精神與態度<br/>
                        期盼一天能為台灣金融環境<br/>
                        帶來正向的改變</h4>
                </div>
                {/* Section */}
                <div className="stateCard" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-testimonials]">
                    <h3 className='statement'>OUR SERVICE</h3>
                    <h1>全面性的「一站式平台」</h1>
                    <h4>此平台主要價值主張：<br/>
                    1. 從零到一的投資教學<br/>
                    2. 閒話到投資的開放討論空間<br/>
                    3. 各式精彩活動及會員回饋<br/>
                    4. Podcast與直播<br/>
                    5. 獨家研發的量化策略</h4>
                </div>
                <div className="profDiv">
                    {/* <CarouselProf/> */}
                </div>
            </div>
        </section>
    )

}

export default AboutUs;


