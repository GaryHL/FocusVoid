'use client'

import { useSession } from '@clerk/nextjs'
import { useMemo } from 'react'
import { createClient } from '@supabase/supabase-js'

export function useClerkSupabaseClient() {
  const { session } = useSession()

  const supabase = useMemo(() => {
    if (!session) return null

    return createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        global: {
          fetch: async (url, options = {}) => {
            const token = await session.getToken({ template: 'supabase' })
            const headers = new Headers(options?.headers)
            headers.set('Authorization', `Bearer ${token}`)
            return fetch(url, { ...options, headers })
          },
        },
      }
    )
  }, [session])

  return supabase
}
