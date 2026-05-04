"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ProjectsData from "./data/project"; // Importing the projects array
// const projects = [
//   {
//     name: "Zenvilla",
//     image: "/zenvilla.png",
//     desc: "Real estate platform with advanced filtering and scalable backend",
//     tech: ["Next.js", "Express", "PostgreSQL", "AWS"],
//     live: "#",
//     github: "https://github.com/wraith756/ZenVillLa",
//   },
//   {
//     name: "E-Learning Platform",
//     image: "/Elearning.png",
//     desc: "A full-stack e-learning platform that allows teachers to create and manage courses with media uploads, while students can browse and access content seamlessly.",
//     tech: ["Next.js", "Express", "PostgreSQL", "Supabase", "Tailwind CSS"],
//     live: "#",
//     github: "#",
//   },

//   {
//     name: "BanterBox",
//     image: "/BanterBox.png",
//     desc: "Real-time chat app with Socket.io",
//     tech: ["MongoDB", "Express", "React", "Node.js"],
//     live: "#",
//     github: "https://github.com/wraith756/BanterBox-Chat-App",
//   },
//   {
//     name: "AI Chat Assistant",
//     image: "/AI.png",
//     desc: "Real-time AI chat app using Gemini API",
//     tech: ["React", "Gemini API"],
//     live: "#",
//     github: "#",
//   },
//   {
//     name: "ShadowDrop",
//     image: "/shadowdrop.png",
//     desc: "A fast, secure steganography system that encrypts and hides messages inside images using AES and LSB techniques.",
//     tech: ["React", "FastAPI", "Cryptography", "NumPy", "Pillow"],
//     live: "#",
//     github: "https://github.com/wraith756/ShadowDrop",
//   },
//   {
//     name: "Next-Gen Assistant",
//     image: "/NextGEN.png",
//     desc: "Next Gen-AI is a RAG-based intelligent assistant integrated with n8n to deliver context-aware, automated, and real-time responses across connected applications.",
//     tech: ["Python", "FastAPI", "LangChain", "n8n", "OpenAI API"],
//     live: "#",
//     github: "#",
//   },
//   {
//     name: "Twitter Sentiment Analysis",
//     image: "/twitter.png",
//     desc: "Real-time sentiment analysis system that scrapes Twitter data using Selenium and applies NLP and machine learning models to classify user sentiment.",
//     tech: ["Python", "Selenium", "NLP", "Scikit-learn", "Pandas"],
//     live: "#",
//     github: "#",
//   },
// ];

export default function Projects() {
  const router = useRouter();
  return (
    <section
      className="bg-[#0f0f0f] text-white py-24 px-6 md:px-20"
      id="projects"
    >
      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-16"
      >
        Projects
      </motion.h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ProjectsData.slice(0, 6).map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                width={500}
                height={300}
                className="w-full h-[200px] object-cover transition duration-500 group-hover:scale-110"
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                {/* <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-black p-3 rounded-full hover:scale-110 transition"
                >
                  <ExternalLink size={18} />
                </a> */}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black p-3 rounded-full hover:scale-110 transition"
                >
                  <FaGithub size={18} />
                </a>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition">
                {project.name}
              </h3>

              <p className="text-gray-400 text-sm">{project.desc}</p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-yellow-400/10 text-yellow-300 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* VIEW ALL BUTTON */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => router.push("/project")}
          className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-300 hover:scale-105 transition"
        >
          View All →
        </button>
      </div>
    </section>
  );
}
