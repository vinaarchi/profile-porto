"use client";

import React from "react";
import ProjectCard from "@/sections/Projectcard";

const projects = [
  {
    title: "Minha Nail Art",
    deskripsi:
      "Platform yang digunakan untuk jasa HomeService, dan juga untuk pemesanan Press On Nails",
    techStack: ["Tailwind", "ReactJS", "Typescript"],
    role: "Full Stack Developer",
    image: "./HD-8E_2.jpeg",
    link: "#",
  },
  {
    title: "Code Challenge",
    deskripsi: "Platform yang digunakan untuk jasa Nail Art",
    techStack: ["Tailwind", "ReactJS", "Typescript"],
    role: "Full Stack Developer",
    image: "./HD-8E_2.jpeg",
    link: "#",
  },
];

const Portfolio: React.FC = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl p-5 font-rafeny">My Project</h1>
        <h3 className="pl-5 font-helvetica">Some Projects I Have Worked On</h3>
      </div>
      <div className="container mx-auto p-10 pt-12">
        <div className="flex flex-nowrap gap-8 overflow-x-auto pb-8">
          {/* Proyek di swipe horizontally */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-none w-full sm:w-80 md:w-96 lg:w-1/3 border border-blue-500 rounded shadow-md p-4 
              transform transition-transform duration-300 hover:scale-95"
            >
              <h2 className="font-rafeny text-3xl mb-4">{project.title}</h2>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
