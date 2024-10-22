import React from "react";

function Section2() {
  return (
    <section className="h-full dark:text-white flex items-center md:px-[5vh] lg:px-[10vh] dark:bg-black section2">
      <div className="w-[60%] md:w-[50%] mx-4">
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-black py-3">
          <span className="text-green-600"> Empowering </span> <br /> a Greener
          Tomorrow
        </h1>
        <h4 className="text-lg md:text-md lg:text-lg font-semibold py-3">
          Welcome to EcoAction, your personal gateway to making a positive
          impact on the environment. Discover sustainable activities, track your
          progress, and visualize your contribution towards a healthier planet.
        </h4>
        <div className="flex items-center space-x-10 mt-5">
          <button className="bg-green-600 text-white hover:bg-blue-700 py-3 px-5 rounded-xl cursor-pointer">
            Explore Activities
          </button>
          <button className="border border-b-2 dark:border-white py-3 px-5 rounded-xl cursor-pointer">
            Track My Progress
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section2;
