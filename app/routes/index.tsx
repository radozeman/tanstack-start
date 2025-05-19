import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button/button'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/"
      <Button variant="ghost">CLICK ME</Button>
    </div>
  )
}
