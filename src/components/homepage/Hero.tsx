
"use client";
import React, { useState } from "react";
import SetupYourOffice from "../SetupYourOffice";

const DemoComponent = () => {
  return (
    <div className="w-full flex justify-center items-center py-16 px-8">
      <video width="720" height="480" controls>
        <source src="/demo-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const Hero = () => {
  const [showSetupOffice, setShowSetupOffice] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const handleSetupClick = () => {
    setShowSetupOffice(!showSetupOffice);
    setShowDemo(false);
  };

  const handleDemoClick = () => {
    setShowDemo(!showDemo);
    setShowSetupOffice(false);
  };

  return (
    <div className="bg-black/30 py-20 px-8 text-center min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-200">
        Welcome to your <span className="text-yellow-600 ">Virtual Office</span>
      </h1>

      {showSetupOffice && <SetupYourOffice />}
      {showDemo && <DemoComponent />}
      {!showSetupOffice && !showDemo && (
        <div className="h-46 md:h-96 " />
      )}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mt-8">
        <button
          onClick={handleDemoClick}
          className="bg-yellow-600 text-slate-200 text-bold py-2 px-6 rounded-md hover:bg-yellow-650 transition-colors duration-500"
        >
          Instance Demo
        </button>
        <button
          onClick={handleSetupClick}
          className="bg-transparent border border-yellow-600 text-slate-200 text-bold py-2 px-6 rounded-md hover:bg-yellow-600 hover:text-slate-200 transition-colors duration-500"
        >
          Setup Your Company
        </button>
      </div>
    </div>
  );
};

export default Hero;