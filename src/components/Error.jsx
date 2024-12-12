import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <div className="mt-4">
        <h1 className="text-black font-bold text-3xl w-[100%]">
          An error occurred, please try again later!{" "}
        </h1>
      </div>
      <button className="mt-4 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
        {" "}
        <Link to={"/"}>Home Page</Link>
      </button>
    </div>
  );
};

export default Error;
