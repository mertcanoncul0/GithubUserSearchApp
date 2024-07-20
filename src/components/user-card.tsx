import { useUserStore } from "../store/user"
import { UserCardSkeleton } from "./user-card-skeleton"
import { UserCard as Card } from "./ui/user-card"

export function UserCard() {
  const { user, isPending, isError } = useUserStore((state) => state)

  if (isError.error || isError.statusCode === 404) {
    return (
      <p className="display-message">
        {isError.statusCode === 404 ? "User not found" : "Something went wrong"}
      </p>
    )
  }

  if (!isError.error && Object.keys(user).length === 0 && !isPending) {
    return <Card />
  }

  if (isPending && !isError.error) {
    return <UserCardSkeleton />
  }

  return <Card user={user} />
}
