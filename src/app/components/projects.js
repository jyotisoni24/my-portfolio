"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const projectData = [
  {
    title: "BinWise",
    Image: "/binwise.png",
    techstack: "MERN Stack, Tailwind CSS",
    description: `• Developed an end-to-end MERN stack web app to promote sustainable recycling with real-time waste tracking.
    • Integrated reward-based gamification to boost user participation by 40%.
    • Implemented secure user authentication and a responsive dashboard UI. (IGDTUW)`,
    githubLink: "https://github.com/jyotisoni24/BinWise",
    projectLink: "https://bin-wise-wi7d.vercel.app/",
  },
  {
    title: "Typing Test",
    Image: "/Typingtest.png",
    techstack: "Java, Swing",
    description: `• Built a desktop application in Java using Swing to evaluate typing speed based on user input.
    • Implemented key event listeners, timers, and dynamic text rendering to calculate WPM and give visual feedback.
    • Randomizes passages and displays user performance category (Average, Good, Excellent, Elite).`,
    githubLink: "https://github.com/jyotisoni24/TypingTest",
  },
  {
    title: "My Own Portfolio",
    Image: "/portfolio.png",
    techstack: "Next.js, Tailwind CSS , Vercel",
    description: ` • Built a personal portfolio using Next.js to showcase projects, skills, and contact info with a responsive design.
                   • Implemented smooth UI interactions, animations, and routing for a seamless user experience.
                   • Deployed on Vercel with optimized performance and SEO-friendly structure.

`,
    githubLink: "https://github.com/jyotisoni24/my-portfolio",
    projectLink: "https://my-portfolio-oouy.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id= "projects"className="mt-32 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="mb-12 text-6xl font-bold text-pink-300 underline text-shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
          PROJECTS
        </h2>

        <Image
          src="/projects.png"
          alt="Projects"
          width={450}
          height={450}
          className="object-cover shadow-lg mx-auto mb-12 hover:scale-105 transition-transform duration-300 ease-in-out"
        />

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 p-6 rounded-xl shadow-lg text-left"
            >
              <h3 className="text-2xl font-semibold text-black mb-3">
                {project.title}
              </h3>
              <Image
                src={project.Image}
                alt="Projects"
                width={350}
                height={300}
                className="object-cover shadow-lg mx-auto pt-7 mb-12 hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <p className="text-gray-800 text-2.5xl font-medium whitespace-pre-line">
                {project.description}
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-4">
                {/* GitHub Button (centered & wide if no projectLink) */}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      !project.projectLink
                        ? "w-full max-w-xs justify-center text-center"
                        : ""
                    } px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-pink-500 transition duration-300`}
                  >
                    GitHub
                  </a>
                )}

                {/* Go to Project Button (shown only if projectLink exists) */}
                {project.projectLink && (
                  <motion.a
                    href={project.projectLink}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-pink-500 transition duration-300"
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
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
