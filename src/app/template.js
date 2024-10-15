"use client";
import "./globals.css";
import { useRef } from "react";
import { motion } from "framer-motion";

const Template = ({ children }) => {
  const constraintsRef = useRef(null);

  return (
    <motion.div ref={constraintsRef} className="Container">
       <div className="min-h-screen bg-graph-paper Container flex justify-center items-center">

      <div className="p-8 text-white">
      </div>
    </div>
      <motion.div drag dragConstraints={constraintsRef} className="Box">
      <div className="Content">
        {children}
</div>
<div className="Footer hidden lg:flex justify-end footer-fixed">
          <p className="mr-3">© 2024 copyrights. All rights reserved</p>
        </div>
      <footer className="Footer footer-fixd">
  <div className="flex justify-start max-w-md w-full text-center">
    <a href="/" className="hover:underline border-r border-white px-2 max-w-md w-full">home</a>
    <a href="/blogs" className="hover:underline border-r border-white px-2 max-w-md w-full">blogs</a>
    <a href="/projects" className="hover:underline border-r border-white px-2 max-w-md w-full">projects</a>
    <a href="/contact" className="hover:underline px-2 max-w-md w-full max-w-md w-full">contact</a>
  </div>
</footer>
  
      

      </motion.div>

    </motion.div>
  );
};

export default Template;
