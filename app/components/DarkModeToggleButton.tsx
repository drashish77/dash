"use client";
import { useTheme } from "next-themes";
import { CiLight, CiDark, CiLaptop } from "react-icons/ci";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  return (
    <div className="flex gap-5 border p-2 w-fit rounded-full mt-5">
      <button
        className={`px-4 py2 ${resolvedTheme === "light" && "bg-red-500"}`}
        onClick={() => setTheme("light")}
      >
        <CiLight className="mr-2 mb-1 inline-block" />
        Light
      </button>
      <button
        className={`px-4 py2 ${resolvedTheme === "dark" && "bg-red-500"}`}
        onClick={() => setTheme("dark")}
      >
        <CiDark className="mr-2 mb-1 inline-block" />
        Dark
      </button>
      <button className={`px-4 py2 `} onClick={() => setTheme("system")}>
        <CiLaptop className="mr-2 mb-1 inline-block" />
        System
      </button>
      <button className="w-9 px-0">
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  );
}
