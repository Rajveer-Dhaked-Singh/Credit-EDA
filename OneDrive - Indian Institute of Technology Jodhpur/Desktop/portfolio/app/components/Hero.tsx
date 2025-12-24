"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src="/profile.svg"
            alt="Aditya Sahani"
            className="w-56 h-56 object-cover rounded-full shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm <span className="text-indigo-600">Aditya Sahani</span></h1>
          <TypingText text={["Full Stack Developer","AI-ML Enthusiast"]} />
          <p className="mt-4 text-gray-700 dark:text-gray-200">
            I'm a passionate developer who transforms ideas into elegant digital solutions. With expertise in full-stack development, deep learning, and generative AI, I've built applications that serve 1,200+ users and automated complex workflows.
          </p>

          <div className="mt-6 flex gap-3">
            <a href="#contact" className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-md">Hire Me</a>
            <a href="#portfolio" className="inline-block border border-indigo-600 text-indigo-600 px-5 py-2 rounded-md">View Projects</a>
          </div>

          <div className="mt-6 flex gap-3 text-2xl text-gray-600 dark:text-gray-200">
            <a href="https://github.com" aria-label="github">🐙</a>
            <a href="https://linkedin.com" aria-label="linkedin">🔗</a>
            <a href="https://twitter.com" aria-label="twitter">🐦</a>
            <a href="mailto:contact@example.com" aria-label="email">✉️</a>
          </div>
        </div>
      </div>
    </section>
  );
}
