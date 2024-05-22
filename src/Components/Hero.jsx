import React from 'react'
import { FiArrowDown } from 'react-icons/fi';

const Hero = () => {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('assets/images/hero.png')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">The Leading Platform For Real Estate <br />Property Matching</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">Experience the cutting-edge digital platform to buy and sell your<br /> properties to qualified and selected individuals.</p>
          </div>
        </div>
      );

}; 
export default Hero ; 