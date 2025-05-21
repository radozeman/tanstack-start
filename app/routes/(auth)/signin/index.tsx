import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button/button'
import { signIn } from '@/features/auth/server-functions/sign-in'

export const Route = createFileRoute('/(auth)/signin/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Button onClick={signIn}>SIGN IN TO GITHUB</Button>
}
