"use client";
import { useEffect, useState } from "react";

export default function Counter({ to }: { to: number }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 800;
    const increment = Math.ceil(to / (duration / 16));
    const id = setInterval(() => {
      start += increment;
      if (start >= to) {
        setVal(to);
        clearInterval(id);
      } else {
        setVal(start);
      }
    }, 16);

    return () => clearInterval(id);
  }, [to]);

  return <span className="text-2xl font-bold">{val}</span>;
}
