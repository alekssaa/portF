"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams.tsx";
import { socialLinks } from "../data.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export function BackgroundBeamsDemo() {
  return (
    <div className="w-full  h-screen-adjust rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 text-2xl">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            damping: 10,
            delay: 0.2,
          }}
          className="relative z-10 text-3xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold"
        >
          Aleksandar Ilisić
        </motion.h1>
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            damping: 10,
            delay: 0.5,
          }}
          className="text-white max-w-lg mx-auto my-2 text-sm text-center relative "
        >
          <h3 className="text-2xl mb-3">
            Seeking New Opportunities as a Frontend Developer!
          </h3>
          <span className="font-bold">Hello everyone,</span> My name is
          Aleksandar, I am actively looking for new challenges in the IT field.
          I am ready to bring my skills to a new organization.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            damping: 10,
            delay: 0.55,
          }}
          className="text-white max-w-lg mx-auto my-2 text-sm text-center relative "
        >
          <span className="font-bold">Expertise in Programming:</span>{" "}
          Proficient in React and Java Script.I am currently learning Next.js.
          My experience includes implementing APIs, optimizing database
          performance, and creating dynamic web applications that enhance user
          experience.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            damping: 10,
            delay: 0.6,
          }}
          className="text-white max-w-lg mx-auto my-2 text-sm text-center relative "
        >
          <span className="font-bold">Teamwork and Communication:</span> Strong
          communication skills that foster a positive work environment and
          collaboration among team members.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            damping: 10,
            delay: 0.7,
          }}
          className="text-white max-w-lg mx-auto my-2 text-sm text-center relative "
        >
          <span className="font-bold">Continuous Learning:</span> Committed to
          staying updated with new technologies to improve work efficiency.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            damping: 10,
            delay: 0.8,
          }}
          className="text-white max-w-lg mx-auto my-2 text-sm text-center relative "
        >
          <span className="font-bold">Available to start immediately!</span>
          Open to: Projects, Contract Work, or Full-Time Positions If you are
          looking for a dedicated IT professional to drive your organization
          forward, even without prior work experience, please contact me via
          email{" "}
          <span className="text-white font-bold">ilisic159@gmail.com</span> or
          at:
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            damping: 10,
            delay: 1,
          }}
          className="flex  items-center justify-center gap-2 mt-5 relative z-10"
        >
          {socialLinks.map((link) => {
            return (
              <a
                className="text-white text-4xl hover:text-sky-500 hover:text-5xl"
                target="_blank"
                key={link.id}
                href={link.link}
              >
                {link.icon}
              </a>
            );
          })}
        </motion.div>
      </div>
      <BackgroundBeams className="absolute inset-0 z-0 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          damping: 10,
          delay: 1,
        }}
        className="flex mb-3 flex-col sm:flex-row text-white items-center gap-6 sm:gap-4 mt-6"
      >
        <Link to="/">
          <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Home Page
          </button>
        </Link>
        <Link to="/project">
          <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-green-800 hover:bg-green-500 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Check out my work
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
