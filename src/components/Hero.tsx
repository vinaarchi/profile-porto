"use client";

import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative text-center bg-cover bg-center">
      <img src="https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      className="w-full h-96 object-cover"
      />
      <div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
          <h1 className="text-5xl">Hello, </h1>
          <h2 className="text-7xl pb-5">I'm Archi</h2>
          <Button className="bg-blue-300 rounded-full">
            check my github
        </Button>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
