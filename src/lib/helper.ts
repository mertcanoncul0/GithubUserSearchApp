export function formatDateToJoined(
  dateString: string | number | Date | undefined
): string {
  if (!dateString) return ""

  const date = new Date(dateString)

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return `Joined ${formattedDate}`
}
