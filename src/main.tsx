import { render } from 'preact'
import { ThemeProvider } from './components/theme-provider.tsx'
import { App } from './app.tsx'
import './index.css'

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('app')!
)
