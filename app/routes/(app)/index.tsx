import { createFileRoute } from '@tanstack/react-router'
import { authClient } from '@/features/auth/client'

export const Route = createFileRoute('/(app)/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data: session } = authClient.useSession()

  return (
    <div>
      <h2 className="mb-5">AUTHENTICATED - Welcome to HomePage</h2>
      <div className="mb-5">{JSON.stringify(session?.session)}</div>
      <div className="mb-5">{JSON.stringify(session?.user)}</div>
    </div>
  )
}
