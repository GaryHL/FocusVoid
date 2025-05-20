import React from 'react'
import Link from 'next/link'
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from '@clerk/nextjs'

function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-4 lg:px-8">
      <Link href="/">
        <h2 className="font-made-soulmaze">Focus Void</h2>
      </Link>
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton
            mode="modal"
            fallbackRedirectUrl='/workspace'
            appearance={{ theme: 'dark' }}
          />
        </SignedOut>
        <SignedIn>
          <UserButton appearance={{ theme: 'dark' }} />
        </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar
