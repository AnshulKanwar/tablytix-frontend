import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const links = [
  {
    name: "Logo Redaction",
    href: "logo_redaction",
  },
];

// TODO: responsive Nav
export default function Nav() {
  return (
    <nav className="py-10 flex justify-between">
      <div>
        <Link href="/">
          <h1 className="text-3xl font-bold">Tablytix</h1>
        </Link>
      </div>
      <div>
        <ul className="flex gap-12 items-center">
          {links.map(({ name, href }) => (
            <li
              key={name}
              className="hidden md:inline font-medium text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
            >
              <Link href={href}>{name}</Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
