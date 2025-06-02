"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const techs = [
  { name: "HTML", logo: "/html.png" },
  { name: "CSS", logo: "/css.png" },
  { name: "JavaScript", logo: "/js.png" },
  { name: "React", logo: "/react.png" },
  { name: "C++", logo: "/c++.png" },
  { name: "C", logo: "/c.png" },
];

export default function TechStack() {
  return (
    <section className="p-6 bg-grey text-white rounded-lg shadow-lg mt-10">
      <h2 className="mb-12 text-5xl font-bold text-indigo-200 text-shadow-2xs underline mt-10 px-6 text-center">Tech Stack</h2>
      <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full h-full"
        >
        <div className="mt-2 grid grid-cols-3 sm:grid-cols-4 bg-gray-800 p-12 md:grid-cols-6 gap-6 text-3xl  mb-1 rounded-full"> 
          {techs.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <Image
              src={tech.logo}
              alt={tech.name}
              width={60}
              height={60}
              className="object-contain hover:scale-110 transition-transform duration-300"
            />
            <p className="mt-2 text-sm">{tech.name}</p>
          </div>
        ))} 
        </div>
      </motion.div>
      
    </section>
  );
}
