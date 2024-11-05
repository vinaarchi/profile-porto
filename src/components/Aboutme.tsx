"use client";

import { useState, useEffect } from "react";
import { Badge } from "./ui/badge";

const Aboutme = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasDelayedScrolled, setHasDelayedScrolled] = useState(false);

  useEffect(() => {
    // Event listener untuk scroll
    const handleScroll = () => {
      if (window.scrollY > 500) { // gantiin 500 dengan treshold yang dimau
        // Menambahkan delay sebelum mengubah state
        setTimeout(() => {
          setIsScrolled(true);
          setHasDelayedScrolled(true); // Mengubah state setelah delay
        }, 200); // Delay selama 200ms setelah scroll terdeteksi
      } else {
        setIsScrolled(false);
        setHasDelayedScrolled(false); // Reset state jika scroll kembali ke atas
      }
    };

    // misalnya kalo di scroll, nnti handleScroll yang udah akan dipanggil lagi
    window.addEventListener("scroll", handleScroll);

    // untuk ngehapus event listener yang udah ditambahin sblm langkah pertamanya
    // fungsinya untuk eventlistenernya tidak akan kepanggil lagi kalo komponen tidak dipakai
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

      return (
        <div className="flex items-center pt-9 pb-9 px-10">
          <Badge
            className={`flex justify-center items-center transition-all duration-500 ${
              isScrolled ? "bg-blue-300 rounded-xl p-6" : "h-1 w-full bg-blue-300"
            }`}
          >
            <div className="text-center">
              <h1 className="font-rafeny text-5xl pb-6 font-light">About me</h1>
              <h3 className="text-lg font-helvetica font-light">
                "I&quot;m a new web developer passionate about building responsive and
                user-friendly websites. Continuously learning and eager to grow in the
                tech world."
              </h3>
            </div>
          </Badge>
        </div>
      );
    };
    
    export default Aboutme;

