
import React from "react";
export default function Navbar({isOpen, toggleMenu,onLogoClick,homeref}) {
  return (
    <div className={`flex fixed w-screen flex-row ease-in-out duration-700 backdrop-blur-[3px] backdrop-brightness-50 h-fit px-5 py-2 z-40  `}>
      <h1 className="text-4xl font-bold duration-1000 cursor-pointer" style={{ fontFamily: "against" }} onClick={()=>{onLogoClick(homeref)}}>
      Welcome! Discover the projects and passions that drive my professional journey...
      </h1>
        <div className={` absolute text-4xl font-bold ease-in-out duration-500  ${isOpen ?" right-8" : "right-14"} flex flex-col -top-5 cursor-pointer`} onClick={()=>{toggleMenu()}}>
           <span className={` absolute ease-in-out duration-300 ${isOpen ?"top-4 rotate-45 -right-5" : "top-0"}`}>__</span>
           <span className={` absolute top-3 ease-in-out duration-300 ${isOpen ?" opacity-0" : "opacity-100"}`}>__</span>
           <span className={` absolute ease-in-out duration-300 ${isOpen ?" top-4 right-[2px] -rotate-45" : "top-6"}`}>__</span>
        </div>
    </div>
  );
}
