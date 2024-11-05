"use client";

import { useState, useEffect } from "react";
import { Badge } from "./ui/badge";

const Aboutme = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Event listener untuk scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Ganti 100 dengan threshold yang diinginkan
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Menambahkan event listener untuk scroll
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex items-center pt-9 px-10">
      <Badge
        className={`flex justify-center items-center transition-all duration-500 ${
          isScrolled ? "bg-blue-300 rounded-xl p-6" : "h-1 w-full bg-blue-300"
        }`}
      >
        <div className="text-center">
          <h1 className="font-rafeny text-5xl pb-6 font-light">About me</h1>
          <h3 className="text-lg font-helvetica font-light">
            "I'm a new web developer passionate about building responsive and
            user-friendly websites. Continuously learning and eager to grow in
            the tech world."
          </h3>
        </div>
      </Badge>
    </div>
  );
};

export default Aboutme;
