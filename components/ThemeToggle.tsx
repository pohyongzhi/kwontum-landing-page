"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component only renders the icon client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Check if the current theme is "dark"
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
