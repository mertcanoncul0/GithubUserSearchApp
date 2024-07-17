import React from "preact/compat"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const isDarkTheme = JSON.parse(
    localStorage.getItem("theme-switcher") ||
      '{"state":{"theme":true},"version":0}'
  ).state.theme

  document.body.dataset.theme = isDarkTheme ? "dark" : "light"

  return <>{children}</>
}
