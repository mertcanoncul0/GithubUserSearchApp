import { create } from "zustand"
import { persist } from "zustand/middleware"
import { ThemeSwitcherState } from "../types"

export const useThemeSwitcher = create(
  persist<ThemeSwitcherState>(
    (set: any) => ({
      theme: true,
      setTheme: (theme: boolean) => set({ theme }),
    }),
    {
      name: "theme-switcher",
    }
  )
)
