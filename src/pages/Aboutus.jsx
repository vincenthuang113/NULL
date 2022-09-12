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
                    <h1>成為一個正和的推手</h1>
                    <h4>在這個網路資訊爆炸<br/>
                        人們常常感到沈默與無助<br/>
                        我們希望成為這個推手<br/>
                        幫助人們在生活與股市中都達到正和<br/>
                        一起去把財富與心靈的雪球滾大</h4>
                </div>
                <div className="stateCard" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-testimonials]">
                    <h3 className='statement'>OUR MISSION</h3>
                    <h1>提供一個自由的空間</h1>
                    <h4>提供一個資訊彙整<br/>
                        從零到一的教學<br/>
                        能自在討論生活大小事 股市點滴<br/>
                        Podcast與直播消遣的<br/>
                        "一站式平台"</h4>
                </div>
                <div className="profDiv">
                    {/* <CarouselProf/> */}
                </div>
            </div>
        </section>
    )

}

export default AboutUs;