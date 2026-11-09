"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    const updateYear = () => setYear(new Date().getFullYear());
    updateYear();

    const interval = window.setInterval(updateYear, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-5 py-8 text-center text-sm text-slate-300">
      <p>&copy; {year} Usama Mansoor. All rights reserved.</p>
    </footer>
  );
}
