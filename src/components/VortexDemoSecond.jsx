import React from "react";
import { Vortex } from "./ui/vortex.tsx";
import Img from "../assets/img/slika_cleanup.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import cv from "../assets/cv.pdf";

export function VortexDemoSecond() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="relative h-screen w-screen overflow-hidden">
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
          <Button
            containerClass={
              " bg-gray-800 hover:bg-gray-500  shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
            }
          >
            <Link to="/project">Check out my work.</Link>
          </Button>
          <Button
            containerClass={
              " bg-gray-800 hover:bg-gray-500  shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
            }
          >
            <Link to="/aboutandcontact">Contact and About Me</Link>
          </Button>
          <a className="cursor-pointer text-white" href={cv} download="Resume">
            <Button
              containerClass={
                " bg-gray-800 hover:bg-gray-400  shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
              }
            >
              Download CV
            </Button>
          </a>
        </motion.div>
      </Vortex>
    </div>
  );
}
