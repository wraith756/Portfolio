"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_uydfwnq",
        "template_fufdn58",
        form.current,
        "wlTsim-rw5e4zBNtH",
      )
      .then(() => {
        alert("Message sent ✅");
        form.current?.reset();
      })
      .catch(() => alert("Failed ❌"));
  };

  return (
    <section
      className="relative bg-[#0f0f0f] text-white py-24 px-6 md:px-20 "
      id="contact"
    >
      {/* HEADING */}
      <h2 className="text-5xl font-bold text-yellow-400 mb-16">Contacts</h2>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT FORM */}
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          {/* INPUT FIELD */}
          <div className="relative">
            <label className="absolute -top-3 left-4 bg-[#0f0f0f] px-2 text-yellow-400 text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-transparent border-2 border-yellow-400 rounded-2xl px-5 py-4 outline-none focus:border-yellow-300"
            />
          </div>

          {/* EMAIL */}
          <div className="relative">
            <label className="absolute -top-3 left-4 bg-[#0f0f0f] px-2 text-yellow-400 text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="w-full bg-transparent border-2 border-yellow-400 rounded-2xl px-5 py-4 outline-none focus:border-yellow-300"
            />
          </div>

          {/* MESSAGE */}
          <div className="relative">
            <label className="absolute -top-3 left-4 bg-[#0f0f0f] px-2 text-yellow-400 text-sm">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Type your message..."
              required
              className="w-full bg-transparent border-2 border-yellow-400 rounded-2xl px-5 py-4 outline-none focus:border-yellow-300"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="flex items-center gap-2 bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-300 transition"
          >
            Send <Send size={16} />
          </button>
        </form>

        {/* RIGHT SIDE */}
        <div className="space-y-8">
          {/* EMAIL */}
          <div className="flex items-center gap-4">
            <div className="bg-yellow-400 p-3 rounded-full text-black">
              <Mail />
            </div>
            <p className="text-lg">anuragsharma73240@gmail.com</p>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-4">
            <div className="bg-yellow-400 p-3 rounded-full text-black">
              <Phone />
            </div>
            <p className="text-lg">+91 9798318799</p>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-4">
            <div className="bg-yellow-400 p-3 rounded-full text-black">
              <MapPin />
            </div>
            <p className="text-lg">Guna,Mp</p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/wraith756"
              className="bg-yellow-400 p-3 rounded-full text-black"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anurag-sharma-454750251/"
              className="bg-yellow-400 p-3 rounded-full text-black"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        {/* RIGHT SIDE ILLUSTRATION */}
        <div className="absolute bottom-0 right-10 hidden md:block">
          {/* Glow */}
          <div className="absolute w-[250px] h-[250px] bg-yellow-400/10 blur-3xl rounded-full bottom-10 right-10" />

          {/* Image */}
          <img
            src="/contact.png"
            alt="contact illustration"
            className="w-[260px] md:w-[320px] object-contain relative z-10"
          />
        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center mt-20 text-gray-400">
        Made with <span className="text-yellow-400">❤</span> by Anurag Sharma
      </div>
    </section>
  );
}
