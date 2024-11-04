"use client";

import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="shadow-md z-10 relative p-5">
      <div className="flex justify-between items-center mr-10 ml-10">
        <h1>Vinaarchi</h1>

        <Button className=" bg-blue-300 rounded-full">Get in Touch</Button>
      </div>
    </div>
  );
};

export default Navbar;
