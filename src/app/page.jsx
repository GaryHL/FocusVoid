import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from '@clerk/nextjs'
import Navbar from '@/components/generic/Navbar'
export default function Home() {
  return (
    <main className="w-full max-w-6xl mx-auto pt-8 min-h-screen">
      <Navbar />
      <div className="w-full h-full min-h-96 flex items-center justify-center flex-col gap-4">
        <h1 className="font-made-soulmaze text-4xl text-center max-w-5xl text-balance">
          Enfócate con un compañero. Ve tu progreso cobrar vida.
        </h1>
        <p className="text-center max-w-5xl text-balance">
          Bloquea distracciones, organiza tus tareas por ciclos,
          <br /> y evoluciona junto a tu compañero espiritual.
        </p>
        <p className="text-center max-w-5xl text-balance">
          Empieza a concentrarte ahora:
        </p>
        <Button className="">Comenzar</Button>
      </div>
    </main>
  )
}
