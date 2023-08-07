import SignInButton from "@/atoms/sign-in-button";
import SignOutButton from "@/atoms/sign-out-button";
import { getServerSession } from "next-auth";
import Link from "next/link";
import UserSessionDropdown from "../molecules/user-session-dropdown";

export const PageLinks = () => {
  return (
    <>
      <li>
        <Link href={"/users"}>Users</Link>
      </li>
      <li>
        <Link href={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
    </>
  );
};

export default async function NavMenu() {
  const session = await getServerSession();

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="md:hidden btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 w-52 shadow menu menu-sm dropdown-content z-[1] bg-base-100 rounded-box"
          >
            <PageLinks />
          </ul>
        </div>
        <Link href={"/"} className="text-xl normal-case btn btn-ghost">
          NextSpace
        </Link>
      </div>
      <div className="hidden md:flex navbar-end">
        <ul className="menu menu-horizontal">
          <PageLinks />
        </ul>

        {!session ? (
          <SignInButton />
        ) : (
          <>
            <UserSessionDropdown />
          </>
        )}
      </div>
    </div>
  );
}
