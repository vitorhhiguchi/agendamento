import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow p-4 flex justify-end items-center">
      <ThemeSwitcher />
    </header>
  );
}