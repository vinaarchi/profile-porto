"use client";

import React from "react";
import { Button } from "./ui/button";
import { MdPhone, MdEmail } from "react-icons/md";

const Contactme = () => {
  return (
    <div >
      <hr 
            className="border-0 h-2 bg-blue-300 rounded-full w-4/5 mx-auto"
            />
      <div className="flex justify-center items-center p-10">
        <h1 className="text-2xl">Contact Me</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8 items-center pb-20">
      <a href="https://wa.me/6281379914662" target="_blank" rel="noopener noreferrer">
          <Button className="bg-blue-300 rounded-full">
            <MdPhone className="mr-2" /> +62 813-7991-4662
          </Button>
        </a>
        <a href="mailto:vinaa.as@gmail.com" target="_blank" rel="noopener noreferrer">
          <Button className="bg-blue-300 rounded-full">
            <MdEmail className="mr-2" /> vinaa.as@gmail.com
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Contactme;
