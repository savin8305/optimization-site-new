
import {
  papercup,
  paperbowl,
  paperBowlMachineImage,
  paperBagMachineImage,
  paperPlateMachineImage,
  paperFlexoMachineImage,
  fullyAutomaticBagMachineImage,
  PCM110WithPLC,
  paperStrawMachine,
    paperLunchBoxMachine,
    paperbag1,
} from "../../../../public/assets";
import { StaticImageData } from "next/image";
interface Images {
  paperBowlMachineImage: StaticImageData;
  paperBagMachineImage: StaticImageData;
  PCM110WithPLC: StaticImageData;
  paperPlateMachineImage: StaticImageData;
  paperFlexoMachineImage: StaticImageData;
  fullyAutomaticBagMachineImage: StaticImageData;
  paperStrawMachine: StaticImageData;
  paperLunchBoxMachine: StaticImageData;
}

export const images: Images = {
  paperBowlMachineImage: paperBowlMachineImage,
  paperBagMachineImage: paperBagMachineImage,
  PCM110WithPLC: PCM110WithPLC,
  paperPlateMachineImage: paperPlateMachineImage,
  paperFlexoMachineImage: paperFlexoMachineImage,
  fullyAutomaticBagMachineImage: fullyAutomaticBagMachineImage,
  paperStrawMachine: paperStrawMachine,
  paperLunchBoxMachine: paperLunchBoxMachine,
};

export interface Item {
  src: string | StaticImageData;
  alt: string;
  name: string;
  description: string;
  bgpic: StaticImageData;
}

export const item: Item[] = [
  {
    src:"https://i.pinimg.com/236x/89/09/12/890912f6a1ab514810a94ba215e34d61.jpg",
    alt: "Cups",
    name: "Paper Bowl",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic:papercup,
  },
  {
    src:"https://i.pinimg.com/564x/f6/4a/e0/f64ae07dac3856af2eab7cc4377fe316.jpg",
    alt: "Item 2",
    name: "Paper Cups",
    description:
      "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. ",
    bgpic:papercup,
  },
  {
    src: "https://i.pinimg.com/564x/48/5d/c4/485dc4b8ff2f0cc046124e4ca7ac2353.jpg",
    alt: "Item 3",
    name: "Paper Bag",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic:papercup,
  },
  {
    src: "https://i.pinimg.com/564x/6e/97/7a/6e977a19857185cfb86e197fd88c7a73.jpg",
    alt: "Item 2",
    name: "Paper Spoon",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for be",
    bgpic:paperbowl,
  },
  {
    src: "https://i.pinimg.com/564x/4b/15/60/4b1560c84ec801ebd70b01ac50e2a8b0.jpg",
    alt: "Cups",
    name: "Paper lid",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic:paperbag1,
  },
  {
    src: "https://i.pinimg.com/236x/36/24/fa/3624fa6c472029bc35861f90d7443583.jpg",
    alt: "Item 5",
    name: "Paper Cup",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/70/51/9f7051df7290097a7b9442fd3b25a533.jpg",
    alt: "Item 6",
    name: "Paper Straw",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic:  paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/70/51/9f7051df7290097a7b9442fd3b25a533.jpg",
    alt: "Item 4",
    name: "Paper Cutlry",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for be",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/70/51/9f7051df7290097a7b9442fd3b25a533.jpg",
    alt: "Cups",
    name: "Paper Bag",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/70/51/9f7051df7290097a7b9442fd3b25a533.jpg",
    alt: "Item 3",
    name: "Paper Bowl",
    description:
      "Description for Paper bag Paper cups are disposable containers made from the paper and often lined with pplatic or wax to p",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/70/51/9f7051df7290097a7b9442fd3b25a533.jpg",
    alt: "Item 5",
    name: "Paper Bag",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/70/51/9f7051df7290097a7b9442fd3b25a533.jpg",
    alt: "Item 4",
    name: "Paper Spoon",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for beper bag",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/564x/6e/97/7a/6e977a19857185cfb86e197fd88c7a73.jpg",
    alt: "Item 3",
    name: "Paper Bag",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/564x/6e/97/7a/6e977a19857185cfb86e197fd88c7a73.jpg",
    alt: "Item 2",
    name: "Paper Cup",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic:  paperbowl,
  },
  {
    src: "https://i.pinimg.com/564x/6e/97/7a/6e977a19857185cfb86e197fd88c7a73.jpg",
    alt: "Cups",
    name: "Paper Bowl",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic:  paperbowl,
  },
  {
    src: "https://i.pinimg.com/564x/6e/97/7a/6e977a19857185cfb86e197fd88c7a73.jpg",
    alt: "Item 2",
    name: "Paper Cup",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/564x/6e/97/7a/6e977a19857185cfb86e197fd88c7a73.jpg",
    alt: "Item 3",
    name: "Paper Plate",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic:  paperbowl,
  },
  {
    src: "https://i.pinimg.com/564x/6e/97/7a/6e977a19857185cfb86e197fd88c7a73.jpg",
    alt: "Cups",
    name: "Paper Bag",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/88/92/9f889264d2b4404ebc43d0acd897e36c.jpg",
    alt: "Item 3",
    name: "Paper Cup",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/88/92/9f889264d2b4404ebc43d0acd897e36c.jpg",
    alt: "Item 4",
    name: "Paper Spoon",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/88/92/9f889264d2b4404ebc43d0acd897e36c.jpg",
    alt: "Cups",
    name: "Paper Bag",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/88/92/9f889264d2b4404ebc43d0acd897e36c.jpg",
    alt: "Item 2",
    name: "Paper Glass",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/88/92/9f889264d2b4404ebc43d0acd897e36c.jpg",
    alt: "Item 3",
    name: "Paper Bag",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/88/92/9f889264d2b4404ebc43d0acd897e36c.jpg",
    alt: "Item 4",
    name: "Paper Spoon",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic: paperbowl,
  },
];
