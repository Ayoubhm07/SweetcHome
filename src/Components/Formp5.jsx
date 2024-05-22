import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaExclamationCircle } from 'react-icons/fa';
import { IoMdArrowDropright } from "react-icons/io";


const Form5 = ({ formData, handleChange, next ,prev }) => {
    const nextPage = () => {
        if (!formData.bedrooms) {
            toast.error('Please select a field', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                icon: <FaExclamationCircle style={{ color: "#ff4d4f" }} />,
                style: {
                    backgroundColor: "#fff",
                    color: "#000",
                    fontSize: "16px",
                    fontFamily: "Arial, sans-serif",
                    border: "1px solid #ff4d4f",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
                },
                bodyClassName: {
                    fontFamily: "Arial, sans-serif"
                },
                progressStyle: {
                    backgroundColor: "#ff4d4f"
                },
                className: 'toast-animate'
            });
            return;
        }
        next();
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelection = (value) => {
        handleChange({ target: { name: 'bedrooms', value } });
        setIsOpen(false);
    };


    return (
        <div className="flex h-screen relative">
            <img src="/assets/images/lotus.svg" className="absolute right-0 bottom-0 w-50 h-100 z-50" alt="Lotus" />
            <div className="w-2/5 relative">
                <img src='/assets/images/f5.png' alt="Step 1"
                    className="absolute left-0 bottom-0 top-0 z-10 w-full h-screen object-cover" />
            </div>
            <div className="w-3/5 relative flex flex-col justify-center items-start pl-24 bg-white">
                <div className='flex flex-col mt-50'>
                    <div className='flex mb-3 space-x-2'>
                        <img src="/assets/images/line.svg" alt="line" />
                        <h6 className='font-cairo text-2xl text-[#168B70]'>4/7</h6>
                    </div>
                    <h2 className='mb-8 text-3xl font-cocogoosebold text-[#3A3937]'>How many bedrooms?</h2>
                    <div className="relative w-96">
                        <button
                            className={`btn flex justify-between items-center rounded-full font-cairo w-full h-14 mb-8 my-2 py-2 pl-6 text-left 
    ${formData.bedrooms ? 'border-2 border-[#168B70] text-[#168B70]' : 'border border-gray-400 text-black'} 
    hover:border-[#168B70] hover:text-[#168B70]`}
                            onClick={toggleDropdown}
                        >
                            {formData.bedrooms || 'Select Bedrooms'}
                            <IoMdArrowDropright className={`text-[#168B70] size-10 transform ${isOpen ? 'rotate-90' : ''}`} />
                        </button>


                        {isOpen && (
                            <ul className="absolute z-10 w-full bg-white border border-gray-400 rounded-lg mt-2">
                                {['1 Bedroom', '2 Bedrooms', '3 Bedrooms', '4 Bedrooms', '5 Bedrooms'].map((bedroom) => (
                                    <li
                                        key={bedroom}
                                        className="p-2 hover:bg-[#E6F6F4] cursor-pointer"
                                        onClick={() => handleSelection(bedroom)}
                                    >
                                        {bedroom}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <h2 className='mb-8 text-3xl font-cocogoosebold text-[#3A3937]'>Maid Room?</h2>
                    <button
                        className={`rounded-full font-cairo w-96 h-14 my-2 py-2 pl-6 text-left ${formData.maidRoom === 'yes' ? 'border-2 border-[#168B70] text-[#168B70] bg-white' : 'border border-gray-400 text-black bg-white'
                            } hover:border-[#168B70] hover:text-[#168B70]`}
                        onClick={() => handleChange({ target: { name: 'maidRoom', value: 'yes' } })}
                    >
                        A. Yes
                    </button>
                    <button
                        className={`rounded-full font-cairo w-96 h-14 my-2 py-2 pl-6 text-left ${formData.maidRoom === 'no' ? 'border-2 border-[#168B70] text-[#168B70] bg-white' : 'border border-gray-400 text-black bg-white'
                            } hover:border-[#168B70] hover:text-[#168B70]`}
                        onClick={() => handleChange({ target: { name: 'maidRoom', value: 'no' } })}
                    >
                        B. No
                    </button>
                    <button
                        className={`rounded-full font-cairo w-96 h-14 my-2 py-2 pl-6 text-left ${formData.maidRoom === 'optional' ? 'border-2 border-[#168B70] text-[#168B70] bg-white' : 'border border-gray-400 text-black bg-white'
                            } hover:border-[#168B70] hover:text-[#168B70]`}
                        onClick={() => handleChange({ target: { name: 'maidRoom', value: 'optional' } })}
                    >
                        C. Optional
                    </button>

                </div>
                <div className="flex justify-start mt-8">
                <button
                        className="text-white font-cocogoose btn z-50 bg-gray-400 rounded-full w-40 h-14 align border-1 my-2 py-2 transition duration-300 ease-in-out transform hover:bg-gray-600 hover:scale-105 shadow-lg"
                        onClick={prev}
                    >
                        Prev
                    </button>
                    <button
                        className="text-white font-cocogoose btn z-50 bg-[#168B70] rounded-full w-40 h-14 align border-1 mx-4 my-2 py-2 transition duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105 shadow-lg"
                        onClick={nextPage}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Form5;
