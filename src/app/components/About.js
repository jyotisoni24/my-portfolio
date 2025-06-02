"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About () {
  return (
    <section id = "about"className="mt-32 px-6">
      <div className="grid md:grid-cols-2 gap-0 items-center max-w-6xl mx-auto">
        {/* Left: Image with animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full h-full"
        >
          <Image
            src="/bg.png" // Replace with your image path
            alt="Jyoti Soni"
            width={300}
            height={300}
            className="rounded-2xl object-cover ml-7 shadow-lg"
          />
        </motion.div>

        {/* Right: Content with animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-gray-400 mb-8">
            I&rsquo;m Jyoti Soni, currently pursuing my engineering degree. I&rsquo;m deeply passionate about software development, especially front-end web technologies like React and Next.js. I love creating responsive, accessible, and interactive UIs.
          </p>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-purple-400 mb-3"> Education</h3>
            <p className="text-gray-300 font-medium">Indira Gandhi Delhi Technical University for Women (IGDTUW)</p>
            <p className="text-gray-400 text-sm">B.Tech in Computer Science & Engineering — 2023–2027</p>
            <p className="text-gray-400 text-sm">Current GPA: 8.51 (Till 3rd Sem)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
