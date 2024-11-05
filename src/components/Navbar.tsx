"use client";

import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const handleClick = () => {
    return window.open("https://wa.me/6281379914662", "_blank");
  };
  return (
    <div className="shadow-md z-10 relative p-5 font-rafeny">
      <div className="flex justify-between items-center mr-10 ml-10">
        <h1>vinaarchi</h1>

        <Button className=" bg-blue-300 rounded-full" onClick={handleClick}>
          Get in Touch
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
