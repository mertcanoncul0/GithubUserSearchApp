import { create } from "zustand"
import { User, UserState } from "../types"

export const useUserStore = create<UserState>((set) => ({
  user: {},
  isPending: false,
  isError: { error: false, statusCode: null },
  setIsPending: (isPending: boolean) => set({ isPending }),
  setUser: (user: User) => set({ user }),
  setIsError: (error: boolean, statusCode: number) =>
    set({ isError: { error, statusCode } }),
}))
