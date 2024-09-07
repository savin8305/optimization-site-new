"use client";
import { StaticImageData } from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/HomeMachine-cards-carousel";
import PositionAwareButton from "../../ui/PositionAwareButton";
import Breadcrumb from "../../ui/Breadcrumb";
import { FaCircleNotch } from "react-icons/fa";
import { BlurImage } from "@/components/ui/BlurImage";
import { CardData } from "@/components/Constants/product";
interface HomeMachineCarouselProps {
  filteredCardsData: CardData[];
}
export function HomeMachineCarousel({
  filteredCardsData,
}: HomeMachineCarouselProps) {
  const cards = filteredCardsData.map((card: CardData, index: number) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full -mt-14">
      <Carousel items={cards} />
    </div>
  );
}

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface DummyContentProps {
  image: string;
  title: string;
  description: string;
  breadcrumbItems: BreadcrumbItem[];
  buttons: { text: string; icon: boolean }[];
  items: { className: string; text: string }[];
  firstname: string;
  secondname: string;
}

const DummyContent: React.FC<DummyContentProps> = ({
  image,
  title,
  description,
  breadcrumbItems,
  buttons,
  items,
  firstname,
  secondname,
}) => {
  return (
    <>
      <div className="bg-[#F5F5F7] z-[99999] dark:bg-neutral-800 p-8 font-poppins font-regular md:p-14 h-80 rounded-3xl mb-4">
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
          <div className="relative w-full max-w-[78rem] h-[90vh] bg-white rounded-xl p-6 transform transition-transform overflow-y-auto z-50">
            <Breadcrumb items={breadcrumbItems} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="flex flex-col items-center">
                <BlurImage
                  src={image}
                  alt={title}
                  width={600}
                  height={400}
                  className="rounded-2xl object-fill lg:object-cover h-[400px]"
                />
                <div className="flex w-[60%] lg:-ml-14 space-x-2 lg:space-x-8 justify-center mt-8">
                  {buttons.map((button, index) => (
                    <div key={index} className="ml-1">
                      <PositionAwareButton
                        key={index}
                        text={button.text}
                        icon={button.icon}
                        width={
                          button.text === "Know Machine" ? "180px" : "160px"
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h1 className="text-xl lg:text-3xl font-semibold lg:font-bold mb-4">
                  <span className="text-red-600">{firstname}</span>
                  <span className="text-[#483d78] ml-2">{secondname}</span>
                </h1>
                <p className="text-gray-700 text-sm font-regular mb-4">
                  {description}
                </p>
                <ul className="list-none grid grid-cols-2 gap-4 text-gray-700">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <FaCircleNotch className={item.className} />
                      <span className="text-sm font-regular">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DummyContent;
