import React from 'react'

const Thanks =()=>{
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('assets/images/thanks.svg')" }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#D9C34C] p-4">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">Thank You For Sharing All Your<br/> Requirements With Us</h1>
            <div className='mt-10 justify-center text-white font-cocogoosebold'>We will use our innovative platform to<br/>
            match you with the best option.</div>
            <div className='mt-10 justify-center text-white font-cocogoosebold'>Our team will reach out to you shortly.</div>
            <div className='mt-10 justify-center text-white font-cocogoosebold'>The SweetcHome Team,<br/>We Care!</div>
            <button
    className="bg-[#D9C34C] hover:bg-yellow-500 text-white font-cocogoosebold py-2 px-4 h-12 w-44 rounded-3xl mt-20 sm:mx-auto md:mx-4 lg:mx-6 xl:mx-8 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
    Continue
                    </button>
          </div>
        </div>
    );
};
export default Thanks;