"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>Light Mode</button>
      ) : (
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      )}
    </div>
  );
}
