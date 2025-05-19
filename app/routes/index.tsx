import { Button } from "@/components/ui/button/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/"
      <Button variant="ghost">CLICK ME</Button>
    </div>
  );
}
