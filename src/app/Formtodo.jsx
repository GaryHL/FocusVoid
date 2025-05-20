'use client'

import React, { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { useClerkSupabaseClient } from '@/lib/useClerkSupabaseClient'
import { Button } from '@/components/ui/button'

function FormTodo() {
  const supabase = useClerkSupabaseClient()
  const { user } = useUser()
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name.trim() || !supabase) return

    setLoading(true)

    try {
      const { error } = await supabase
        .from('tasks')
        .insert({ name: name.trim() })

      if (error) throw error

      setName('')
    } catch (error) {
      console.error('❌ Error al crear la tarea:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Agregar una nueva tarea..."
          className="flex-1 px-4 py-2 border border-[#595959] rounded-lg bg-[#ccc]/5 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[#595959]"
        />
        <Button
          type="submit"
          disabled={loading || !name.trim()}
          className="bg-[#595959] hover:bg-[#404040] text-white"
        >
          {loading ? 'Agregando...' : 'Agregar'}
        </Button>
      </div>
    </form>
  )
}

export default FormTodo
