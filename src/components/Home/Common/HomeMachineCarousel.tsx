"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/HomeMachine-cards-carousel";


// Define the type for card data
// Define the type for breadcrumb items

// Define the type for card data and include breadcrumbItems
interface CardData {
  content?: React.ReactNode;
  category: string;
  firstname: string;
  secondname: string;
  description: string;
  image: string;
  title: string;
  speed: number;
  unit: string;
  icon:string;
  items: { className: string; text: string }[];
}

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

export const cardsData: CardData[] = [
  {
    category: "cup",
    firstname: "Servo Driven",
    secondname: "Paper Cup Machine",
    description:
      "Experience unparalleled efficiency with our Servo Driven Paper Cup Machine, a marvel of engineering that integrates advanced mechanical, electronic, pneumatic, and electrical technologies. This high-precision machine is equipped with 13 servos that work in perfect sync via PLC, enabling the production of up to 180 high-quality paper cups per minute, equivalent to 3 cups per second. The machine features a two-step curling process, which ensures the rim of each cup is curled twice to provide extra rigidity and durability & High-quality sealing is guaranteed through the use of ultrasonic and hot air mechanisms, minimizing the risk of leakage, making it ideal for both hot and cold beverages.",
    image:
      "https://assets.nesscoindustries.com/public/assets/nav_machine/PaperPlate.png",
    title: "Servo Driven Machine",
    speed: 100,
    unit: "PCS/MIN",
    icon: "https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperbowl.png",

    items: [
      {
        className: "text-gray-400 text-3xl",
        text: "High-Speed Synchronized Servos",
      },
      {
        className: "text-gray-400 text-3xl",
        text: "Advanced Sealing Technology",
      },
      { className: "text-gray-400 text-3xl", text: "Two-Step Curling Process" },
      {
        className: "text-gray-400 text-3xl",
        text: "Comprehensive Control System ",
      },
    ],
  },
  {
    category: "bowl",
    firstname: "Automatic",
    secondname: "Paper Bowl Machine",
    description:
      "The Automatic Paper Bowl Machine offers a seamless combination of high speed and reliability, producing paper bowls of various sizes. This machine is perfect for large-scale production environments where speed and precision are critical.",
    image:
      "https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBagMachine%20.png",
    title: "Automatic Paper Bowl Machine",
    speed: 80,
    unit: "PCS/MIN",
    icon: "https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperbowl.png",

    items: [
      { className: "text-gray-400 text-3xl", text: "High Production Capacity" },
      { className: "text-gray-400 text-3xl", text: "Servo Control System" },
      {
        className: "text-gray-400 text-3xl",
        text: "Ultrasonic Sealing Technology",
      },
    ],
  },
];
