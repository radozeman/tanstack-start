import { createServerFn } from '@tanstack/react-start'
import { authClient } from '@/features/auth/client'

const signIn = async () => {
  return await authClient.signIn.social({
    provider: 'github',
  })
}

const signOut = createServerFn({ method: 'POST' }).handler(async (ctx) => {
  return await authClient.signOut()
})

export { signIn, signOut }
