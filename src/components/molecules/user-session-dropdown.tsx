"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function UserSessionDropdown() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <span className="loading loading-infinity loading-md"></span>;
  }

  if (status === "authenticated") {
    return (
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="overflow-hidden relative w-10 rounded-full">
            <Image
              alt={`${session.user?.name || "User"}'s profile pic'`}
              src={session.user?.image ?? "/mememan.webp"}
              fill={true}
              objectFit="contain"
            />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="p-2 mt-3 w-52 shadow menu menu-sm dropdown-content z-[1] bg-base-100 rounded-box"
        >
          <li>
            <Link href={`/dashboard`}>Dashboard</Link>
          </li>
          <li>
            <button onClick={() => signOut()} className="normal-case">
              Sign out
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
