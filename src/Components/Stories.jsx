import React from 'react';
import Slider from 'react-slick';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const PreviousArrow = ({ onClick }) => (
  <div
    className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-[#168B70] hover:text-white"
    onClick={onClick}
  >
    <IoIosArrowDropleft className="text-[#3A3937] w-10 h-10 hover:text-white" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-[#168B70] hover:text-white"
    onClick={onClick}
  >
    <IoIosArrowDropright className="text-[#3A3937] w-10 h-10 hover:text-white" />
  </div>
);

const Stories = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="relative w-full py-14 px-12 bg-[#E6F6F4] flex flex-col md:flex-row items-center">
      <img
        loading="lazy"
        src="assets/images/circle.svg"
        className="absolute top-15 left-0 w-[600px] h-auto z-0 opacity-100"
      />
      <div className="relative w-full md:w-1/4 md:px-14 z-10 mt-20 text-center md:text-left">
        <h2 className="text-4xl font-bold text-[#3A3937] mb-8">Success<br /> stories</h2>
        <div className="hidden md:flex items-center justify-start space-x-4 mt-20">
          <PreviousArrow onClick={() => sliderRef.current.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>
      <div className="relative w-2/3 px-4 z-10 mt-8 md:mt-0">
        <Slider ref={sliderRef} {...settings}>
          <div className="p-4 w-full">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="assets/images/s1.png" alt="Happy Customers In Dubai" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-lg">Happy Customers In Dubai</h3>
                <p className="text-gray-600 mt-2">
                  We were impressed by SweetHome team's ability to understand our needs. With limited number of visits,
                  they found us a beautiful villa near to our kids' school and our workplace.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 w-full">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="assets/images/s2.png" alt="Happy Successful Agent" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-lg">Happy Successful Agent</h3>
                <p className="text-gray-600 mt-8">
                  My collaboration with SweetHome team was seamless. They helped me find a serious tenant and rented my landlord's villa in less than one week.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 w-full">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="assets/images/s3.png" alt="HR Caring About Employee's Happiness And Efficiency" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-lg">HR Caring About Employee's Happiness And Efficiency</h3>
                <p className="text-gray-600 mt-2">
                  We are partnering with SweetHome to ensure hassle-free onboarding experience for our new employees coming to Dubai.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Stories;
