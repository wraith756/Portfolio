"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    date: "May 2025 – July 2025",
    role: "Full Stack Developer Intern & Team Lead",
    company: "Trustique Assist Pvt Ltd",
    points: [
      "Built scalable web applications using Next.js, Node.js, and Supabase",
      "Implemented authentication and role-based access control",
      "Led sprint planning and coordinated team development",
      "Promoted to Team Lead for performance and delivery",
    ],
  },
  {
    date: "Sep 2024 – Nov 2024",
    role: "Full Stack Developer Intern",
    company: "BitBattles ESP Pvt Ltd",
    points: [
      "Developed REST APIs for frontend-backend integration",
      "Optimized MongoDB queries to improve performance",
      "Performed API testing and documentation using Postman",
    ],
  },
];

export default function Experience() {
  return (
    <section
      className="bg-[#0f0f0f] text-white py-24 px-6 md:px-20"
      id="experience"
    >
      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-yellow-400 mb-16 text-center "
      >
        Experience
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT ILLUSTRATION */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex justify-center"
        >
          <img
            src="/exprience.png"
            alt="experience"
            className="w-[350px] md:w-[420px] object-contain"
          />
        </motion.div>

        {/* RIGHT CARDS */}
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 
              hover:border-yellow-400/40 
              hover:shadow-[0_0_30px_rgba(250,204,21,0.2)] 
              transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* ICON */}
                <div className="bg-yellow-400 p-3 rounded-full">
                  <Briefcase className="text-black" />
                </div>

                {/* CONTENT */}
                <div>
                  <p className="text-sm text-yellow-400 font-medium">
                    {exp.date}
                  </p>

                  <h3 className="text-xl font-semibold mt-1 group-hover:text-yellow-300 transition">
                    {exp.role}
                  </h3>

                  <p className="text-gray-400 text-sm mb-3">{exp.company}</p>

                  <ul className="text-gray-400 text-sm space-y-1">
                    {exp.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
