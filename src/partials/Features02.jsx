import React from 'react';

import Illustration from '../images/features-illustration.svg';
import FeaturesImage from '../images/phone2.png';
import '../css/general.css'

function Features02() {
  return (
    <section id="discord" className="relative">
      {/* Bg gradient */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10" aria-hidden="true" />
      {/* Bg illustration */}
      <div className="absolute top-0 left-1/2 -z-10 ml-[390px]" aria-hidden="true">
        <img src={Illustration} className="max-w-none" width="608" height="305" alt="Illustration" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans mb-4">從零到一的一站式平台</h2>
            <div className="max-w-2xl mx-auto">
              <p id="discTop" className="text-xl text-gray-400">加入我們分享與討論各種財經投資資訊，不論是台股、美股、幣圈、外匯，或甚至是房產、財經管理等等都能有所收穫，快與我們共同成長吧！</p>
            </div>
          </div>
          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">
            {/* Content */}
            <div className="md:w-7/12 lg:w-1/2 order-1 md:order-none" data-aos="zoom-out" data-aos-delay="200">
              <div className="discordStuff text-center md:text-left">
                <h3 id="discTitle" className="h3 font-uncut-sans text-4xl mb-4">Discord</h3>
                <p id="discDesc" className="text-xl text-gray-400 mb-6">Discord 是一款多合一文字及語音聊天軟體，不僅免費又安全！用戶必須註冊帳戶，然後建立自己的伺服器 (只要輸入名稱即可建立) 才能開始使用此軟體。快加入我們分享與討論吧！</p>
                <ul className="inline-flex flex-col text-lg text-gray-400 space-y-3">
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>手機｜平板｜電腦</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>IOS | Android | Windows | macOS</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>軟體免費</span>
                  </li>
                  <a className="font-medium text-blue-500 inline-flex items-center transition duration-150 ease-in-out group" href="https://discord.com/invite/ScJdWjDNVw">
                    加入{' '}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </a>
                </ul>
              </div>
            </div>
            {/* Image */}
            <div className="md:w-5/12 lg:w-1/2" data-aos="zoom-out">
              <img id="discPhone" className="mx-auto md:max-w-none" src={FeaturesImage} width="540" height="581" alt="Features" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Features02;
