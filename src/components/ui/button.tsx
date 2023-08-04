import Link from "next/link";
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  asLink?: boolean;
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  onClick,
  className,
  asLink,
  href,
  children,
}: ButtonProps) {
  return (
    <div>
      {asLink ? (
        <Link
          href={href!}
          className={`max-w-fit px-4 py-1.5 text-sm rounded-lg bg-zinc-800 dark:bg-zinc-100 text-white dark:text-black ${className}`}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`px-5 py-2 text-sm rounded-lg bg-zinc-800 dark:bg-zinc-100 text-white dark:text-black ${className}`}
        >
          {children}
        </button>
      )}
    </div>
  );
}
