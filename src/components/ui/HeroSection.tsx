"use client";
import React from "react";
import { Testing } from "@/components/ui/Testing";
import { testimonials } from "../Constants";
export function InfiniteMovingCardsDemo() {
  return (
    <div className="ml-0 lg:ml-14 h-screen mask-gradient rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <Testing items={testimonials} speed="slow" />
    </div>
  );
}

