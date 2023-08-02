import SignInButton from "@/molecules/sign-in-button";
import SignOutButton from "@/molecules/sign-out-button";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function NavMenu() {
  const session = await getServerSession();

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href={"/"} className="text-xl normal-case btn btn-ghost">
          NextSpace
        </Link>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal">
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/users"}>Users</Link>
          </li>
        </ul>

        {!session ? <SignInButton /> : <SignOutButton />}
      </div>
    </div>
  );
}
