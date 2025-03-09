import React from "react";
import { motion } from "framer-motion";
import me from "../assets/myPhoto.png";

const Sample = () => {
  return (
    <section className="container grid place-content-center p-50">
      <FloatingPhone />
    </section>
  );
};

const FloatingPhone = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Main Diamond */}
      <div
        className="absolute h-64 w-64 bg-black"
        style={{
          transform: "rotate(45deg)",
          borderRadius: "20px",
        }}
      />

      {/* Buttons Diamond */}
      <DiamondButton position="top-[-1rem] right-[-7rem]" label="A" />
      <DiamondButton position="top-[4.7rem] right-[-12rem]" label="B" />
      <DiamondButton position="bottom-[-1rem] right-[-7rem]" label="C" />

      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px) rotate(45deg)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px) rotate(45deg)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-64 w-64 border-2 border-b-4 border-r-4 border-slate-600 border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
        style={{
          borderRadius: "20px",
        }}
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

// Diamond Button Component
const DiamondButton = ({ position, label }) => {
  return (
    <button
      className={`absolute h-26 w-26 bg-black flex items-center justify-center text-white font-bold shadow-md hover:bg-slate-600 active:scale-95 transition cursor-pointer ${position}`}
      style={{
        transform: "rotate(45deg)",
        borderRadius: "16px",
      }}
    >
      <span style={{ transform: "rotate(-45deg)" }}>{label}</span>
    </button>
  );
};

const HeaderBar = () => {
  return <></>;
};

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-slate-600">
      {/* Overlapping and Straight Image */}
      {/* <img
        src={me}
        alt="Straight Image"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto z-10 rotate-[-45deg]"
      /> */}
    </div>
  );
};

export default Sample;
