import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'

import type { ReactNode } from 'react'

import appCss from '@/styles/app.css?url'
import { Header } from '@/components/header'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body className="max-w-7xl m-auto px-2 sm:px-4 w-full dark">
        <Header />
        {children}
        <Scripts />
      </body>
    </html>
  )
}
