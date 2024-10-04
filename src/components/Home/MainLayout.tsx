"use client";
import React, { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Home/Home";
import NavLinksDemo from "@/components/Home/NavLinks";
import ContactIcons from "@/components/Contact/ContactIcon";
import FeatureNews from "@/components/Home/FeatureNews";
import { AnnouncementSection } from "@/components/Home/AnnouncementSection";
import data from "../Constants/hero.json";

// Dynamically import components with SSR disabled for better client-side loading
const AboutUs = dynamic(() => import("@/components/Home/AboutSection"), { ssr: false });
const MarqueeSection = dynamic(() => import("@/components/Home/MarqueeSection"), { ssr: false });
const KnowMore = dynamic(() => import("@/components/Home/KnowMore"), { ssr: false });
const HomeMachine = dynamic(() => import("@/components/Home/HomeMachine"), { ssr: true });
const HomeTestimonial = dynamic(() => import("@/components/Home/TestimonialsSection"), { ssr: false });

export default function MainLayout() {
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const infiniteCardsRef = useRef<HTMLDivElement>(null);
  const knowMoreRef = useRef<HTMLDivElement>(null);
  const homeMachineRef = useRef<HTMLDivElement>(null);
  const newsFeatureRef = useRef<HTMLDivElement>(null);
  const homeTestimonialRef = useRef<HTMLDivElement>(null);
  const iotRef = useRef<HTMLDivElement>(null);

  // State to track if a component is visible
  const [isAboutUsVisible, setAboutUsVisible] = useState(false);
  const [isMarqueeVisible, setMarqueeVisible] = useState(false);
  const [isKnowMoreVisible, setKnowMoreVisible] = useState(false);
  const [isHomeMachineVisible, setHomeMachineVisible] = useState(false);
  const [isTestimonialsVisible, setTestimonialsVisible] = useState(false);

  // Function to observe visibility using IntersectionObserver
  useEffect(() => {
    const observerOptions = { threshold: 0.2 }; // Trigger when 20% of the element is visible

    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          switch (id) {
            case "aboutUs":
              setAboutUsVisible(true);
              observer.unobserve(entry.target); // Stop observing once loaded
              break;
            case "clientele":
              setMarqueeVisible(true);
              observer.unobserve(entry.target);
              break;
            case "knowMore":
              setKnowMoreVisible(true);
              observer.unobserve(entry.target);
              break;
            case "machines":
              setHomeMachineVisible(true);
              observer.unobserve(entry.target);
              break;
            case "testimonials":
              setTestimonialsVisible(true);
              observer.unobserve(entry.target);
              break;
            default:
              break;
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe each section
    if (aboutUsRef.current) observer.observe(aboutUsRef.current);
    if (infiniteCardsRef.current) observer.observe(infiniteCardsRef.current);
    if (knowMoreRef.current) observer.observe(knowMoreRef.current);
    if (homeMachineRef.current) observer.observe(homeMachineRef.current);
    if (homeTestimonialRef.current) observer.observe(homeTestimonialRef.current);

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { text: "Machines", ref: homeMachineRef },
    { text: "About Us", ref: aboutUsRef },
    { text: "Clientele", ref: infiniteCardsRef },
    { text: "KnowMore", ref: knowMoreRef },
    { text: "IoT", ref: iotRef },
    { text: "News", ref: newsFeatureRef },
    { text: "Testimonials", ref: homeTestimonialRef },
  ];

  return (
    <main className="relative bg-[#f2f2f2] top-14 gap-2 h-full">
      <div className="top-2 relative">
        <Hero />
      </div>
      <ContactIcons />
      <NavLinksDemo navItems={navItems} />
      <div className="h-full font-poppins py-20">
        <div id="machines" className="flex space-y-6 flex-col" ref={homeMachineRef}>
          <div className="flex justify-center text-3xl items-center space-x-2">
            <h2 className="bg-gradient-to-r text-3xl from-[#483d73] to-red-700 bg-clip-text text-transparent font-medium">
              {data[0].homeMachineSection?.title.trim().replace(/\s+\S+$/, "")}
              <span className="font-semibold ml-1">{data[0].homeMachineSection?.title.trim().match(/\S+$/)}</span>
            </h2>
          </div>
          <div className="text-sm w-full lg:w-full flex items-center justify-center">
            <p className="lg:w-[50%] text-sm lg:px-0 px-2 lg:text-base font-regular text-center">
              {data[0].homeMachineSection?.subheading}
            </p>
          </div>
          {isHomeMachineVisible && <HomeMachine />}
        </div>
        <div className="h-auto max-w-screen-2xl mx-auto lg:py-8">
          <AnnouncementSection />
        </div>
        <div id="aboutUs" ref={aboutUsRef}>
          {isAboutUsVisible && <AboutUs />}
        </div>
        <div id="clientele" className="max-w-screen-2xl mx-auto" ref={infiniteCardsRef}>
          {isMarqueeVisible && <MarqueeSection />}
        </div>
        <div id="knowMore" className="h-auto" ref={knowMoreRef}>
          {isKnowMoreVisible && <KnowMore />}
        </div>
        <div id="news" ref={newsFeatureRef}>
          <FeatureNews />
        </div>
        <div id="testimonials" className="relative bg-gradient-to-l via-purple-200 to-transparent h-screen overflow-hidden" ref={homeTestimonialRef}>
          {isTestimonialsVisible && <HomeTestimonial />}
        </div>
      </div>
    </main>
  );
}
