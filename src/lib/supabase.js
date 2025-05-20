// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
//   async accessToken() {
//     return session?.getToken() ?? null
//   },
// })
// lib/supabase.ts
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const createSupabaseClientWithToken = (token) => {
  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  })
}

