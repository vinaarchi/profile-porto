"use client";

import React from "react";

interface ProjectCardProps {
  title: string;
  deskripsi: string;
  techStack: string[];
  role: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  deskripsi,
  techStack,
  image,
  link,
}) => {
  return (
    <div>
      <img
        src={image}
        alt={`${title} preview`}
        className="w--full h-48 object-cover"
      />
      <div className="p-4">
        <p className="text-gray-700 mb-4">{deskripsi}</p>
        <div className="mb-2">
          <h3>Tech Stack</h3>
          <div className="flex flex-wrap mt-1">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-gray-200 rounded-full px-2 py-1 m-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <p>Role:</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block
            mt-4 bg-blue-400 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
