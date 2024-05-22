import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaExclamationCircle } from 'react-icons/fa';


const Form1 = ({ formData, handleChange, next }) => {
    const nextPage = () => {
        if (!formData.page1) {
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

    return (
        <div className="flex h-screen relative">
            <img src="/assets/images/lotus.svg" className="absolute right-0 bottom-0 w-50 h-100 z-50" alt="Lotus" />
            <div className="w-2/5 relative">
                <img src='/assets/images/f1.png' alt="Step 1"
                    className="absolute left-0 bottom-0 z-10 w-full h-full object-cover" />
            </div>
            <div className="w-3/5 relative flex flex-col justify-center items-start pl-24 bg-[#E6F6F4]">
                <div className='flex flex-col'>
                    <div className='flex mb-3 space-x-2'>
                        <img src="/assets/images/line.svg" alt="line" />
                        <h6 className='font-cairo text-2xl text-[#168B70] '>Start</h6>
                    </div>
                    <h2 className='mb-8 text-3xl font-cocogoosebold text-[#3A3937]'>Are you looking to?</h2>
                    <button
                        className={`rounded-full font-cairo w-96 h-14 my-2 py-2 pl-6 text-left ${formData.page1 === 'buy' ? 'border-2 border-[#168B70] text-[#168B70] bg-white' : 'border border-gray-400 text-black bg-white'
                            } hover:border-[#168B70] hover:text-[#168B70]`} onClick={() => handleChange({ target: { name: 'page1', value: 'buy' } })}
                    >
                        A. Buy
                    </button>
                    <button
                        className={`rounded-full font-cairo w-96 h-14 my-2 py-2 pl-6 text-left ${formData.page1 === 'sell' ? 'border-2 border-[#168B70] text-[#168B70] bg-white' : 'border border-gray-400 text-black bg-white'
                            } hover:border-[#168B70] hover:text-[#168B70]`} onClick={() => handleChange({ target: { name: 'page1', value: 'sell' } })}
                    >
                        B. Sell
                    </button>
                </div>
                <div className="flex justify-start mt-8">
                    <button
                        className="text-white font-cocogoose btn z-50 bg-[#168B70] rounded-full w-40 h-14 mt-48 align border-1 my-2 py-2 transition duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105 shadow-lg"
                        onClick={nextPage}
                    >
                        Let's Start
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Form1;
