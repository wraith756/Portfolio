"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    year: "2022 – 2026",
    title: "B.Tech — Computer Science & Engineering",
    school: "Jaypee University of Engineering & Technology",
  },
  {
    year: "XII (CBSE)",
    title: "Higher Secondary Education",
    school: "Millia Convent English School",
  },
  {
    year: "X (CBSE)",
    title: "Secondary Education",
    school: "Bijendra Public School",
  },
];

export default function Education() {
  return (
    <section
      className="bg-[#111111] text-white py-20 px-6 md:px-20"
      id="education"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-12">
        Education
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE CARDS */}
        <div className="space-y-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-yellow-400/40 border border-yellow-300/20 rounded-2xl hover:scale-[1.02] transition">
                <CardContent className="p-6 flex items-start gap-4">
                  {/* ICON */}
                  <div className="bg-yellow-300 p-3 rounded-full">
                    <GraduationCap className="text-black" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <p className="text-sm text-yellow-400">{item.year}</p>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-300">{item.school}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* RIGHT SIDE ILLUSTRATION */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex justify-center"
        >
          <img
            width={500}
            height={500}
            src="/education.png" // add illustration here
            alt="education"
            className="w-[350px] md:w-[400px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
