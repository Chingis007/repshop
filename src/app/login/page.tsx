"use client"
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components"

import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <main className="h-dvh flex flex-col items-center gap-6 text-4xl p-4">
      <h1>Repair Shop</h1>
      <p>To try out app with manager permission:</p>
      <p>
        karaulnekerell@gmail.com{" "}
        <button
          onClick={() =>
            navigator.clipboard.writeText("karaulnekerell@gmail.com")
          }
        >
          COPY
        </button>
      </p>
      <p>
        1234567890987654321a{" "}
        <button
          onClick={() => navigator.clipboard.writeText("1234567890987654321a")}
        >
          COPY
        </button>
      </p>
      <Button>
        <LoginLink>Sign in</LoginLink>
      </Button>
    </main>
  )
}
