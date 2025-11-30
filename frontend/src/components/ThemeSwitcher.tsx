import { useDarkMode } from "../hooks/useDarkMode";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl bg-gray-200 dark:bg-gray-700 hover:opacity-80 transition"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
