"use client";
import React from "react";
import { motion } from "framer-motion";
import PositionAwareButton from "../ui/PositionAwareButton";
import ImageSlider from "../ui/ImageSlider";
import FeatureProducts from "./FeatureProjects";
import data from "../Constants/hero.json";
const Home: React.FC = () => {
  const homeData = data.find((item) => item.category === "HeroSection")?.data;

  return (
    <>
      <div className="relative  h-full p-0   flex flex-col items-center overflow-hidden  w-screen">
        <div className="relative px-4 lg:px-10 w-full flex-wrap">
          <motion.div className=" w-full flex justify-center items-center h-[calc(100vh-100px)] lg:h-[52vh] rounded-3xl">
            <ImageSlider />
          </motion.div>
        </div>
        <div className="absolute h-auto w-[80%] lg:w-auto  left-8 top-1/3 lg:top-[38%] lg:left-28 flex-col text-7xl text-white font-alexBrush">
          <h1 className="text-3xl text-center lg:text-start mx-2 md:text-2xl lg:text-5xl font-poppins font-light">
            {homeData?.textOverlay?.headline}
            <div className="text-3xl  lg:text-6xl text-[#f2f2f2] font-poppins font-semibold ">
              {homeData?.textOverlay?.subheadline}
            </div>
          </h1>
         
        </div>
        <div className="absolute flex flex-col w-1/2  lg:w-[20rem] lg:h-[5rem] lg:rounded-tl-[2rem] rounded-tl-[1.5rem] right-0 bg-[#f5f5f5] lg:bottom-0 bottom-0 text-3xl font-poppins text-white text-center">
          <motion.div className="-mt-4 lg:-mt-6 flex mr-2 lg:mr-8 justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 20 20"
              fill="none"
              className="flex  h-4 w-8 lg:h-6 lg:w-10"
            >
              <path
                d="M20 20C20 8.95431 11.0457 0 0 0H20V20Z"
                fill="#f2f2f2"
                transform="rotate(90 10 10)"
              ></path>
            </svg>
          </motion.div>
          <div className="w-full mt-4 ml-8 hidden lg:flex  justify-start">
            <PositionAwareButton
              borderWidth="1px"
              iconSize="50"
              icon
              height="55px"
              padding="2px"
              width="230px"
              fontSize="22px"
              borderRadius="100px"
              text={"Get a Quote"}
            />
          </div>
          <div className=" lg:hidden mt-2 -ml-2 items-center flex justify-center">
            <PositionAwareButton
              borderWidth="1px"
              iconSize="30px"
              icon
              height="40px"
              padding="5px"
              width="150px"
              fontSize="16px"
              borderRadius="100px"
              text={"Get a Quote"}
            />
          </div>
          <div className=" z-50 -mt-[0.95rem] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 20 20"
              fill="none"
              className="lg:-ml-[2rem] -ml-6 h-4 w-8  lg:h-6 lg:w-10"
            >
              <path
                d="M20 20C20 8.95431 11.0457 0 0 0H20V20Z"
                fill="#f2f2f2"
                transform="rotate(90 10 10)"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <FeatureProducts />
    </>
  );
};
Home.displayName = "Hero";
export default React.memo(Home);
