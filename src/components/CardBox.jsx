"use client";
import { cn } from "../lib/utils.ts";
import { motion } from "framer-motion";

export function CardDemo({ project }) {
  const { name, description, img, url, id } = project;
  const motionTime = id / 1.9;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",

        delay: motionTime,
      }}
      className="max-w-xs w-full group/card"
    >
      <div
        className={cn(
          ` "  overflow-hidden cursor-default relative card h-56 w-72 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
        bg-cover `
        )}
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <div className="flex flex-col ">
            <a target="_blank" href={url} rel="noreferrer">
              <p className="cursor-pointer font-bold m-3 text-base text-green-400 relative z-10">
                See Demo
              </p>
            </a>
          </div>
        </div>
        <div className="text content bg-black opacity-60 h-1/2">
          <h1 className="ml-4 font-bold text-xl md:text-2xl text-white relative z-10">
            {name}
          </h1>
          <p className="ml-4 font-normal text-sm text-white relative z-10 my-4">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
