"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="mt-32 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
        <p className="text-gray-400 mb-8">
          I'm Jyoti Soni, currently pursuing my engineering degree. I'm deeply passionate about software development, especially front-end web technologies like React and Next.js. I love creating responsive, accessible, and interactive UIs.
        </p>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-purple-400 mb-3">🎓 Education</h3>
          <p className="text-gray-300 font-medium">Indira Gandhi Delhi Technical University for Women (IGDTUW)</p>
          <p className="text-gray-400 text-sm">B.Tech in Computer Science & Engineering — 2023–2027</p>
        </div>
      </motion.div>
    </section>
  );
}
