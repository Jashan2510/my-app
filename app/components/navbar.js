"use client";
import React, { useState, useEffect } from "react";

export default function Navbar({ isOpen, toggleMenu, onLogoClick, homeref }) {
  const [quote, setQuote] = useState({ content: "Loading quote...", author: "" });

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote({ content: data.content, author: data.author });
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
        setQuote({ content: "Failed to load quote.", author: "" });
      });
  }, []);

  return (
    <div className="flex fixed w-screen flex-row ease-in-out duration-700 backdrop-blur-[3px] backdrop-brightness-50 h-fit px-5 py-2 z-40">
      <div className="text-2xl md:text-3xl lg:text-3xl font-light italic cursor-pointer text-white shadow-md" style={{ fontFamily: 'Georgia, serif' }} onClick={() => { onLogoClick(homeref) }}>
        “{quote.content}”
        <span className="block font-medium not-italic text-right text-xl md:text-2xl lg:text-2xl" style={{ marginTop: '0.5rem' }}>— {quote.author}</span>
      </div>
      <div className={`absolute text-4xl font-bold ease-in-out duration-500 ${isOpen ? "right-8" : "right-14"} flex flex-col -top-5 cursor-pointer`} onClick={toggleMenu}>
        <span className={`absolute ease-in-out duration-300 ${isOpen ? "top-4 rotate-45 -right-5" : "top-0"}`}>__</span>
        <span className={`absolute top-3 ease-in-out duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}>__</span>
        <span className={`absolute ease-in-out duration-300 ${isOpen ? "top-4 right-[2px] -rotate-45" : "top-6"}`}>__</span>
      </div>
    </div>
  );
}
