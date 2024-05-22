import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaExclamationCircle } from 'react-icons/fa';
import { LuCalendarCheck } from 'react-icons/lu';

const Form3 = ({ formData, handleChange, next, prev }) => {
    const [isOpenOffPlan, setIsOpenOffPlan] = useState(false);
    const [isOpenSell, setIsOpenSell] = useState(false);
    const [isOpenBuy, setIsOpenBuy] = useState(false);

    const nextPage = () => {
        if (
            (formData.propertyType === 'Ready' && (!formData.sellDate || !formData.buyDate)) ||
            (formData.propertyType === 'Off-Plan' && !formData.offPlanDate)
        ) {
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

        next();
    };

    return (
        <div className="flex h-screen relative">
            <img src="/assets/images/lotus.svg" className="absolute right-0 bottom-0 w-50 h-100 z-50" alt="Lotus" />
            <div className="w-2/5 relative">
                <img src='/assets/images/f3.png' alt="Step 1"
                    className="absolute left-0 bottom-0 z-10 w-full h-full object-cover" />
            </div>
            <div className="w-3/5 relative flex flex-col justify-around pl-24 bg-white overflow-auto">
                <div className='flex flex-col justify-between mt-20'>
                    <div className='flex mb-3 space-x-2'>
                        <img src="/assets/images/line.svg" alt="line" />
                        <h6 className='font-cairo text-2xl text-[#168B70]'>2/7</h6>
                    </div>
                    <h2 className='mb-8 mt-2 text-3xl font-cocogoosebold text-[#3A3937]'>When is the property ready for?</h2>
                    <div className='mb-4'>
                        <h3 className='mb-4 font-cocogoosebold text-xl text-[#3A3937]'>For Off-Plan Property:</h3>
                        <label className='mb-4 font-cairo text-2xl'>Select date for property handover:</label>
                        <div className="mt-2 mb-4 relative">
                            <DatePicker
                                selected={formData.offPlanDate}
                                onChange={(date) => handleChange({ target: { name: 'offPlanDate', value: date } })}
                                dateFormat="dd/MM/yyyy"
                                className={`w-96 h-14 rounded-full border ${formData.offPlanDate ? 'border-[#168B70] text-[#168B70]' : 'border-gray-400'} pl-6 pr-12 text-left ${formData.propertyType === 'Ready' ? 'opacity-50' : ''}`}
                                placeholderText="dd/MM/yyyy"
                                onClickOutside={() => setIsOpenOffPlan(false)}
                                onSelect={() => setIsOpenOffPlan(false)}
                                open={isOpenOffPlan}
                                onChangeRaw={(e) => {
                                    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(e.target.value)) {
                                        e.preventDefault();
                                    }
                                }}
                                readOnly={formData.propertyType === 'Ready'}
                            />
                            {formData.propertyType !== 'Ready' && (
                                <LuCalendarCheck
                                    className="absolute size-6 left-80 top-4 text-[#168B70] cursor-pointer"
                                    onClick={() => setIsOpenOffPlan(!isOpenOffPlan)}
                                />
                            )}
                        </div>
                    </div>
                    <div className='mb-4'>
                        <h3 className='mb-4 font-cocogoosebold text-xl text-[#3A3937]'>For Ready Property:</h3>
                        <label className='mb-4 font-cairo text-2xl'>Select date to sell:</label>
                        <div className="mb-4 mt-2 relative">
                            <DatePicker
                                selected={formData.sellDate}
                                onChange={(date) => handleChange({ target: { name: 'sellDate', value: date } })}
                                dateFormat="dd/MM/yyyy"
                                className={`w-96 h-14 z-50 rounded-full border ${formData.sellDate ? 'border-[#168B70] text-[#168B70]' : 'border-gray-400'} pl-6 pr-12 text-left ${formData.propertyType === 'Off-Plan' ? 'opacity-50' : ''}`}
                                placeholderText="dd/MM/yyyy"
                                onClickOutside={() => setIsOpenSell(false)}
                                onSelect={() => setIsOpenSell(false)}
                                open={isOpenSell}
                                onChangeRaw={(e) => {
                                    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(e.target.value)) {
                                        e.preventDefault();
                                    }
                                }}
                                readOnly={formData.propertyType === 'Off-Plan'}
                            />
                            {formData.propertyType !== 'Off-Plan' && (
                                <LuCalendarCheck
                                    className="absolute size-6 left-80 top-4 text-[#168B70] cursor-pointer"
                                    onClick={() => setIsOpenSell(!isOpenSell)}
                                />
                            )}
                        </div>
                        <label className="mt-4 font-cairo text-2xl">Select date to buy:</label>
                        <div className="mt-2 relative">
                            <DatePicker
                                selected={formData.buyDate}
                                onChange={(date) => handleChange({ target: { name: 'buyDate', value: date } })}
                                dateFormat="dd/MM/yyyy"
                                className={`w-96 h-14 rounded-full border ${formData.buyDate ? 'border-[#168B70] text-[#168B70]' : 'border-gray-400'} pl-6 pr-12 text-left ${formData.propertyType === 'Off-Plan' ? 'opacity-50' : ''}`}
                                placeholderText="dd/MM/yyyy"
                                onClickOutside={() => setIsOpenBuy(false)}
                                onSelect={() => setIsOpenBuy(false)}
                                open={isOpenBuy}
                                onChangeRaw={(e) => {
                                    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(e.target.value)) {
                                        e.preventDefault();
                                    }
                                }}
                                readOnly={formData.propertyType === 'Off-Plan'}
                            />
                            {formData.propertyType !== 'Off-Plan' && (
                                <LuCalendarCheck
                                    className="absolute size-6 left-80 top-4 text-[#168B70] cursor-pointer"
                                    onClick={() => setIsOpenBuy(!isOpenBuy)}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex justify-start mt-4 mb-4">
                    <button
                        className="text-white font-cocogoose btn z-0 bg-gray-400 rounded-full w-40 h-14 align border-1 my-2 py-2 transition duration-300 ease-in-out transform hover:bg-gray-600 hover:scale-105 shadow-lg"
                        onClick={prev}
                    >
                        Prev
                    </button>
                    <button
                        className="text-white font-cocogoose btn z-0 bg-[#168B70] rounded-full w-40 h-14 align border-1 mx-4 my-2 py-2 transition duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105 shadow-lg"
                        onClick={nextPage}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Form3;
