import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'

type QueryProvidersProps = {
  children: React.ReactNode
}

// Helper function to detect server vs. client
const isServer = typeof window === 'undefined'

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute stale time
      },
    },
  })
}

// Explicitly typing the browserQueryClient as QueryClient or undefined
let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient(): QueryClient {
  if (isServer) {
    // On the server: always create a new QueryClient
    return makeQueryClient()
  } else {
    // On the browser: create a new QueryClient if one doesn't already exist
    if (!browserQueryClient) {
      browserQueryClient = makeQueryClient()
    }
    return browserQueryClient
  }
}

export default function QueryProviders({ children }: QueryProvidersProps) {
  // Get the appropriate QueryClient for server or browser
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
