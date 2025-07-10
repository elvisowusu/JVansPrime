"use client";

import React from "react";

import HeroSection from "@/components/Hero";
import PopularServices from "./_components/popularServices";

export const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <PopularServices/>
    </div>
  );
};
