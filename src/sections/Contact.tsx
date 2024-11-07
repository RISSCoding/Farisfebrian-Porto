import React, { useEffect } from 'react';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right-white1.svg';
import grainImage from '@/assets/images/grain.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const ContactSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true,
    });
  }, []);

  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-24 lg:px-24 lg:mx-14">
      <div className="flex justify-center">
        <p className="uppercase font-bold tracking-widest bg-gradient-to-r from-custom-green to-custom-gray text-center bg-clip-text text-transparent">
          Let's Connect
        </p>
      </div>
      <h2 className="font-bold text-3xl md:text-5xl text-center text-white mt-6">My Contact</h2>
      <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto lg:text-xl mb-[6vh]">
        Let's connect! Feel free to reach out through my contact details below.
      </p>
      <div className="container">
        <div
          className="bg-gradient-to-r from-custom-green to-custom-gray text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0"
          data-aos="fade-up"
        >
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div data-aos="fade-right"> 
              <h2 className="font-bold text-2xl md:text-2xl">
                Let’s create something amazing together!
              </h2>
              <p className="text-sm md:text-base md:w-[30rem] mt-2">
                Ready to take your projects to another level? Let's connect and discuss how I can help you to achieve your goals.
              </p>
            </div>
            <div data-aos="fade-left">
              <a
                href="mailto:farisfebrian0602@gmail.com"
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 lg:ml-96"
              >
                <span className="font-semibold">Hubungi Saya</span>
                <img src={ArrowUpRightIcon} className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
