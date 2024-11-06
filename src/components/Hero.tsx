"use client";

import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="overflow-hidden h-screen relative text-center bg-cover bg-center">
      <img
        src="https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="h-full w-full object-cover"
        alt="Background"
      />
      <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-6 md:flex-row">
        <div className="w-32 h-32 mb-6 md:mb-0 md:mr-10">
          <img
            src="/images/me.webp"
            alt="My Image"
            className="w-full h-full rounded-full object-cover mx-auto"
          />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-6xl md:text-6xl font-rafeny">
            Hello, It&apos;s Archi
          </h1>
          <h2 className="text-lg pb-5 font-helvetica">
            I&apos;m a Web Developer
          </h2>
          <a
            href="https://github.com/vinaarchi" // URL GitHub
            target="_blank" // Membuka link di tab baru
            rel="noopener noreferrer" // Keamanan saat membuka link di tab baru
          >
            <Button className="bg-blue-300 rounded-full font-rafeny transform transition-transform duration-300 hover:scale-125">
              Check my GitHub
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
