import React from 'react'

const Discover = () =>{
    return (
        <div className="top-0 w-full relative bg-[#7AD6C1]">
            <div className="flex flex-col max-w-max-custom mx-auto ">
                <div className="flex flex-col items-center justify-center space-y-5 py-16 z-10">
                    <h2 className="text-white font-cocogoosebold font-normal text-4xl text-center">
                        Discover Our Selected Offers
                    </h2>
                    <button
    className="bg-[#D9C34C] hover:bg-yellow-500 text-white font-cocogoosebold py-2 px-4 h-12 w-44 rounded-3xl mt-4 sm:mx-auto md:mx-4 lg:mx-6 xl:mx-8 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
    View More
                    </button>
                </div>
                <img
                    loading="lazy" src="assets/images/arrow2.svg" className="absolute w-2/4 md:w-2/5 bottom-0 right-0 z-0"
                />
            </div>
        </div>
    );
};
export default Discover;