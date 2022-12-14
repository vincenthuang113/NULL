import React from "react";

import ofa from '../images/OFA1.png';
import chart from '../images/ofaPic.png';
import chart1 from  '../images/ofaC1.png';
import chart2 from  '../images/ofaC2.png';
import chart3 from  '../images/ofaC3.png';
import chart4 from  '../images/ofaC4.png';
import chart5 from  '../images/ofaC5.png';
import aapl from '../images/aapl.png';
import tsmc from '../images/tsmc.png';
import eth from '../images/eth.png';
import '../css/indicators.css';
import { Carousel } from "react-responsive-carousel";
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Pricing from "../partials/Pricing";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';



function Indicators(){


    return(
        <section>
        <div id="indiSec">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
                <div className="shrink-0 mr-4">
                {/* Logo */}
                <Link to='/' class="logoTitle"><span class="null">NULL</span> Investing</Link>
                </div>
            </div>
        </div>
        <div className="indiTit" data-aos="zoom-in-down">
            <h1>NULL OFA</h1>
        </div>
        <div className="indiDiv">
            {/* <div className="indiImg" data-aos='fade-right' data-aos-delay='200'>
                    <img src={ofa} alt="ofa" />
            </div>           */}
            <div className="ofaInfo" data-aos='zoom-in' data-aos-delay='250'>
                {/* <h1 data-aos='fade-down' data-aos-delay='300'>NULL OFA 指標</h1> */}
                <h6 data-aos='fade-down' data-aos-delay='350'>
                    One For All (OFA) 量化指標為NULL Investing LLC團隊獨家開發的投資產品買賣指標適用於TradingView平台。
                    OFA指標核心系統建立於趨勢及價格變動理論以致低延遲訊號顯示，
                    為了迎合使用者主觀操盤 OFA指標價值提供不只買賣訊號，
                    OFA指標也提供NULL團隊獨家設計的K線 (O-Chart)、NULL Trend、雲帶盤整訊號 C-Check、
                    正弦函數盤整訊號 B-Check作為操盤輔助讓使用者真正擁有一個One For All的投資輔助工具。
                    <br/><br/>適用市場: 全球股市｜台股｜美股｜港股｜期貨｜虛擬貨幣｜外匯</h6>
                <h4 id='ofaAlert' data-aos='fade-down' data-aos-delay='ˇ350'>因OFA指標邏輯運用上持有價量元素，投資商品必須有交易量否則 OFA無法正常使用</h4>
            </div>
        </div>
        <div className="returns">
            <div className="aboutusDiv1" data-aos-id-testimonials>
                    <div className="stateCard1" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-testimonials]">
                        <h3 className='statement1'>AAPL</h3>
                        <div className="returnsimg">
                            <img src={aapl} alt="" />
                        </div>
                        <h1>回測收益率 <br/> 125.3%</h1>
                    </div>
                    <div className="stateCard1" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-testimonials]">
                        <h3 className='statement1'>TSMC</h3>
                        <div className="returnsimg">
                            <img id="tsmc" src={tsmc} alt="" />
                        </div>
                        <h1>回測收益率 <br/> 91.32%</h1>
                    </div>
                    <div className="stateCard1" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-testimonials]">
                        <h3 className='statement1'>ETH</h3>
                        <div className="returnsimg">
                            <img src={eth} alt="" />
                        </div>
                        <h1>回測收益率 <br/> 1024.22%</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="carouselDiv">
            <Carousel>
                <div>
                    <p className="legend">OFA</p>
                    <img className='chartSize' src={chart1} alt="" />
                </div>
                <div>
                    <p className="legend">O-Chart</p>
                    <img className='chartSize' src={chart2} alt="" />
                </div>
                <div>
                    <p className="legend">NULL Trend</p>
                    <img className='chartSize' src={chart3} alt="" />
                </div>
                <div>
                    <p className="legend">C-Check</p>
                    <img className='chartSize' src={chart4} alt="" />
                </div>
                <div>
                    <p className="legend">B-Check</p>
                    <img className='chartSize' src={chart5} alt="" />
                </div>
            </Carousel> 
            <div className="indiInfo">
            <h1 id="gongNeng">功能簡介</h1>
            <Accordion className="i">
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="ii">
                        NULL OFA
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="iii">
                    <p>
                        NULL團隊獨家精心設計的NULL OFA是依系統分析提供五種不同訊號，分別為：買點、賣點、減倉、左側買點、左側賣點。將訊號分為五種有助於操盤者更能判斷當下狀況，並做出最正確的決定。
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="ii">
                        O-Chart
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="iii">
                    <p>
                    NULL團隊獨家設計的Objective-Chart(O-Chart)應用了趨勢、支撐、壓力的概念來取代傳統K線。 O-Chart的優勢在於能客觀承認趨勢與確認行情，上漲/下跌過程中O-Chart取代的Candle-Sticks會顯示不同顏色。
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="ii">
                        NULL Trend
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="iii">
                    <p>
                    NULL Trend是NULL團隊研發出的指標，適用時區為四小時，可以幫助使用者了解大趨勢為何。趨勢只看顏色不看線的位置，而線的位置也可以當作支撐壓力使用。
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="ii">
                        C-Check
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="iii">
                    <p>
                    NULL團隊獨家設計的雲帶盤整訊號 Consolidation-Check (C-Check)是一個能有效辨認盤整並作為標記提供給使用者輔助操盤。使用者能在TradingView指標設置頁面開啟或關閉C-Check。
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="ii">
                        B-Check
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="iii">
                    <p>
                    B-Check使用正弦函數計算週期來判斷當下是否為盤整的背景變色功能，以數學週期為主，標記出盤整個過程減少資金損耗。
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            </Accordion>
            </div> 
        </div>
        <Pricing/>
        </section>
    )

}

export default Indicators;