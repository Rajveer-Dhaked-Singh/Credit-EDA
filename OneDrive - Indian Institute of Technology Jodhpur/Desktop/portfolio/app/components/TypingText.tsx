"use client";
import { useEffect, useState } from "react";

export default function TypingText({ text }: { text: string[] }) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = text[index % text.length];
    let timeout: number;

    if (!deleting) {
      timeout = window.setTimeout(() => {
        setDisplay((d) => current.slice(0, d.length + 1));
      }, 80);
    } else {
      timeout = window.setTimeout(() => {
        setDisplay((d) => current.slice(0, d.length - 1));
      }, 40);
    }

    if (!deleting && display === current) {
      timeout = window.setTimeout(() => setDeleting(true), 800);
    } else if (deleting && display === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [display, deleting, index, text]);

  return (
    <h3 className="mt-2 text-xl text-gray-600 dark:text-gray-300">
      <span>{display}</span>
      <span className="ml-1 text-indigo-600">|</span>
    </h3>
  );
}
