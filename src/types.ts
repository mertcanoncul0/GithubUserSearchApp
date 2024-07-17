export type User = {
  login?: string
  id?: number
  node_id?: string
  avatar_url?: string
  gravatar_id?: string
  url?: string
  type?: string
  name?: string
  company?: string
  blog?: string
  location?: string
  email?: null
  hireable?: null
  bio?: string
  twitter_username?: null
  public_repos?: number
  public_gists?: number
  followers?: number
  following?: number
  created_at?: string
  updated_at?: string
}

export type UserState = {
  user: User
  isPending: boolean
  isError: { error: boolean; statusCode: number | null }
  setUser: (user: User) => void
  setIsPending: (isPending: boolean) => void
  setIsError: (error: boolean, statusCode: number) => void
}

export type ThemeSwitcherState = {
  theme: boolean
  setTheme: (theme: boolean) => void
}
