import React from 'react';
import {MdKeyboardArrowRight} from "react-icons/md";
import {FaFacebookMessenger} from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { PiFacebookLogoFill } from "react-icons/pi";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { AiFillMail } from "react-icons/ai";


const Footer = () => {
    return (
      <div className='bg-white'>
        <div className="relative top-10 bg-[#168B70] p-2 h-70">
            <img src="assets/images/how2.svg" className="absolute size-60 w-[250px] h-[300px] bottom-0 right-0 " />
            <div className=" flex flex-col items-start mt-12 ml-16 mb-8 lg:flex-row justify-start space-y-1  space-x-20">
                <div className="flex flex-col items-start text-white text-center     mt-5 lg:w-1/5 lg:text-left">
                    <div className='mx-auto'>
                        <img src='assets/images/logo.png' alt='logo' className='mx-auto  w-[150px] ml-1 ' />

                    </div>
                    <p className="mt-10 font-cocogoose text-sm">Our innovative digital platform offers a personalized solution that meets your every need and preference.</p>
                </div>
                <div className="relative my-auto flex flex-col lg:flex-row lg:space-x-32 sm:flex-row sm:space-x-20  ml-12 mt-16 mb-8  items-start">
                    <div className="flex flex-col space-y-5 my-8">
                        <h3 className="font-cocogoosebold font-bold text-1xl text-white capitalize">Quick Links</h3>
                        <div className="flex flex-row space-x-16  justify-between w-full">
                            <div className='flex flex-col space-y-5'>
                            <a className="flex flex-row space-x-1 items-center" href="/rent">
                                <MdKeyboardArrowRight className='text-white size-8'/>
                                <span className="text-sm text-white font-cocogoose">Rent</span>
                            </a>
                            <a className="flex flex-row space-x-1 items-center" href="/agents">
                                <MdKeyboardArrowRight className='text-white size-8'/>
                                <span className=" text-white text-sm font-cocogoose">Switch</span>
                            </a>
                            <a className="flex flex-row space-x-1 items-center" href="/switch">
                                <MdKeyboardArrowRight className='text-white size-8'/>
                                <span className="text-sm text-white font-cocogoose">Corporate</span>
                            </a>
                            </div>
                            <div className='flex flex-col space-y-5'>
                            <a className="flex flex-row space-x-1 items-center" href="/landlords">
                                <MdKeyboardArrowRight className='text-white size-8'/>
                                <span className="text-sm text-white font-cocogoose">Agents</span>
                            </a>
                            <a className="flex flex-row space-x-1 items-center" href="/buysell">
                                <MdKeyboardArrowRight className='text-white size-8'/>
                                <span className="text-sm text-white font-cocogoose">Landlords</span>
                            </a>
                            <a className="flex flex-row space-x-1 items-center" href="/corporate">
                                <MdKeyboardArrowRight className='text-white size-8'/>
                                <span className="text-sm text-white font-cocogoose">Buy/Sell</span>
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-5 my-8">
                        <h3 className="font-cocogoosebold font-bold text-1xl text-white capitalize">Contact Us</h3>
                        <div className="flex flex-col space-y-5">
                            <a href="https://wa.me/+971585525503?text= Hello"
                               className="hover:text-white text-white no-underline font-cairo">Mobile:
                                +971 (05) 85581876</a>
                            <a className="hover:text-white text-white no-underline font-cairo"
                               href="mailto:wecare@sweetchome.com">Email: Wecare@Sweetchome.Com</a>
                            <ul className="flex flex-wrap">
                                <li className="ml-2 mt-2 flex items-center justify-center text-white border rounded-full px-3 py-2 cursor-pointer">
                                    <a href="https://www.linkedin.com/company/sweetchome/"
                                       className="flex items-center">
                                        <ImTwitter/>
                                    </a>
                                </li>
                                <li className="ml-2 mt-2 flex items-center justify-center text-white border rounded-full px-3 py-3 cursor-pointer">
                                    <a href="https://www.facebook.com/SweetcHomeRE?mibextid=ZbWKwL"
                                       className="flex items-center">
                                        <PiFacebookLogoFill/>
                                    </a>
                                </li>
                                <li className="ml-2 mt-2 flex items-center justify-center text-white border rounded-full px-3 py-3 cursor-pointer">
                                    <a href="https://www.instagram.com/sweetchome_re/?igshid=YTQwZjQ0NmI0OA%3D%3D"
                                       className="flex items-center">
                                        <FaFacebookMessenger/>
                                    </a>
                                </li>
                                <li className="ml-2 mt-2 flex items-center justify-center text-white border rounded-full px-3 py-3 cursor-pointer">
                                    <a href="https://wa.me/+971585525503?text= Hello"
                                       className="flex items-center">
                                        <PiWhatsappLogoFill/>
                                    </a>
                                </li>
                                <li className="ml-2 mt-2 flex items-center justify-center text-white  border rounded-full px-3 py-3 cursor-pointer">
                                    <a href="mailto:wecare@sweetchome.com"
                                       className="flex items-center ">
                                        <AiFillMail/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    );
};

export default Footer;
