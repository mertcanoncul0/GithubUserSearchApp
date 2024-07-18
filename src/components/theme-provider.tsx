import React from 'preact/compat'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const isDarkTheme = JSON.parse(
    localStorage.getItem('theme-switcher') ||
      '{"state":{"theme":true},"version":0}'
  ).state.theme

  document.body.dataset.theme = isDarkTheme ? 'dark' : 'light'

  // Add transition styling to required elements
  const style = document.createElement('style')
  style.innerHTML = `
    body, header h1, button, ul, ul span, input, input::placeholder, .search-form, p, .user-card, li, a, svg path {
      transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    }
  `
  setTimeout(() => {
    document.head.appendChild(style)
  }, 10)

  return <>{children}</>
}
