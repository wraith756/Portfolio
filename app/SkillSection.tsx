/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const skills = [
  { name: "React", icon: "/skills/React.png", level: 90 },
  { name: "Next.js", icon: "/skills/Next.js.png", level: 85 },
  { name: "JavaScript", icon: "/skills/javascript.png", level: 88 },
  { name: "TypeScript", icon: "/skills/TypeScript.png", level: 82 },
  { name: "Node.js", icon: "/skills/Node.js.png", level: 85 },
  { name: "Python", icon: "/skills/Python.png", level: 80 },
  { name: "FastAPI", icon: "/skills/FastAPI.png", level: 75 },
  { name: "AWS", icon: "/skills/AWS.png", level: 70 },
  { name: "C++", icon: "/skills/C++.png", level: 75 },
  { name: "HTML5", icon: "/skills/HTML5.png", level: 92 },
  { name: "GitHub", icon: "/skills/github.png", level: 85 },
  { name: "Selenium", icon: "/skills/Selenium.png", level: 70 },
  { name: "Electron", icon: "/skills/Electron.png", level: 65 },
  { name: "Java", icon: "/skills/java.png", level: 65 },
  { name: "Wordpress", icon: "/skills/wordpress.png", level: 65 },
  { name: "Postman", icon: "/skills/Postman.png", level: 65 },
  { name: "MongoDB", icon: "/skills/MongoDB.png", level: 65 },
  { name: "C", icon: "/skills/C.png", level: 65 },
  
];

// split rows
const row1 = skills.slice(0, Math.ceil(skills.length / 2));
const row2 = skills.slice(Math.ceil(skills.length / 2));

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-[#0f0f0f] py-24 overflow-hidden"
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-yellow-500/5 blur-[120px] rounded-full" />

      {/* 🔥 HEADER */}
      <div className="relative z-10 text-center mb-16">
        <span className="text-yellow-500 text-sm tracking-wider">
          TECHNOLOGIES
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          My <span className="text-yellow-500">Skills</span>
        </h2>

        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* 🔥 ROWS */}
      <div className="relative z-10 space-y-10">
        <MarqueeRow skills={row1} direction="left" speed={22} />
        <MarqueeRow skills={row2} direction="right" speed={25} />
      </div>
    </section>
  );
}

function MarqueeRow({
  skills,
  direction,
  speed,
}: {
  skills: any[];
  direction: "left" | "right";
  speed: number;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-6 w-max px-6"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {[...skills, ...skills].map((skill, i) => (
          <SkillCard key={i} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
}

function SkillCard({ skill }: { skill: any }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y - rect.height / 2) / 18;
    const rotateY = (rect.width / 2 - x) / 18;

    ref.current.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform =
      "perspective(900px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={{ y: -6 }}
      className="relative min-w-[120px] md:min-w-[150px] group cursor-pointer"
    >
      <div className="relative bg-[#111111]/80 border border-yellow-500/20 backdrop-blur-md rounded-2xl p-5 flex flex-col items-center gap-3 transition duration-300 hover:border-yellow-400/50">
        {/* 🔥 GLOW */}
        <div className="absolute inset-0 rounded-2xl bg-yellow-500/0 group-hover:bg-yellow-500/10 blur-xl transition-all duration-500" />

        {/* 🔥 ICON */}
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-500/20 blur-xl opacity-0 group-hover:opacity-100 transition" />
          <Image
            src={skill.icon}
            alt={skill.name}
            width={40}
            height={40}
            className="relative z-10 object-contain"
          />
        </div>

        {/* 🔥 NAME */}
        <p className="text-sm font-medium text-gray-300 group-hover:text-yellow-400 transition">
          {skill.name}
        </p>

        {/* 🔥 PROGRESS BAR */}
        <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-yellow-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
