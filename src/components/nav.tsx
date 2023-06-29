import Link from "next/link";

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
        <h1 className="text-3xl font-bold">Tablytix</h1>
      </div>
      <div>
        <ul className="flex">
          {links.map(({ name, href }) => (
            <li key={name} className="font-medium text-slate-600 hover:text-slate-800">
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
