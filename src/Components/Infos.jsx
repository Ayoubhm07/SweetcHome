import React from 'react';
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const Infos = () => {
  return (
    <div className=" hidden md:flex justify-between items-center h-18 mt-4 bg-[#3A3937] p-4 text-white">
      <div className="flex items-center mx-20">
        <span className='mx-1'><MdOutlinePhoneInTalk  /></span>
        <span className='font-cairo'>+971 (05) 85581876</span>
      </div>
      <div className="flex items-center font-cocogoose ">
        <span className="text-[#D9C34C]">Real Estate Matchmaking</span>
        <span className="ml-1 text-[#168B70]">With Care!</span>
      </div>
      <div className="flex items-center mx-20">
        <span className='mx-2'><MdOutlineMail/></span>
        <span className='font-cairo'>Wecare@Sweethome.Com</span>
      </div>
    </div>
  );
};

export default Infos;
