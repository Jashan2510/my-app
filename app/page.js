"use client";

import React, { useRef } from "react";
import Navbar from "./components/navbar";
import Menu from "./components/menu";
import { Reveal } from "./components/reveal";
import { IoMail } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
export default function Home() {
  const { scrollYProgress } = useScroll()
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const contactRef = useRef(null);
  const homeref = useRef(null);
  const scrollTo = (ref) => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 80);
  };
  const handleActivePage = (page) => {
    setActivePage(page);
  }
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className=" h-fit text-white w-screen">
      <Menu isOpen={isOpen} handleActivePage={handleActivePage} activePage={activePage}/>
      <Navbar toggleMenu={toggleMenu} isOpen={isOpen} onLogoClick={scrollTo} homeref={homeref}/>
      <motion.div className=" h-[5px] w-screen bg-orange-500 fixed z-50" style={{ scaleX ,transformOrigin:"0%"}} />
      <div ref={homeref} className=" pt-16  flex items-center justify-center h-screen w-full" style={{backgroundImage:`url(./pic_portfolio.jpg)`,backgroundRepeat:`no-repeat`,backgroundSize:`cover`}}>
      <div className=" backdrop-blur-[2px] w-3/6 max-[500px]:w-5/6 max-[800px]:w-4/6 backdrop-brightness-50 flex flex-col gap-6 rounded-md p-5 overflow-hidden">
        <Reveal>
      <div>
      <span className="text-7xl font-bold  ">Hey, I'm Jashanjot Singh</span><span className=" text-orange-500 text-7xl font-bold ">.</span>
        </div>
        </Reveal>
        <Reveal>
        <div>
      <span className="text-3xl font-bold mt-3">I'm a </span><span className="text-3xl font-bold mt-3  text-orange-500">jr.Full Stack Developer</span>
        </div>
        </Reveal>
        <Reveal>
        <div>
          <span className=" w-full flex flex-wrap font-serif" style={{ textAlign:"justify"}}>
          Hello! I'm a software development student at SAIT, deeply engaged in mastering React.js, Node.js, Next.js, among other technologies. Outside of programming, I enjoy delving into visual design using Figma. Let's connect and explore the thrilling realm of technology together!</span>
        </div>
        </Reveal>
        <Reveal>
        <div>
          <motion.button type="button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-orange-500 text-white px-5 py-2 rounded-lg" onClick={()=>{scrollTo(contactRef)}}>Contact Me</motion.button>
        </div>
        </Reveal>
      </div>
      </div>
      <div className="flex w-full items-center justify-center h-screen bg-black text-white">
      <div className=" flex w-7/12 max-[500px]:w-10/12 max-[800px]:w-9/12 flex-col gap-5">
        <Reveal>

        <div>
      <span className="text-7xl text-black font-bold  ">Professional Profile</span><span className=" text-orange-500 text-7xl font-bold ">.</span>
        </div>
        </Reveal>
        <div className=" w-full flex flex-wrap gap-2 font-serif text-lg max-[500px]:text-xs max-[800px]:text-base" >
          <Reveal>

          <p>Hey there! I'm Jashanjot singh, As a current student at the Southern Alberta Institute of Technology (SAIT), pursuing a focused track in software development, I am passionately engaged in expanding my expertise across a broad spectrum of technologies and programming disciplines. My academic and project-based experiences have equipped me with a profound understanding and practical skills in both web development and object-oriented programming, which are the cornerstone of my technical acumen.</p>
          </Reveal>
          <Reveal>

          <p>My journey into the world of software development began with a curiosity about how technology impacts every facet of our lives, from the simplest mobile apps to complex operating systems. This curiosity transformed into a vocational pursuit when I started my program at SAIT, where I have since thrived in a rigorous academic environment, consistently topping my class in core subjects like Networking, Advanced Programming, and Database Management. Through coursework and hands-on labs, I've gained significant expertise in HTML, CSS, and JavaScript, enabling me to develop responsive and user-centric web applications. My proficiency extends to advanced frameworks and libraries such as React.js, Next.js, and Node.js, which I've leveraged in multiple class projects to build scalable and efficient applications.</p>
          </Reveal>
          <Reveal>

          <p>My passion for software development is matched by my commitment to professional growth and learning. I actively participate in coding bootcamps, hackathons, and have taken additional online courses in emerging technologies and software development methodologies. These opportunities have allowed me to continuously challenge myself and stay abreast of industry trends and best practices.</p>
          </Reveal>
          <Reveal>

          <p class="mb-8">In addition to my technical skills, I have cultivated strong interpersonal and collaborative skills through group projects and presentations, learning the importance of clear communication and teamwork in achieving project goals. As I prepare to transition from academic studies to a professional setting, I am eager to bring my technical knowledge, innovative thinking, and problem-solving skills to a forward-thinking company where I can contribute to impactful projects and grow as part of a dynamic team.</p>
          </Reveal>
        </div>
        <Reveal>
        <div className=" flex flex-row gap-3 text-lg">
          <span className=" text-orange-500 flex flex-row gap-2">My Links <FaArrowRight className=" relative top-1" /></span>
          <div className=" relative flex flex-row gap-2 top-1">
          <a href="https://www.linkedin.com/in/jashan2510/" target="_blank"><FaLinkedin className=" ease-in-out duration-200 hover:text-orange-500"/></a>
          <a href="https://github.com/Jashan2510" target="_blank"><FaGithub className=" ease-in-out duration-200 hover:text-orange-500"/></a>
          </div>
        </div>
        </Reveal>
        </div>
      </div>
      <div ref={contactRef} className="flex w-full items-center justify-center h-screen bg-gray-600 text-white">
        <div className=" flex w-3/6 max-[500px]:w-5/6 max-[800px]:w-4/6 flex-col gap-5">
          <Reveal>
          <div className=" flex flex-row justify-center text-center align-middle items-center">
      <span className="text-7xl font-bold ">Contact</span><span className=" text-orange-500 text-7xl font-bold">.</span>
          </div>
          </Reveal>
          <Reveal>
          <div className=" flex flex-row justify-center text-center">
            <span className="text-lg font-light mt-3 w-full flex flex-wrap text-center justify-center font-serif">Shoot me an email if you want to connect! You can also find me on&nbsp;<a href="https://www.linkedin.com/in/jashan2510/" target="_blank" className=" text-orange-500 z-20 hover:underline">Linkedin</a>&nbsp;or&nbsp;<a href="https://www.instagram.com/jshn1919/" target="_blank" className="text-orange-500 z-20 hover:underline">Instagram</a>&nbsp;if that's more your speed.</span>
          </div>
          </Reveal>
          <Reveal>
          <div className=" flex flex-row justify-center text-center">
            <a href="mailto:" target="_blank" className="text-2xl font-bold mt-3 z-20 hover:text-orange-500 flex flex-row gap-2 ease-in-out duration-300"><IoMail className=" relative top-1"/>Jashanjotsingh@edu.sait.ca</a>
          </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
