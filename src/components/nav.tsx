import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const links = [
  {
    name: "Logo Redaction",
    href: "logo_redaction",
  },
];

export default function Nav() {
  return (
    <nav className="px-16 py-10 flex justify-between">
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
              className="font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
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
