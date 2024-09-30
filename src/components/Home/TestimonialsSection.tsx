import React from "react";
import { SwipeCarousel } from "./Common/slider";
import AnimatedText from "../ui/AnimatedText";
import { TestiNomialAnimation } from "../ui/testinomialAnimation";
import data from "../Constants/hero.json"
const testimonials = [
  {
    src: "https://i.pinimg.com/236x/36/a2/e2/36a2e242bfe3ac039e0618fbaaef7596.jpg",
    username: "Alice Johnson",
    profile: "Software Developer",
    country: "USA",
    quote: "Innovate and elevate. Embrace the future with bold ideas.",
    flag: "https://flagcdn.com/us.svg",
  },
  {
    src: "https://i.pinimg.com/236x/b9/e4/5d/b9e45d2667c272dfb56e22fc0e1fbc64.jpg",
    username: "Michael Brown",
    profile: "Graphic Designer",
    country: "Canada",
    quote: "Design is intelligence made visible. Creativity transforms.",
    flag: "https://flagcdn.com/ca.svg",
  },
  {
    src: "https://i.pinimg.com/236x/05/3f/86/053f86bf19f82e5488b518bcfed17c64.jpg",
    username: "Sophia Lee",
    profile: "Product Manager",
    country: "UK",
    quote: "Innovate and elevate. Embrace the future with bold ideas.",
    flag: "https://flagcdn.com/gb.svg",
  },
  {
    src: "https://i.pinimg.com/236x/b4/0a/81/b40a81ccb4e3b2cac2748622d4929d03.jpg",
    username: "David Miller",
    profile: "Marketing Specialist",
    country: "Australia",
    quote: "Design is intelligence made visible. Creativity transforms.",
    flag: "https://flagcdn.com/at.svg",
  },
  {
    src: "https://i.pinimg.com/236x/81/ac/9e/81ac9ef6456e8eccbf651fc368e83e4a.jpg",
    username: "Emily Davis",
    profile: "UX Researcher",
    country: "Germany",
    quote: "Innovate and elevate. Embrace the future with bold ideas.",
    flag: "https://flagcdn.com/de.svg",
  },
  {
    src: "https://i.pinimg.com/236x/4d/9c/34/4d9c34104c98b22ea66bf6b8f64ff5b6.jpg",
    username: "Oliver Martinez",
    profile: "Data Scientist",
    country: "Spain",
    quote: "Design is intelligence made visible. Creativity transforms.",
    flag: "https://flagcdn.com/es.svg",
  },
  {
    src: "https://i.pinimg.com/236x/bc/61/97/bc61979451b11263cab4f49e21ffc131.jpg",
    username: "Charlotte Garcia",
    profile: "Business Analyst",
    country: "France",
    quote: "Innovate and elevate. Embrace the future with bold ideas.",
    flag: "https://flagcdn.com/fr.svg",
  },
  {
    src: "https://i.pinimg.com/564x/5a/2a/89/5a2a89a9c7962e026a8572b701586500.jpg",
    username: "William Robinson",
    profile: "SEO Specialist",
    country: "Italy",
    quote: "Design is intelligence made visible. Creativity transforms.",
    flag: "https://flagcdn.com/it.svg",
  },
  {
    src: "https://i.pinimg.com/736x/ff/b3/1e/ffb31e98ffb84717ead291e69a3488ee.jpg",
    username: "Amelia Martinez",
    profile: "Web Developer",
    country: "Mexico",
    quote: "Innovate and elevate. Embrace the future with bold ideas.",
    flag: "https://flagcdn.com/fr.svg",
  },
  {
    src: "https://i.pinimg.com/564x/16/af/25/16af2524bc4a0704adcb18eb9bd92b24.jpg",
    username: "Liam Johnson",
    profile: "Content Writer",
    country: "Japan",
    quote: "Design is intelligence made visible. Creativity transforms.",
    flag: "https://flagcdn.com/me.svg",
  },
  {
    src: "https://i.pinimg.com/564x/d0/cb/d1/d0cbd1380c72ddf3750c896433b2dea1.jpg",
    username: "Evelyn Moore",
    profile: "Project Manager",
    country: "Brazil",
    quote: "Innovate and elevate. Embrace the future with bold ideas.",
    flag: "https://flagcdn.com/br.svg",
  },
  {
    src: "https://i.pinimg.com/736x/b8/82/83/b882836fa749f501aefa935d19e19977.jpg",
    username: "Lucas Taylor",
    profile: "Social Media Manager",
    country: "South Africa",
    quote: "Design is intelligence made visible. Creativity transforms.",
    flag: "https://flagcdn.com/za.svg",
  },
  {
    src: "https://i.pinimg.com/564x/c1/4b/88/c14b8848983ccd7fc28850c3e2caf656.jpg",
    username: "Mia Clark",
    profile: "Quality Assurance",
    country: "India",
    quote: "Innovate and elevate. Embrace the future with bold ideas.",
    flag: "https://flagcdn.com/in.svg",
  },
  {
    src: "https://i.pinimg.com/564x/90/42/44/90424430eaa5793ac1e893f074b456f2.jpg",
    username: "Henry Anderson",
    profile: "Digital Marketer",
    country: "New Zealand",
    quote: "Design is intelligence made visible. Creativity transforms.",
    flag: "https://flagcdn.com/fr.svg",
  },
];

const HomeTestimonial: React.FC = () => {
  const testinomialData=data.findLast((item)=>item.category==="testinomial")?.data;
  return (
    <div className="flex flex-col lg:flex-row py-4 h-screen z-20 max-w-7xl mx-auto relative overflow-hidden">
      <div className="px-2 w-full h-[45%] lg:h-full lg:w-1/3 lg:flex lg:flex-col lg:items-end lg:justify-end  flex flex-col">
        <h6 className="text-xl text-[#dc0e2a] text-center lg:text-justify border-white pb-3 lg:pb-0 border-b-[1px] lg:border-none lg:ml-6 lg:text-2xl font-montserrat lg:leading-tight font-bold">
          {testinomialData?.heading}
        </h6>
        <div className="hidden lg:flex flex-col">
          <h2 className="lg:text-5xl font-bold ml-4 mt-20">
           {testinomialData?.subheading}
          </h2>
          <h2 className="text-5xl flex flex-row font-bold ml-4 mt-6">
            {testinomialData?.secondsubheading?.substring(0,3)}
            <span className="relative ml-1 ">
              <AnimatedText
                blockClassName="h-full rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500"
                className="text-5xl text-black font-bold"
                text={`${testinomialData?.secondsubheading?.substring(4)}`}
              />
            </span>
          </h2>
          <h4 className="mt-20 text-lg text-center font-poppins">
            {testinomialData?.description}
          </h4>
        </div>
        <div className="flex w-full mt-2 justify-between lg:hidden flex-row">
          <h4 className="text-sm w-1/2 text-center font-poppins">
          {testinomialData?.description}
          </h4>
          <div className="h-12 border-white w-1 border-l-[1px]"></div>
          <div className="flex text-center text-sm w-1/2 flex-col ">
            <div className="flex text-[#483d78] text-lg items-center justify-center flex-row">
              {" "}
              <AnimatedText text={"1000"}></AnimatedText>
              <span className="text-[#dc0e2a]">+</span>
            </div>
            Satisfied Customers
          </div>
        </div>
        <SwipeCarousel />
      </div>
      <div className="w-full h-[55%] mt-8 lg:mt-0 lg:w-2/3 relative lg:h-full">
        <div className="ml-0 lg:ml-14 h-screen mask-gradient rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <TestiNomialAnimation items={testimonials} speed="slow" />
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
