"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

// 👉 SAME projects array (copy from your file)
import ProjectsData from "../data/project"; // OR paste array here

export default function AllProjects() {
  return (
    <section className="bg-[#0f0f0f] text-white min-h-screen py-24 px-6 md:px-20">
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-16">
        All Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ProjectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={500}
              height={300}
              className="w-full h-[200px] object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-yellow-300">
                {project.name}
              </h3>

              <p className="text-gray-400 text-sm mt-2">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t: string, i: number) => (
                  <span
                    key={i}
                    className="text-xs bg-yellow-400/10 text-yellow-300 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                className="inline-block mt-4 text-yellow-400 hover:underline"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
