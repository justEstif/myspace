"use client"; // Error components must be Client components

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const [errorMessage, setErrorMessage] = useState<Error | null>(null);

  useEffect(() => {
    console.error(error);
    setErrorMessage(error);
  }, [error]);

  if (errorMessage) {
    errorMessage.message;
  }

  return (
    <div className="space-y-6">
      <div className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 stroke-current shrink-0"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error! {errorMessage && errorMessage.message}</span>
      </div>

      <div className="btn-group">
        <Link className="btn" href={"/"}>
          Home
        </Link>
        <button className="btn" onClick={() => reset()}>
          Try again
        </button>
      </div>
    </div>
  );
}
