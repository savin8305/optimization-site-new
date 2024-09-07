import React from "react";
import { InfiniteMovingCardsDemo } from "../ui/HeroSection";
import { SwipeCarousel } from "./Common/slider";
import AnimatedText from "../ui/AnimatedText";

const HomeTestimonial: React.FC = () => {
  const textData = {
    sectionTitle: "Testimonials",
    desktopHeadings: {
      line1: "Don’t Just Take",
      line2: "Our Word for it"
    },
    desktopSubHeading: "See What Our Clients Are Saying About Us",
    mobileSubHeading: "See What Our Clients Are Saying About Us",
    satisfiedCustomers: {
      number: "1000",
      text: "Satisfied Customers",
      plusSymbol: "+"
    }
  };

  return (
    <div className="flex flex-col lg:flex-row py-4 h-screen z-20 max-w-7xl mx-auto relative overflow-hidden">
      <div className="px-2 w-full h-[45%] lg:h-full lg:w-1/3 flex flex-col">
        {/* Section Title */}
        <h6 className="text-xl text-red-500 text-center lg:text-justify border-white pb-3 lg:pb-0 border-b-[1px] lg:border-none lg:ml-6 lg:text-2xl font-montserrat lg:leading-tight font-bold">
          {textData.sectionTitle}
        </h6>

        {/* Desktop View */}
        <div className="hidden lg:flex flex-col">
          <h2 className="lg:text-5xl font-bold ml-4 mt-20">
            {textData.desktopHeadings.line1}
          </h2>
          <h2 className="text-5xl flex flex-row font-bold ml-4 mt-6">
            {textData.desktopHeadings.line2.split(' ')[0]}
            <span className="relative ml-1">
              <AnimatedText
                blockClassName="h-full rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500"
                className="text-5xl text-black font-bold"
                text={textData.desktopHeadings.line2.split(' ').slice(1).join(' ')}
              />
            </span>
          </h2>
          <h4 className="mt-20 text-lg text-center font-poppins">
            {textData.desktopSubHeading}
          </h4>
        </div>

        {/* Mobile View */}
        <div className="flex w-full mt-2 justify-between lg:hidden flex-row">
          <h4 className="text-sm w-1/2 text-center font-poppins">
            {textData.mobileSubHeading}
          </h4>
          <div className="h-12 border-white w-1 border-l-[1px]"></div>
          <div className="flex text-center text-sm w-1/2 flex-col ">
            <div className="flex text-[#483d78] text-lg items-center justify-center flex-row">
              <AnimatedText text={textData.satisfiedCustomers.number} />
              <span className="text-red-500">{textData.satisfiedCustomers.plusSymbol}</span>
            </div>
            {textData.satisfiedCustomers.text}
          </div>
        </div>

        <SwipeCarousel />
      </div>

      {/* Infinite Moving Cards */}
      <div className="w-full h-[55%] mt-8 lg:mt-0 lg:w-2/3 relative lg:h-full">
        <InfiniteMovingCardsDemo />
      </div>
    </div>
  );
};

export default HomeTestimonial;
