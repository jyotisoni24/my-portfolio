"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <section className="mt-32 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4 text-white">Projects</h2>

        <div className="bg-gray-800 p-6 w-2xs rounded-xl shadow-lg flex flex-col items-center">
          <div>
            <h3 className="text-2xl font-semibold text-purple-400 mb-3">
            BinWise
          </h3>
          <p className="text-gray-300 font-medium">
            • Developed an end-to-end MERN stack web app to promote sustainable
            recycling with real-time waste tracking. • Integrated reward-based
            gamification to boost user participation by 40%. • Implemented
            secure user authentication and a responsive dashboard UI. (IGDTUW)
          </p>
          <a>GitHub</a>
          <p>
            <motion.a
              href="#projects" // or any section ID or link
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-lg font-medium text-white hover:text-pink-500 transition duration-300"
            >
              Go to Project
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="inline-block"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.a>
          </p>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}
