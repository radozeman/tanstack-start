import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button/button'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Button onClick={() => null}>SIGN IN TO GITHUB</Button>
}
