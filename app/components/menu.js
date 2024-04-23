"use client";
import React from "react";

export default function Menu({ isOpen, handleActivePage, activePage }) {
  return (
    <div className={`h-screen fixed ease-in-out duration-500 w-screen text-white ${isOpen ? "opacity-100 z-30" : "opacity-0 z-0"}`}>
      <div className={`h-full absolute w-full transition-transform ease-in-out ${isOpen ? "translate-y-0 scale-100 duration-300" : "translate-y-full scale-0 duration-1000"} backdrop-blur-md`}>
      </div>
      <div className={`h-full absolute w-full transition-all ease-in-out duration-700 bg-black/75 ${isOpen ? "translate-y-0 opacity-100 scale-105" : "translate-y-full opacity-0 scale-95"}`}>
      </div>
      <div className={`h-full absolute w-full transition-all ease-in-out duration-1000 pt-14 flex flex-col gap-16 items-center justify-center ${isOpen ? "translate-y-0 scale-100" : "-translate-y-full scale-0"}`}>
        <div className="w-fit group" onClick={() => { handleActivePage("home") }}>
          <a href="#" className={`block text-5xl font-bold transition-all duration-300 hover:text-orange-500 ${activePage === "home" ? "text-orange-500 underline" : "text-white"}`}>HOME</a>
          <div className={`bg-orange-500 h-[5px] rounded-full transition-all ease-in-out duration-300 ${activePage === "home" ? "w-full" : "w-0 group-hover:w-full"}`}></div>
        </div>
        <div className="w-fit group">
          <a href="./Document 2.pdf" target="_blank" className={`block text-5xl font-normal transition-all duration-300 hover:text-orange-500 text-white`}>RESUME</a>
          <div className="bg-white h-[5px] rounded-full w-0 transition-all ease-in-out duration-300 group-hover:w-full"></div>
        </div>
        <div className="w-fit group">
        <a href="mailto:jashanjotsingh@edu.sait.ca" target="_blank"
          className={`block text-5xl font-bold transition-all duration-300 text-white hover:text-orange-500 ${activePage === "contact" ? "text-orange-500 underline underline-white" : "hover:underline hover:underline-white"}`}
        >CONTACT</a>
        <div className={`bg-orange-500 h-[5px] rounded-full transition-all ease-in-out duration-300 ${activePage === "contact" ? "w-full" : "w-0 group-hover:w-full"}`}></div>

        </div>
      </div>
    </div>
  );
}
