"use client";

import React from "react";
import ProjectCard from "@/sections/Projectcard";

const projects = [
  {
    title: "Code Challenge",
    deskripsi: "platform yang digunakan untuk jasa Nail Art",
    techStack: ["Tailwind", "ReactJS", "Typescript"],
    role: "Full Stack Developer",
    image: "./HD-8E_2.jpeg",
    link: "#",
  },
  //   nnti kalo mau nambahh proyek, tinggal nambahin aja objectnya
  {
    title: "Code Challenge",
    deskripsi: "platform yang digunakan untuk jasa Nail Art",
    techStack: ["Tailwind", "ReactJS", "Typescript"],
    role: "Full Stack Developer",
    image: "./HD-8E_2.jpeg",
    link: "#",
  },
];

const Portfolio: React.FC = () => {
  return (
    <div>
        <div>
            <h1 className="text-3xl p-10">My Project</h1>
            <h3 className="pl-10">Some Project I have Worked on</h3>
        </div>
    <div className="container mx-auto p-8">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
            <div key={index} className="border border-blue-500 rounded shadow-md p-4
            transform transition-transform duration-300 hover:scale-105">
          <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Portfolio;
