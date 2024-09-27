import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaRegPaperPlane,
  FaCoffee,
  FaUtensils,
  FaShoppingBag,
  FaConciergeBell,
  FaStarHalf,
} from "react-icons/fa";

const Stepper: React.FC<{ onStepChange: (index: number) => void }> = ({
  onStepChange,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const stepperRef = useRef<HTMLDivElement>(null);

  const steps = [
    { name: "All paper Products", icon: <FaRegPaperPlane /> },
    { name: "Paper cup machines", icon: <FaCoffee /> },
    { name: "Paper bowl machines", icon: <FaUtensils /> },
    { name: "Paper bag machines", icon: <FaShoppingBag /> },
    { name: "Paper plate machines", icon: <FaConciergeBell /> },
    { name: "Paper straw machines", icon: <FaStarHalf /> },
    { name: "Paper wrap machines", icon: <FaRegPaperPlane /> },
    { name: "Napkin machines", icon: <FaCoffee /> },
    { name: "Tissue machines", icon: <FaUtensils /> },
    { name: "new products", icon: <FaShoppingBag /> },
    { name: "Other products", icon: <FaShoppingBag /> },
    { name: "Paper plate machines", icon: <FaConciergeBell /> },
    { name: "Paper straw machines", icon: <FaStarHalf /> },
    { name: "Paper wrap machines", icon: <FaRegPaperPlane /> },
    { name: "Napkin machines", icon: <FaCoffee /> },
    { name: "Tissue machines", icon: <FaUtensils /> },
    { name: "new products", icon: <FaShoppingBag /> },
    { name: "Other products", icon: <FaShoppingBag /> },
  ];

  const handleClick = (index: number) => {
    setActiveStep(index);
    onStepChange(index);
  };




  const [scrolling, setScrolling] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const navTop = navRef.current?.getBoundingClientRect().top || 0;
      if (navTop <= 56) {
        setScrolling(true);
        // console.log(navTop);
      } else {
        setScrolling(false);
        // console.log("hello", navTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolling]);

  return (
    <div
      ref={navRef}
      className={`sticky top-14 max-w-screen-2xl left-0 w-full z-40 ${
        scrolling ? "bg-white border-t-[0.5px]" : "bg-[#f2f2f2]"
      }`}
    >
      <div className="relative flex items-center justify-center w-full h-20  mx-auto lg:h-20 ">
        <div className="w-screen">
          <div
            className="relative flex items-center max-w-screen-2xl justify-start overflow-x-scroll scrollbar-hide w-full "
            ref={stepperRef}
          >
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  className={`flex flex-col pt-1 last:pr-[6%]  first:pl-[4%] items-center justify-center relative cursor-pointer ${
                    index === activeStep ? "text-black" : "text-gray-500"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: index === activeStep ? 1 : 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`relative h-8 w-8 flex items-center justify-center text-xl ${
                      index === activeStep
                        ? "bg-[#dc0e2a] text-white rounded-full shadow-lg"
                        : "p-0"
                    }`}
                  >
                    {step.icon}
                  </motion.div>
                  <span className="text-xs lg:text-xs font-regular mt-2 font-poppins text-center w-20 lg:w-20">
                    {step.name}
                  </span>
                </motion.div>
                {index < steps.length - 1 && (
                  <div className="flex items-center">
                    <div className="h-1 border-t-2 w-4 lg:w-10"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
