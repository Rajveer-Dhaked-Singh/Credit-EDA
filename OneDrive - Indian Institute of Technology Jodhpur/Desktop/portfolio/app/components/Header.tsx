"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    setIsDark((s) => !s);
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark");
    }
  }

  return (
    <header role="banner" className="w-full py-4 px-6 bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-30">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Aditya Sahani
        </Link>

        <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200">
          <a href="#home" className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Home
          </a>
          <a href="#about" className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500">
            About
          </a>
          <a href="#skills" className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Skills
          </a>
          <a href="#portfolio" className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Projects
          </a>
          <a href="#contact" className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="p-2 rounded-md text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {isDark ? "🌙" : "☀️"}
          </button>

          <button type="button" aria-label="Open menu" className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
