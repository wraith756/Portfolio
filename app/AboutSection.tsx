"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0f0f0f] text-white py-24 px-6 md:px-20 overflow-hidden"
    >
      {/* 🔥 TOP LINE */}
      <div className="absolute top-8 left-6 md:left-10 flex items-center gap-3 w-[90%] md:w-auto">
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="flex-1 h-[2px] bg-yellow-500 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* 🔥 LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500">
            Who I am
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed">
            My name is{" "}
            <span className="text-white font-semibold">Anurag Sharma</span>. I
            am a Computer Science undergraduate at Jaypee University of
            Engineering & Technology.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            I am a B.Tech Computer Science student (2022–2026) with hands-on
            experience in full-stack development using React, Next.js, Node.js,
            and AWS. I focus on building scalable, secure, and user-friendly
            applications.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Through internships, I have worked on real-world applications,
            implemented secure authentication systems, and led development teams
            to deliver production-ready solutions.
          </p>

          {/* 🔥 SMALL HIGHLIGHT BADGES */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
            <span className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 px-3 py-1 rounded-full text-sm">
              Full Stack Developer
            </span>
            <span className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 px-3 py-1 rounded-full text-sm">
              MERN + Next.js
            </span>
            <span className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 px-3 py-1 rounded-full text-sm">
              AWS
            </span>
          </div>
        </motion.div>

        {/* 🔥 RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center relative"
        >
          {/* Glow */}
          <div className="absolute w-[250px] h-[250px] bg-yellow-500/10 blur-3xl rounded-full" />

          <Image
            src="/about.png"
            alt="about"
            width={400}
            height={400}
            className="relative z-10 object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
