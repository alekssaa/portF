import React from "react";
import { Vortex } from "./ui/vortex.tsx";
import Img from "../assets/img/slika_cleanup.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function VortexDemoSecond() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            damping: 8,
            delay: 0.6,
          }}
          src={Img}
          alt="image"
          className="rounded-full size-60 "
        />
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",

            damping: 10,
            delay: 0.7,
          }}
          className="text-white text-2xl md:text-6xl font-bold text-center"
        >
          Aleksandar Ilisić
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",

            damping: 10,
            delay: 0.8,
          }}
          className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center"
        >
          I am a Frontend Developer and a graduate in Political Science.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            damping: 10,
            delay: 1.2,
          }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-6"
        >
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            <Link to="/project">Check out my work.</Link>
          </button>
          <button className="px-4 py-2 text-white sm:transform:translateX(-50px)">
            <Link to="/aboutandcontact">Contact and About Me</Link>
          </button>
        </motion.div>
      </Vortex>
    </div>
  );
}
