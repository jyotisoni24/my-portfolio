'use client'; 
import Navbar from "./components/Navbar/Navbar";
import Image from "next/image";
import About from "./components/About/About";
import TechStacks from "./components/TechStacks/TeckStacks";
import Projects from "./Projects/projects";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <Navbar />
      <section className="pt-32 px-6 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10">
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg">
          <Image
            src="/profile.jpg" // place your image in /public and name it profile.jpg
            alt="My Photo"
            width={270}
            height={270}
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4x3 p-1.5 md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
          >
            Jyoti Soni
          </motion.h1>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/projects"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-gray-500 hover:bg-gray-700 rounded-full font-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
      <TechStacks />
      <About />
      <Projects/>
      {/* Rest of your sections (Tech Stack, Projects, Footer) */}
      {/* (Same as previous answer) */}
    </div>
  );
}
