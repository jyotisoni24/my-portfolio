"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AchievementsSection() {
  const achievements = [
    {
      title: "Winner – HackTheFuture 2025",
      description: `Built 'BinWise' to improve urban waste management. 
Led frontend dev and integrated real-time features.`,
      link: "https://drive.google.com/drive/u/0/folders/18e20XmYw81jrYJXvVv4Y7XTNZk9Nutfl?lfhs=2",
    },
    {
      title: "Qualified For Stage 2 ATF, AlgoUniversity",
      description: `Selected among the top-performing candidates out of 20,000+ participants nationwide, based on technical innovation, problem-solving ability.`,
      link: "https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/atf_stage_1/jyoti-soni.png",
    },
    {
      title: "Semifinalist – LeanIn Hack 6.0",
      description: `Made a blockchain-based platform that helps the donor in tracking their donations in real-time which enhances transparency.`,
      link: "https://certificate.givemycertificate.com/c/b4e40c1e-31bc-4b57-ba0e-94c4523bcb9d",
    },
  ];

  return (
    <section id = "achievements"className="mt-32 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="mb-12 text-5xl font-bold text-blue-200 underline text-shadow-2xs">
          ACHIEVEMENTS
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start text-left">
          {/* Left Column - Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/acheievements.png" // <-- change this to your image path
              alt="Achievements"
              width={300}
              height={300}
              className="rounded-xl shadow-xl object-cover"
            />
          </div>
          {/* Right Column - Achievements List */}
          <div className="flex-1 space-y-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-500 via-pink-400 to-indigo-400 p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white text-sm whitespace-pre-line">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-pink-500 transition duration-300"
                >
                  View Certificate
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
