"use client";

import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <button onClick={() => signIn()} className="normal-case btn">
      Sign in
    </button>
  );
}
