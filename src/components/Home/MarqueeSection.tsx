"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Trusted By",
    brands: [
      { src: "https://assets.nesscoindustries.com/public/assets/client-logos/abc-news.png", alt: "Abc-News" },
      { src: "https://assets.nesscoindustries.com/public/assets/client-logos/airfrance.png", alt: "Airfrance" },
      { src: "https://assets.nesscoindustries.com/public/assets/client-logos/allianz.png", alt: "Allianz" },
      { src: "https://assets.nesscoindustries.com/public/assets/client-logos/bbc.png", alt: "BBC" },
      { src: "https://assets.nesscoindustries.com/public/assets/client-logos/cnbc.png", alt: "CNBC" },
      { src: "https://assets.nesscoindustries.com/public/assets/client-logos/gannett.png", alt: "Gannett" },
      { src: "https://assets.nesscoindustries.com/public/assets/client-logos/jaguar.png", alt: "Jaguar" },
      { src: "https://assets.nesscoindustries.com/public/assets/client-logos/linkedin.png", alt: "LinkedIn" },
      { src: "https://assets.nesscoindustries.com/public/assets/client-logos/telegraph.png", alt: "Telegraph" }
    ],
    direction: "left",
  },
  {
    title: "Partner Brands",
    brands: [
      { src: "https://assets.nesscoindustries.com/public/assets/client-logos/abc-news.png", alt: "Abc-News" },
      { src: "https://assets.nesscoindustries.com/public/assets/client-logos/airfrance.png", alt: "Airfrance" },
      { src: "https://assets.nesscoindustries.com/public/assets/client-logos/allianz.png", alt: "Allianz" },
      { src: "https://assets.nesscoindustries.com/public/assets/client-logos/bbc.png", alt: "BBC" },
      { src: "https://assets.nesscoindustries.com/public/assets/client-logos/cnbc.png", alt: "CNBC" },
      { src: "https://assets.nesscoindustries.com/public/assets/client-logos/gannett.png", alt: "Gannett" },
      { src: "https://assets.nesscoindustries.com/public/assets/client-logos/jaguar.png", alt: "Jaguar" },
      { src: "https://assets.nesscoindustries.com/public/assets/client-logos/linkedin.png", alt: "LinkedIn" },
      { src: "https://assets.nesscoindustries.com/public/assets/client-logos/telegraph.png", alt: "Telegraph" }
    ],
    direction: "right",
  },
];

const description = {
  text: "Empowering sustainable packaging with advanced paper-based solutions. Our innovative machines drive global CO2 reduction, paving the way for a greener earth and elevating your packaging capabilities.",
  highlight: "CO2",
};

export default function MarqueeSection() {
  return (
    <div className="h-screen px-8 flex flex-col justify-center gap-12 overflow-hidden">
      <motion.div className="relative h-1/3 flex flex-col lg:flex-row">
        <div className="flex w-[10%] lg:w-[15%] flex-col gap-6">
          {sections.map((section, index) => (
            <div key={index} className=" text-sm lg:text-2xl font-regular mt-8 font-poppins whitespace-nowrap">
              {section.title}
            </div>
          ))}
        </div>
        <div className="w-[90%] lg:w-[85%] ml-32 lg:ml-44 mask-gradient-marquee">
          {sections.map((section, index) => (
            <div key={index} className="bg-white mt-2">
              <InfiniteMovingCards
                items={section.brands}
                direction={section.direction as "left" | "right"} // Type assertion here
                speed="slow"
                className="w-full"
              />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div className="relative flex flex-col h-[20%] items-center text-center">
        <p className="text-sm lg:text-2xl mx-4 w-full lg:w-[62%] font-poppins font-regular leading-8">
          {description.text.split(description.highlight)[0]}
          <span className="text-red-500">{description.highlight}</span>
          {description.text.split(description.highlight)[1]}
        </p>
      </motion.div>
    </div>
  );
}
