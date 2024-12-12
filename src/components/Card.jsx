"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams.tsx";
import { projects } from "../data.js";
import { CardDemo } from "./CardBox.jsx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Card() {
  return (
    <div className="min-h-screen sm:h-auto w-auto rounded-md bg-neutral-950 relative flex flex-col flex-wrap items-center justify-center antialiased p-4">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          damping: 10,
          delay: 0.5,
        }}
        className="text-white text-2xl sm:text-4xl md:text-6xl font-bold text-center mb-6"
      >
        Previous Projects
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-7">
        {projects.map((project) => {
          return <CardDemo key={project.id} project={project} />;
        })}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          damping: 10,
          delay: 0.4,
        }}
        className="flex flex-col sm:flex-row text-white items-center gap-6 sm:gap-4 mt-6"
      >
        <Link to="/">
          <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Home Page
          </button>
        </Link>
        <Link to="/aboutandcontact">
          <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-green-800 hover:bg-green-500 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Contact and About Me
          </button>
        </Link>
        <Link
          to="https://github.com/alekssaa?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-gray-400 hover:bg-gray-600 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            See more on GitHub
          </button>
        </Link>
      </motion.div>
      <BackgroundBeams className="absolute inset-0 z-0 pointer-events-none" />
    </div>
  );
}
