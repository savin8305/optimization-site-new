"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { related_product } from "./Feature.json";
import { FaArrowCircleRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

interface Page4Props {
  page4product: {
    imageWithDescription: {
      img: string;
      h1: string;
      h2: string;
      h3: string;
      image: string;
      information: string;
      sInformation: string;
      imageInformation: string;
      s: string;
    }[];
  };
}

const FeatureProjects: React.FC<Page4Props> = ({ page4product }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const borderRef = useRef<HTMLDivElement | null>(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null); // Track which card is hovered

  const scrollbarLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollbarRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (borderRef.current) {
      gsap.fromTo(
        borderRef.current,
        { width: "10%" },
        {
          width: "95%",
          ease: "none",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "-80% 80%",
            end: "70% 85%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <>
      <div className="w-full h-[35vh] px-10 font-poppins font-regular max-w-screen-2xl mx-auto">
        <div
          ref={borderRef}
          className="border-t-[0.1rem] border-solid border-[#f2f2f2] w-[10%] lg:mx-[2rem] mx-[1rem]"
        ></div>
        <div className="flex flex-row rounded-2xl lg:my-[1vh] bg-white p-2 ">
          <div className=" flex w-[20%] pt-2 flex-col relative items-center">
            <div className="lg:text-2xl text-center  text-[1.8rem]">
              <h2 className="text-[#483d73] font-medium">
                {related_product?.title.trim().replace(/\s+\S+$/, "")}
              </h2>{" "}
              <h2 className="text-[#dc0e2a] font-semibold">
                {related_product?.title.trim().match(/\S+$/)}
              </h2>
            </div>
            <p className="text-center text-[0.7rem] font-medium pt-2  w-[60%]">
              {related_product?.description}
            </p>
            <div className="flex flex-row justify-between">
              <button
                className="text-[#cccaca] absolute left-16 bottom-2  lg:text-[1.5rem] text-[1.8rem]  hover:text-black"
                onClick={scrollbarLeft}
                aria-label="LeftScroll"
              >
                <IoIosArrowDropleftCircle />
              </button>
              <button
                className="text-[#cccaca] absolute right-16 bottom-2  lg:text-[1.5rem] text-[1.8rem]  hover:text-black"
                onClick={scrollbarRight}
                aria-label="RightScroll"
              >
                <IoIosArrowDroprightCircle />
              </button>
            </div>
          </div>
          {/* Main Carousel Container */}
          <div className="w-full  h-[28vh] flex items-center overflow-hidden">
            <div
              className="overflow-auto scrollbar-hide px-1 "
              ref={carouselRef}
            >
              <div className="w-max flex items-center justify-center space-x-2">
                {page4product.imageWithDescription.map((item, idx) => (
                  <div
                    key={idx}
                    className={`relative h-[28vh] lg:w-[13vw] w-[70vw] bg-gradient-to-b from-[#f5f5f5] to-[#f2f2f2] rounded-lg transition-all duration-300 ${
                      hoveredCardIndex === idx ? "bg-[#f0f0f0]" : ""
                    }`}
                    // Add mouse event handlers conditionally based on viewport
                    onMouseEnter={() => setHoveredCardIndex(idx)}
                    onMouseLeave={() => setHoveredCardIndex(null)}
                  >
                    {/* Icons */}
                    <div className="absolute top-0 right-2 flex space-x-2">
                      <div className="w-12 h-12  rounded-full flex items-center justify-center relative group">
                        <Image
                          src={item.image}
                          alt="asdfghjkl"
                          width={400}
                          height={400}
                          className="hover:scale-90 transition-all duration-300 "
                        />
                        <div className="hidden group-hover:flex absolute top-10 left-5 bg-white border border-gray-300 rounded-md shadow-md px-2 py-1 h-max w-max z-20">
                          <p className="lg:text-[0.7rem] text-[0.7rem] text-black">
                            {item.information}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Title */}
                    <div className="p-2 font-poppins">
                      <h2 className="lg:text-xs font-semimedium w-[65%]">
                        {item.h1}
                      </h2>
                    </div>
                    {/* Image */}
                    <div className="flex justify-center items-center">
                      <div className="w-full px-2 hover:px-0 transition-all duration-300 lg:h-[14vh] mt-1 flex justify-center items-center">
                        <Image
                          className="object-cover"
                          src={item.img}
                          alt=""
                          width={400}
                          height={400}
                        />
                      </div>
                    </div>
                    {hoveredCardIndex !== idx ? (
                      ""
                    ) : (
                      <div className="flex w-full items-center justify-center absolute bottom-[5%]">
                        <button className="text-[0.6rem] font-medium mr-1">
                          View Machine
                        </button>
                        <FaArrowCircleRight className={`text-xs`} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProjects;
