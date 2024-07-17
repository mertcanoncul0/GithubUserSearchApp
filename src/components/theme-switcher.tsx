import { useEffect } from "preact/hooks"
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
    <button onClick={handleSetTheme} className="theme-switcher-btn">
      {theme ? (
        <>
          <span>DARK</span>
          <img src="/moon.svg" alt="" />
        </>
      ) : (
        <>
          <span>LIGHT</span>
          <img src="/sun.svg" alt="" />
        </>
      )}
    </button>
  )
}
