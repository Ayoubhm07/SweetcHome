import React from 'react'
import { useNavigate } from 'react-router-dom';

const How =() => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/signup');
    };
    return (
        <div className="w-full h-auto flex   relative bg-[#168B70] py-20">
            <img src="assets/images/how.svg" className="absolute top-0 left-0 z-0"/>
            <div className="flex flex-col items-center justify-between  space-y-20 max-w-max-custom mx-auto relative z-30">
                <div className="flex flex-col items-center justify-center space-y-5 text-white">
                    <h2 className="font-cocogoosebold  sm:text-5xl text-3xl text-center">
                        How it works ?
                    </h2>
                </div>

                <div className="flex flex-col space-y-10 justify-around items-center  md:flex-row md:space-y-0 md:space-x-10">
                    <div className="flex flex-col items-center md:w-1/5 justify-center space-y-3 py-12 sm:py-4">
                            <span className="bg-[#5CAE9B] p-4 rounded-full mt-10">
                                <img src="assets/images/register.svg" className=" "
                                />
                            </span>
                        <p className="font-cocogoose text-base font-medium text-white text-center">
                            Register in our<br/> platform
                        </p>
                    </div>
                   <img src="assets/images/arrow.svg" className="sm:w-36 py-12 sm:py-4 md:rotate-0 rotate-90 md:block "/>
                   <div className="flex flex-col items-center md:w-1/5 justify-center space-y-3 py-12 sm:py-4">
                            <span className="bg-[#5CAE9B] p-4 rounded-full mt-10">
                                <img src="assets/images/share.svg" className=""
                                />
                            </span>
                        <p className="font-cocogoose text-base font-medium text-white text-center">
                            Share your property<br/> requirements
                        </p>
                    </div>
                    <img src="assets/images/arrow.svg" className="sm:w-36 py-12 sm:py-4 md:rotate-0 rotate-90 md:block "/>
                    <div className="flex flex-col items-center md:w-1/5 justify-center space-y-3 py-12 sm:py-4">
                            <span className="bg-[#5CAE9B] p-4 rounded-full mt-10">
                                <img src="assets/images/contact.svg" className=""
                                />
                            </span>
                        <p className="font-cocogoose text-base font-medium text-white text-center">
                            We will contact you when<br/> there’s a match!
                        </p>
                    </div>

                </div>
                <button
    className="bg-[#D9C34C] hover:bg-yellow-500 text-white font-cocogoosebold py-2 px-4 h-12 w-44 rounded-3xl mt-4 sm:mx-auto md:mx-4 lg:mx-6 xl:mx-8 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
    onClick={handleClick}>
    Register
                </button>
            </div>
        </div>
    );
}; 

export default How;  