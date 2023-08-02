"use client";

import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === "loading") {
    return <span className="loading loading-infinity loading-md"></span>;
  }

  if (status === "authenticated") {
    return (
      <Link href={`/dashboard`}>
        <Image
          src={session.user?.image ?? ""}
          width={32}
          height={32}
          alt="Your Name"
        />
      </Link>
    );
  }

  return (
    <button onClick={() => signIn()} className="normal-case btn btn-ghost">
      Sign in
    </button>
  );
}
