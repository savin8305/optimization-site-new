import {
  papercup,
  paperplate2,
  paperbowl,
  paperlid,
  paperstraw,
  paperbag1,


} from "../../../../public/assets";

import placeholder from "../../../../public/assets/image.png"; 

interface Images {
  paperBagMachineImage:string;
  paperStrawMachine:string;
  paperLunchBoxMachine: string;
  flexoPrintingMachineImage: string;
  slittingMachineImage: string;
  coatingMachineImage: string;
  paperBucketMachineImage: string;
  paperLidMachineImage: string;
  insulatedCupMachineImage: string;
  sleeveMakingMachineImage: string;
  corrugationMachineImage: string;
  paperHandleCupMachineImage: string;
  paperCutleryMachineImage: string;
  plasticLidMachineImage: string;
  paperFormingMachineImage: string;
}

export const images: Images = {
  paperBagMachineImage: "https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBagMachine%20.png",
  paperStrawMachine: "https://assets.nesscoindustries.com/public/assets/nav_machine/PaperStrawMachine.png",
  paperLunchBoxMachine: "https://assets.nesscoindustries.com/public/assets/nav_machine/PaperLunchBoxMachine.png",
  flexoPrintingMachineImage: "https://assets.nesscoindustries.com/public/assets/nav_machine/FlexoPrintingMachine.png",
  slittingMachineImage: "https://assets.nesscoindustries.com/public/assets/image.png", // Use placeholder
  coatingMachineImage: "https://assets.nesscoindustries.com/public/assets/image.png", // Use placeholder
  paperBucketMachineImage: "https://assets.nesscoindustries.com/public/assets/image.png", // Use placeholder
  paperLidMachineImage: "https://assets.nesscoindustries.com/public/assets/image.png", // Use placeholder
  insulatedCupMachineImage: "https://assets.nesscoindustries.com/public/assets/image.png", // Use placeholder
  sleeveMakingMachineImage: "https://assets.nesscoindustries.com/public/assets/image.png", // Use placeholder
  corrugationMachineImage: "https://assets.nesscoindustries.com/public/assets/image.png", // Use placeholder
  paperHandleCupMachineImage: "https://assets.nesscoindustries.com/public/assets/image.png", // Use placeholder
  paperCutleryMachineImage: "https://assets.nesscoindustries.com/public/assets/image.png", // Use placeholder
  plasticLidMachineImage: "https://assets.nesscoindustries.com/public/assets/image.png", // Use placeholder
  paperFormingMachineImage: "https://assets.nesscoindustries.com/public/assets/image.png", // Use placeholder
};


export const Machines = [
  {
    name: "NS-015",
    image: "https://assets.nesscoindustries.com/public/assets/nav_machine/PCM110WithPLC.png",

    mimage: "https://assets.nesscoindustries.com/public/assets/nav_machine/PCM110WithPLC.png",
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Cup Machine, All Products",
    icon: "papercup",
    introduction:
      "The NS-015 is a high-performance paper cup machine designed for efficient production in medium to large scale enterprises. It combines reliability with speed, capable of producing up to 100 cups per minute.",
    parameters: "Voltage: 220V, Power: 1500W",
    application:
      "Ideal for producing paper cups of various sizes, from 6oz to 16oz, suitable for hot and cold beverages.",
    product_description:
      "This machine features a robust stainless steel construction that ensures durability and hygiene standards are met. It includes PLC control for precise operation and minimal wastage.",
    technical_specification: "Material: Stainless steel, Weight: 500kg",
    optional_add_ons: "Custom cup size molds available upon request.",
    faqs: "Q: What is the warranty period? A: 1-year warranty provided for parts and service.",
    related_product: "NS-016, NS-017",
  },
  {
    name: "NS-016",
    image: "https://assets.nesscoindustries.com/public/assets/nav_machine/PCM110WithPLC.png",
    mimage: "https://assets.nesscoindustries.com/public/assets/nav_machine/PCM110WithPLC.png",
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Cup Machine, All Products",
    icon: "papercup",
    introduction:
      "The NS-016 paper cup machine is designed for versatility and efficiency, catering to small to medium-scale enterprises. It offers reliable performance and ease of operation.",
    parameters: "Voltage: 220V, Power: 1500W",
    application:
      "Suitable for producing a variety of paper cup sizes, ranging from 4oz to 12oz, for both hot and cold beverages.",
    product_description:
      "This machine is crafted from lightweight aluminum alloy, making it easy to transport and install. It features a user-friendly interface and low maintenance requirements.",
    technical_specification: "Material: Aluminum alloy, Weight: 450kg",
    optional_add_ons:
      "Automatic cup stacking unit available as an optional accessory.",
    faqs: "Q: How many cups can it produce per minute? A: This machine can produce up to 80 cups per minute.",
    related_product: "NS-015, NS-017",
  },
]
see above is my machine data and that is tooo big so i have just share some now why in my site not able to get that machine image

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Machines,
  SidebarLinks,
  images,
} from "../Constants/Navbar/product-data";
import Image, { StaticImageData } from "next/image";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { BlurImage } from "../ui/BlurImage";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { usePathname } from "next/navigation";

interface ProductLayoutProps {
  setHoveredItem: (item: string | null) => void;
  setHeading: (heading: string | null) => void;
  setIsVisible: (visible: boolean) => void;
}

interface Images {
  [key: string]: StaticImageData;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({
  setHoveredItem,
  setHeading,
  setIsVisible,
}) => {
  const [hoveredCategory, setHoveredCategory] = useState<string>(
    SidebarLinks[0].name
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const [sidebarIndex, setSidebarIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const filteredMachines = Machines.filter((machine) =>
    hoveredCategory ? machine.category.includes(hoveredCategory) : false
  ).map((machine) => ({
    ...machine,
    image: (images as unknown as Images)[machine.image],
  }));

  const totalVisible = 6;

  const handleNext = () => {
    if (currentIndex + totalVisible < filteredMachines.length) {
      setCurrentIndex((prevIndex) => prevIndex + totalVisible);
    }
  };
  const mobilehandleNext = () => {
    if (currentIndex + (totalVisible - 2) < filteredMachines.length) {
      setCurrentIndex((prevIndex) => prevIndex + (totalVisible - 2));
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - totalVisible);
      console.log("Filtered Machines Length:", filteredMachines.length);
      console.log("Current Index:", currentIndex);
    }
  };
  const mobilehandlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - (totalVisible - 2));
      console.log("Filtered Machines Length:", filteredMachines.length);
      console.log("Current Index:", currentIndex);
    }
  };

  const handleSidebarNext = () => {
    setSidebarIndex((prevIndex) => prevIndex + 1);
  };

  const handleSidebarPrev = () => {
    setSidebarIndex((prevIndex) => prevIndex - 1);
  };

  const handleMouseLeave = useCallback(() => {
    setHoveredCategory("");
    setCurrentIndex(0);
    setHoveredItem(null);
    setHeading(null);
    setIsVisible(true);
  }, [setHoveredItem, setHeading, setIsVisible]);

  useEffect(() => {
    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (containerElement) {
        containerElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [handleMouseLeave]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [hoveredCategory]);

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.2,
        ease: "easeInOut",
      },
    }),
  };
  const handleCategoryClick = (linkName: string, heading: string) => {
    setHoveredCategory(linkName);
    setHoveredItem(linkName);
    setHeading(heading);
    setIsVisible(false);
  };

  const sidebarVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.02,
        duration: 0.2,
        ease: "easeOut",
      },
    }),
  };
  // expand feature for mobile
  const [expandedItem, setExpandedItem] = useState<string | null>(null);


  const expandItem = (item: string) => {
    setExpandedItem(expandedItem === item ? null : item);
  };
  const pathname = usePathname() || "";
  const countryCode = pathname.split("/")[1]?.toLowerCase();
  return (
    <div
      ref={containerRef}
      className="w-full lg:w-screen  z-30 h-full  flex max-w-screen-2xl mx-auto  items-start justify-center font-light"
    >
      {/* desktop view condition */}
      <div className="w-full hidden lg:flex flex-col lg:flex-row rounded-lg overflow-hidden">
        <div className="flex  justify-center items-center w-full md:w-3/4 relative">
          {filteredMachines.length > totalVisible && (
            <button
              onClick={handlePrev}
              className={`absolute text-black left-2 z-30 p-0 text-4xl border-2 rounded-full overflow-hidden transition-all ${
                currentIndex === 0 ? "opacity-20" : "opacity-100"
              }`}
              style={{ top: "50%", transform: "translateY(-50%)" }}
              disabled={currentIndex === 0}
            >
              <MdKeyboardArrowLeft />
            </button>
          )}

          <div className="flex flex-wrap justify-start items-start overflow-hidden w-full">
            {filteredMachines.length <= totalVisible
              ? filteredMachines.map((machine, index) => (
                  <motion.div
                    key={`${machine.name}-${index}`}
                    className="text-center relative w-1/3 p-1"
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                  >
                    <a href={`/${countryCode}/products/${machine.name}`}>
                      <Image
                        src={machine.image}
                        alt={machine.name}
                        className="object-contain transform  transition-transform duration-200 rounded-3xl relative z-10 h-32 w-full"
                        width={200}
                        height={150}
                      />
                      <h3 className="text-lg text-black hover:font-bold hover:text-[#483d78] mt-2 relative z-20">
                        {machine.name}
                      </h3>
                    </a>
                  </motion.div>
                ))
              : filteredMachines
                  .slice(currentIndex, currentIndex + totalVisible)
                  .map((machine, index) => (
                    <motion.div
                      key={`${machine.name}-${index}`}
                      className="text-center relative w-1/3 p-2"
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={imageVariants}
                        >
                      <a href={`/${countryCode}/products/${machine.name}`}>
                        <Image
                          src={machine.image}
                          alt={machine.name}
                          className="object-contain transform  transition-transform duration-200 rounded-3xl relative z-10 h-32 w-full"
                          width={200}
                          height={150}
                        />
                        <h3 className="text-base font-normal text-black mt-2 hover:font-semibold hover:text-[#483d78] relative z-20">
                          {machine.name}
                        </h3>
                      </a>
                    </motion.div>
                  ))}
          </div>
          {filteredMachines.length > totalVisible && (
            <button
              onClick={handleNext}
              className={`absolute text-black border-2 text-3xl rounded-full right-2 z-10 h-10 w-10 animated-button-right ${
                currentIndex + totalVisible >= filteredMachines.length
                  ? "opacity-20"
                  : "opacity-100"
              }`}
              style={{ top: "50%", transform: "translateY(-50%)" }}
              disabled={currentIndex + totalVisible >= filteredMachines.length}
            >
              <MdKeyboardArrowRight />
            </button>
          )}
        </div>
        <div className="w-full lg:w-1/4  lg:h-[26rem] flex flex-col ">
          <div className="w-full  h-full flex justify-center items-center border-l overflow-y-hidden border-gray-300 relative">
            {sidebarIndex > 0 && (
              <button
                onClick={handleSidebarPrev}
                className="absolute top-0 left-1/2 text-4xl transform p-0 text-black"
              >
                <MdKeyboardArrowUp />
              </button>
            )}
            <div className="space-y-4 pt-6 h-[24rem]">
              {SidebarLinks.slice(sidebarIndex, sidebarIndex + 8).map(
                (link, index) => (
                  <motion.div
                    key={link.name}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={sidebarVariants}
                    onMouseEnter={() => {
                      setHoveredCategory(link.name);
                      setCurrentIndex(0);
                    }}
                    onClick={() => handleCategoryClick(link.name, link.name)}
                    className={`flex items-center space-x-4 text-base font-normal  transition-colors duration-300 cursor-pointer ${
                      hoveredCategory === link.name
                        ? "font-poppins hover:font-semibold text-[#483d78]"
                        : "font-poppins text-black"
                    }`}
                  >
                    <a
                      className="flex w-full gap-2 flex-row"
                      href={`${countryCode}/products/${link.name}`}
                    >
                      <div className="flex items-center justify-center cursor-pointer">
                        <BlurImage
                          className="rounded-full h-6 w-6 transform  transition-transform duration-200 object-cover"
                          src={link.icon}
                          alt={link.name}
                          width={24}
                          height={24}
                          loading="lazy"
                        />
                      </div>
                      <p className="w-60">{link.name}</p>
                    </a>
                  </motion.div>
                )
              )}
            </div>
            {sidebarIndex + 8 < SidebarLinks.length && (
              <button
                onClick={handleSidebarNext}
                className="absolute bottom-0 left-1/2 text-4xl text-black"
              >
                <MdKeyboardArrowDown />
              </button>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProductLayout;
