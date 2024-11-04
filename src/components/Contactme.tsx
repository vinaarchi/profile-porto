"use client";

import React from "react";
import { Button } from "./ui/button";
import { MdPhone, MdEmail } from "react-icons/md";

const Contactme = () => {
  return (
    <div>
      <div className="flex justify-center items-center p-10">
        <h1 className="text-2xl">Contact Me</h1>
      </div>
      <div className="flex justify-center items-center pb-20">
        <Button className="bg-blue-300 rounded-full">
          <MdPhone className="mr-2" /> +62 813-7991-4662
        </Button>
        <Button className="bg-blue-300 rounded-full">
          <MdEmail className="mr-2" /> vinaa.as@gmail.com
        </Button>
      </div>
    </div>
  );
};

export default Contactme;
