import Button from "@/components/ui/button";
import ComingSoon from "@/components/ui/coming-soon";
import { ArrowRight } from "lucide-react";

const tools = [
  {
    name: "Layout Analysis",
    isReady: true,
    href: "layout-analysis",
    description: "Perform layout analysis",
  },
  {
    name: "Logo Redaction",
    isReady: true,
    href: "logo-redaction",
    description: "Redact logos from documents",
  },
  {
    name: "Financial Data Extraction",
    isReady: false,
  },
];

export default function Home() {
  return (
    <main className="grid place-items-center">
      <div className="max-w-4xl space-y-12">
        <p className="text-2xl sm:text-3xl font-semibold">
          Perform{" "}
          <span className="text-white bg-rose-500 py-px px-2 whitespace-nowrap leading-relaxed">
            document analysis
          </span>
          ,{" "}
          <span className="text-white bg-rose-500 py-px px-2 whitespace-nowrap leading-relaxed">
            logo redaction
          </span>{" "}
          and{" "}
          <span className="text-white bg-rose-500 py-px px-2 whitespace-nowrap leading-relaxed">
            {" "}
            extract tables
          </span>{" "}
          from documents in various formats
        </p>
        <div className="p-3 grid grid-cols-1 md:grid-cols-3 gap-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
          {tools.map(({ name, isReady, href, description }) => (
            <div
              key={name}
              className="p-5 flex flex-col justify-between items-start rounded-md bg-white dark:bg-zinc-950 cursor-default"
            >
              <h1 className="mb-3 text-lg font-semibold">{name}</h1>
              {isReady ? (
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
              ) : (
                <ComingSoon />
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
