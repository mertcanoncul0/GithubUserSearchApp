import { useEffect, useState } from 'preact/hooks'
import { useUserStore } from '../store/user'

export function Search() {
  const { isPending, setIsPending, setIsError } = useUserStore((state) => state)
  const { user, setUser } = useUserStore((state) => state)
  const [form, setForm] = useState({ username: '' })

  useEffect(() => {
    const search = window.location.search.replace('?name=', '') || ''

    async function handleSearchState() {
      setIsError(false, 0)
      setIsPending(true)

      const response = await fetch(`https://api.github.com/users/${search}`, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      })

      if (!response.ok) {
        setIsPending(false)
        setIsError(true, response.status)
        setUser({})
        return
      }

      const data = await response.json()

      setUser(data)
      setIsPending(false)
      setIsError(false, response.status)
    }

    if (search) {
      setForm({ username: search })
      handleSearchState()
    }
  }, [])

  async function handleSubmit(e: Event) {
    e.preventDefault()
    setIsError(false, 0)
    setIsPending(true)

    if (
      !form.username ||
      form.username === '' ||
      form.username.toLocaleLowerCase() === user?.login?.toLowerCase()
    ) {
      setIsPending(false)
      return
    }

    const response = await fetch(
      `https://api.github.com/users/${form.username}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }
    )

    if (!response.ok) {
      setIsPending(false)
      setIsError(true, response.status)
      setUser({})
      return
    }

    const data = await response.json()

    setUser(data)
    setIsPending(false)
    setIsError(false, response.status)
  }

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <div className='search-form-controller'>
        <button
          type='submit'
          aria-label='Submit search github form'
          disabled={isPending}
        >
          <img src='/search.svg' width={20} height={20} alt='Search Icon' />
        </button>
        <input
          type='text'
          name='username'
          autoComplete={'off'}
          value={form.username}
          onChange={(e) => {
            window.history.pushState({}, '', `?name=${e.currentTarget.value}`)
            setForm({ username: e.currentTarget.value })
          }}
          placeholder='Search GitHub username…'
        />
      </div>
      <button
        disabled={isPending}
        className='search-button'
        type='submit'
        aria-label='Submit search github form'
      >
        Search
      </button>
    </form>
  )
}
