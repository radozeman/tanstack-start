import { createAPIFileRoute } from '@tanstack/react-start/api'
import { authServer } from '@/features/auth/server'

const APIRoute = createAPIFileRoute('/api/auth/$')({
  GET: ({ request }) => {
    return authServer.handler(request)
  },
  POST: ({ request }) => {
    return authServer.handler(request)
  },
})

export { APIRoute }
