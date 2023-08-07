"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button onClick={() => signOut()} className="normal-case btn btn-ghost">
      Sign out
    </button>
  );
}
