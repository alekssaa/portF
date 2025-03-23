"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams.tsx";
import { projects } from "../data.js";
import { CardDemo } from "./CardBox.jsx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "./Button.jsx";
import Slider from "react-slick";
import { useRef } from "react";
export function Card() {
  const sliderRef = useRef(null);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          rows: 1,
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          rows: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          rows: 1,
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          rows: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 640, // Telefoni
        settings: {
          slidesToShow: 1,
          centerPadding: "-50px",
          slidesPerRow: 1,
        },
      },
    ],
  };

  return (
    <div className="h-screen w-auto  rounded-md overflow-hidden  bg-neutral-950 relative flex flex-col flex-wrap items-center justify-center antialiased p-4">
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
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 ">
        <Slider {...settings}>
          {projects.map((project) => {
            return <CardDemo key={project.id} project={project} />;
          })}
        </Slider>{" "}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          damping: 10,
          delay: 0.4,
        }}
        className="flex flex-wrap justify-center text-white items-center gap-4 mt-6 w-full text-center"
      >
        <Link to="/">
          <Button
            containerClass={
              " bg-gray-800 hover:bg-gray-500  shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
            }
          >
            Home Page
          </Button>
        </Link>
        <Link to="/aboutandcontact">
          <Button
            containerClass={
              " bg-gray-800 hover:bg-gray-500  shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
            }
          >
            Contact and About me
          </Button>
        </Link>
        <Link
          to="https://github.com/alekssaa?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            containerClass={
              " bg-gray-800 hover:bg-gray-500  shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
            }
          >
            Git Hub
          </Button>
        </Link>
      </motion.div>
      <BackgroundBeams className="absolute inset-0 z-0 pointer-events-none" />
    </div>
  );
}
