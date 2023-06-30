"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center hover:bg-slate-100 dark:hover:bg-slate-900 p-1.5 rounded-md">
      <button
        onClick={() => setTheme("dark")}
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      >
        <Sun />
      </button>
      <button
        onClick={() => setTheme("light")}
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      >
        <Moon />
      </button>
    </div>
  );
}
