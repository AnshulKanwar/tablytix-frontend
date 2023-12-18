import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const tools = [
  {
    name: "Layout Analysis",
    href: "layout-analysis",
    description: "Perform layout analysis",
  },
  {
    name: "Logo Redaction",
    href: "logo-redaction",
    description: "Redact logos from documents",
  },
  {
    name: "Table Extraction",
    href: "table-extraction",
    description: "Table Extraction from pdfs",
  },
];

export default function Home() {
  return (
    <main className="grid place-items-center">
      <div className="max-w-4xl space-y-12">
        <p className="text-2xl sm:text-3xl font-semibold">
          Perform document analysis, logo redaction and extract tables from
          documents in various formats
        </p>
        <div className="p-3 grid grid-cols-1 md:grid-cols-3 gap-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
          {tools.map(({ name, href, description }) => (
            <div
              key={name}
              className="p-5 flex flex-col justify-between items-start rounded-md bg-white dark:bg-zinc-950 cursor-default"
            >
              <h1 className="mb-3 text-lg font-semibold">{name}</h1>
              <div className="space-y-3">
                <p className="text-zinc-500">{description}</p>
                <Button
                  asLink
                  href={href}
                  className="flex items-center gap-3 group"
                >
                  <p className="font-semibold">Try Now</p>
                  <ArrowRight className="transition group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
