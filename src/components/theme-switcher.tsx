import { useEffect, useState } from "preact/hooks"
import { useThemeSwitcher } from "../store/theme-switcher"

export function ThemeSwitcher() {
  const { theme, setTheme } = useThemeSwitcher((state) => state)

  function handleSetTheme() {
    setTheme(!theme)
  }

  useEffect(() => {
    document.body.dataset.theme = theme ? "light" : "dark"
  }, [theme])

  return (
    <button className="theme-switcher-btn" onClick={handleSetTheme}>
      <span>{theme ? "DARK" : "LIGHT"}</span>
      <img
        src="/moon.svg"
        alt="Moon Icon"
        className={`moon ${theme ? "active" : ""}`}
      />
      <img
        src="/sun.svg"
        alt="Sun Icon"
        className={`sun ${theme ? "" : "active"}`}
      />
    </button>
  )
}
