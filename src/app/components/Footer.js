"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-32 py-8 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
      >
        {/* Left: Branding */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold text-white">Jyoti Soni</h4>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Right: Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/jyotisoni24"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/jyoti-soni-"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact.jyotisoni@gmail.com"
            className="hover:text-pink-400 transition duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
