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
    <div className="flex items-center hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md">
      <button
        onClick={() => setTheme("dark")}
        className="p-1.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      >
        <Sun />
      </button>
      <button
        onClick={() => setTheme("light")}
        className="p-1.5 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      >
        <Moon />
      </button>
    </div>
  );
}
