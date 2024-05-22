import React from 'react';
import { useState } from 'react';
import { HiMenuAlt1 } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";


function NavBar () {
 const [nav, setNav] = useState(false);

 const handleNav = () => {
        setNav(!nav);
       };
  return (
    <nav className="font-cocogoose bg-white border-b border-gray-300 p-4 flex justify-between items-center">
      <div onClick={handleNav} className='block md:hidden'>
            <HiMenuAlt1 className='size-10'/>:
      </div>
      <div className="flex items-center">
        <img src="assets/images/logo.svg" alt="SweetHome Logo" className="h-20 mr-2 mx-20" />
      </div>
      <div className="flex text-sm mu-2 flex-row items-center space-x-4 hidden md:flex ">
        <a href="#" className="text-[#3A3937] hover:text-[#168B70]">Rent</a>
        <a href="#" className="text-[#3A3937] hover:text-[#168B70]">Switch</a>
        <a href="#" className="text-[#3A3937] hover:text-[#168B70]">Corporate</a>
        <a href="#" className="text-[#3A3937] hover:text-[#168B70]">Agents</a>
        <a href="#" className="text-[#3A3937] hover:text-[#168B70]">Landlords</a>
        <a href="#" className="text-[#168B70] hover:text-[#3A3937]">Buy/Sell</a>
        <a href="#" className="text-[#3A3937] hover:text-[#168B70]">Blog</a>
        <a href="#" className="text-[#3A3937] hover:text-[#168B70]">About Us</a>
        <a href="#" className="text-[#3A3937] hover:text-[#168B70]">Contact Us</a>
      </div>
      <div className='hidden md:flex xl:relative'>
            <button
                className="w-32 h-10 mr-20 bg-[#168B70] hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                Log in
            </button>
      </div>
      <div className='block md:hidden'>
         <IoPersonOutline className='size-10'/>
      </div>
    </nav>
  );
};

export default NavBar;
