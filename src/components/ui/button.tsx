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
          className={`max-w-fit px-4 py-2 text-sm rounded-lg bg-slate-800 text-white ${className}`}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`px-5 py-2 text-sm rounded-lg bg-slate-900 text-white ${className}`}
        ></button>
      )}
    </div>
  );
}
