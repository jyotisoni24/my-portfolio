"use client";
import Navbar from "./components/Navbar";
import Image from "next/image";
import About from "./components/About";
import TechStacks from "./components/TeckStacks";
import Projects from "./components/projects";
import "./globals.css"; // Ensure you have a global CSS file for styles
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import AchievementsSection from "./components/Acheivements";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <Navbar />
      <section className="pt-32 px-6 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10">
        <div className="  md:w-120 md:h-120 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg">
          <Image
            src="/profile.jpg" // place your image in /public and name it profile.jpg
            alt="My Photo"
            width={470}
            height={470}
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-100xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-8xl md:text-10xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
          >
            Jyoti Soni
          </motion.h1>

          <div className="mt-18 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-4 text-lg md:text-xl bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition duration-300"
            >
              View Projects
            </a>
            <a
              href="/My_Resume.pdf"
              download
              className="px-8 py-4 text-lg md:text-xl border border-gray-500 text-white hover:bg-gray-700 rounded-full font-semibold transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
      <TechStacks />
      <About />
      <Projects />
      <AchievementsSection />
      <Footer />
      {/* Rest of your sections (Tech Stack, Projects, Footer) */}
      {/* (Same as previous answer) */}
    </div>
  );
}
