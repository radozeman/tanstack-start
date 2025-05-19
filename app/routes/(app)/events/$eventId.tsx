import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/events/$eventId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { eventId } = Route.useParams()

  return <div>{`Hello from /events/${eventId}`}</div>
}
