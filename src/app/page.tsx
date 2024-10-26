"use client"

import UserButton from "@/features/auth/components/userButton";
import { useAuthActions } from "@convex-dev/auth/react"

export default function Home() {
  const { signOut } = useAuthActions();

  return (
      <div>
        Logged In!!
        <UserButton />
      </div>
  )
}
