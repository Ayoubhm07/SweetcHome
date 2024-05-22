import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaExclamationCircle } from 'react-icons/fa';
import { PiMapPinLine } from 'react-icons/pi';
import Papa from 'papaparse';

const Form7 = ({ formData, handleChange, next ,prev}) => {
    const [areas, setAreas] = useState([]);
    const [filteredAreas, setFilteredAreas] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        Papa.parse('dubai_neighborhood.csv', {
            download: true,
            header: false,  // assuming the CSV does not have a header
            complete: (results) => {
                const parsedAreas = results.data.map(row => row[1]); // Extract the second column
                setAreas(parsedAreas);
            }
        });
    }, []);

    const handleInputChange = (e) => {
        const { value } = e.target;
        handleChange({ target: { name: 'area', value } });

        if (value) {
            const filtered = areas.filter(area =>
                area && area.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredAreas(filtered);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    };

    const handleAreaClick = (area) => {
        handleChange({ target: { name: 'area', value: area } });
        setShowDropdown(false);
    };

    const nextPage = () => {
        if (!formData.area) {
            toast.error('Please select an area', {
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
                <img src='/assets/images/f7.png' alt="Step 1"
                    className="absolute left-0 bottom-0 top-0 z-10 w-full h-full object-cover" />
            </div>
            <div className="w-3/5 relative flex flex-col justify-center items-start pl-24 bg-white">
                <div className='flex flex-col'>
                    <div className='flex mb-4 space-x-2'>
                        <img src="/assets/images/line.svg" alt="line" />
                        <h6 className='font-cairo text-2xl text-[#168B70]'>6/7</h6>
                    </div>
                    <h2 className='mb-8 text-3xl font-cocogoosebold text-[#3A3937]'>In which area of Dubai?</h2>
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Lorem Ipsum"
                            value={formData.area || ''}
                            onChange={handleInputChange}
                            className="w-full h-14 pl-6 pr-12 rounded-full border border-gray-400 text-black focus:border-[#168B70] focus:text-[#168B70] font-cairo"
                        />
                        <PiMapPinLine
                            className="absolute size-6 right-4 top-3 text-[#168B70] cursor-pointer"
                        />
                        {showDropdown && (
                            <ul className="absolute w-full bg-white border border-gray-400 rounded-lg mt-1 max-h-48 overflow-y-auto">
                                {filteredAreas.map((area, index) => (
                                    <li
                                        key={index}
                                        className="p-2 hover:bg-[#E6F6F4] cursor-pointer"
                                        onClick={() => handleAreaClick(area)}
                                    >
                                        {area}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="flex justify-start mt-80">
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

export default Form7;
