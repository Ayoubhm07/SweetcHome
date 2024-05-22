import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaExclamationCircle } from 'react-icons/fa';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useNavigate } from 'react-router-dom';


const Form8 = ({ formData, handleChange, next ,prev}) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/thanks');
    };

    const [minPrice, setMinPrice] = useState(formData.minPrice || '');
    const [maxPrice, setMaxPrice] = useState(formData.maxPrice || '');
    const [showSlider, setShowSlider] = useState(false);
    const [inputFocused, setInputFocused] = useState(false);

    const onSliderChange = ([min, max]) => {
        setMinPrice(min);
        setMaxPrice(max);
        handleChange({ target: { name: 'minPrice', value: min } });
        handleChange({ target: { name: 'maxPrice', value: max } });
    };

    const nextPage = () => {
        if (minPrice === '' || maxPrice === '') {
            toast.error('Please fill in all fields', {
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

        if (parseFloat(minPrice) > parseFloat(maxPrice)) {
            toast.error('Min price cannot be greater than max price', {
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

        handleChange({ target: { name: 'minPrice', value: minPrice } });
        handleChange({ target: { name: 'maxPrice', value: maxPrice } });

        next();
    };

    return (
        <div className="flex h-screen relative">
            <img src="/assets/images/lotus.svg" className="absolute right-0 bottom-0 w-50 h-100 z-50" alt="Lotus" />
            <div className="w-2/5 relative">
                <img src='/assets/images/f8.png' alt="Step 1"
                    className="absolute left-0 bottom-0 top-0 z-10 w-full h-full object-cover" />
            </div>
            <div className="w-3/5 relative flex flex-col justify-center items-start pl-24 bg-white">
                <div className='flex flex-col'>
                    <div className='flex mb-4 space-x-2'>
                        <img src="/assets/images/line.svg" alt="line" />
                        <h6 className='font-cairo text-2xl text-[#168B70]'>7/7</h6>
                    </div>
                    <h2 className='mb-8 text-3xl font-cocogoosebold text-[#3A3937]'>Price of the property?</h2>
                    <div className="relative w-full mb-4">
                        <div className={`flex w-full h-14 pl-6 pr-12 rounded-full border ${inputFocused || (minPrice && maxPrice) ? 'border-[#168B70] text-[#168B70]' : 'border-gray-400 text-black'} font-cairo items-center`}>
                            <input
                                type="number"
                                placeholder="Min (AED)"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                                className="w-1/2 h-full bg-transparent focus:outline-none"
                                onFocus={() => { setShowSlider(true); setInputFocused(true); }}
                                onBlur={() => setInputFocused(false)}
                                min="0"
                            />
                            <input
                                type="number"
                                placeholder="Max (AED)"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                                className="w-1/2 h-full bg-transparent focus:outline-none"
                                onFocus={() => { setShowSlider(true); setInputFocused(true); }}
                                onBlur={() => setInputFocused(false)}
                                min="0"
                            />
                        </div>
                    </div>
                    {showSlider && (
                        <div className="w-full mb-8">
                            <Slider
                                range
                                min={0}
                                max={1000000}
                                defaultValue={[minPrice || 0, maxPrice || 1000000]}
                                value={[minPrice || 0, maxPrice || 1000000]}
                                onChange={onSliderChange}
                                trackStyle={[{ backgroundColor: '#168B70' }]}
                                handleStyle={[
                                    { borderColor: '#168B70' },
                                    { borderColor: '#168B70' }
                                ]}
                                railStyle={{ backgroundColor: '#d9d9d9' }}
                            />
                        </div>
                    )}
                    <h2 className='mb-8 text-3xl font-cocogoosebold text-[#3A3937] mt-10'>Are you flexible with your price?</h2>
                    <button
                        className={`rounded-full font-cairo w-96 h-14 my-2 py-2 pl-6 text-left ${formData.flexiblePrice === 'yes' ? 'border-2 border-[#168B70] text-[#168B70] bg-white' : 'border border-gray-400 text-black bg-white'} hover:border-[#168B70] hover:text-[#168B70]`}
                        onClick={() => handleChange({ target: { name: 'flexiblePrice', value: 'yes' } })}
                    >
                        Yes
                    </button>
                    <button
                        className={`rounded-full font-cairo w-96 h-14 my-2 py-2 pl-6 text-left ${formData.flexiblePrice === 'no' ? 'border-2 border-[#168B70] text-[#168B70] bg-white' : 'border border-gray-400 text-black bg-white'} hover:border-[#168B70] hover:text-[#168B70]`}
                        onClick={() => handleChange({ target: { name: 'flexiblePrice', value: 'no' } })}
                    >
                        No
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
                        onClick={handleClick}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Form8;
