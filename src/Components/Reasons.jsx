import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const Reasons =()=>{
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/buySell');
    };
return(
<div className="w-full h-auto flex items-center justify-center relative py-16 bg-white">
      <div className="flex flex-col items-center justify-center space-y-20 max-w-screen-xl mx-4 w-96vw relative z-20">
        <div className="grid grid-cols-12 gap-x-6 gap-y-6 w-full">
          <img
            src="assets/images/reasons.png" 
            alt="buy sell about img"
            className="mx-auto md:col-span-4 col-span-12 h-auto md:order-1 order-2 text-4xl text-[#168B70]"
          />
          <div className="flex flex-col justify-center row-span-3 md:col-span-8 col-span-12 space-y-16 md:ml-20 md:order-2 order-1 sm:py-5">
            <div className="flex flex-col md:items-start items-center space-y-3">
              <h2 className="font-cocogoosebold font-extrabold normal md:text-5xl text-3xl text-[#3A3937]">
                Why Buy and Sell with <span className="text-[#3A3937]">SweetHome?</span>
              </h2>
            </div>
            <ul className="flex flex-col md:items-start items-center space-y-6">
              <li className="text-lg font-cocogoose flex flex-row space-x- items-center justify-start w-full">
                <IoMdArrowDropright className="text-[#168B70]" />
                <span >Shorten Your Buy & Sell Closing Period.</span>
              </li>
              <li className="text-lg font-cocogoose flex flex-row space-x-1 items-center justify-start w-full">
                <IoMdArrowDropright className="text-[#168B70]" />
                <span className="capitalize">Reduce your Marketing costs with our free digital solution.</span>
              </li>
              <li className="text-lg font-cocogoose flex flex-row space-x-1 items-center justify-start w-full">
                <IoMdArrowDropright className="text-[#168B70]" />
                <span>Boost Your Income With Our Innovative Platform.</span>
              </li>
            </ul>
            <button
      className="bg-[#D9C34C] hover:bg-yellow-500 text-white font-cocogoosebold py-2 px-4 h-12 w-44 rounded-3xl mt-4 mx-auto md:mx-4 lg:mx-6 xl:mx-8 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
      onClick={handleClick}
    >
      JOIN NOW!
    </button>
          </div>
        </div>
      </div>
      <img src="assets/images/dubai.svg"className="absolute bottom-0 right-0 z-0"
      />
    </div>
);

};

export default Reasons;