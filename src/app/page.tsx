import Button from "@/components/ui/button";
import ComingSoon from "@/components/ui/coming-soon";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Logo Redaction",
    isReady: true,
    href: "logo_redaction",
    description: "Redact logos from documents",
  },
  {
    name: "Financial Data Extraction",
    isReady: false,
  },
  {
    name: "Document Analysis",
    isReady: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-8rem)] grid place-items-center">
      <div className="max-w-4xl space-y-12">
        <p className="text-3xl font-semibold">
          Perform document analysis, logo redaction and extract tables from
          documents in various formats
        </p>
        <div className="p-3 grid grid-cols-3 gap-3 bg-slate-100 rounded-lg">
          {products.map(({ name, isReady, href, description }) => (
            <div key={name} className="p-5 rounded-md bg-white">
              <h1 className="mb-3 text-lg font-semibold">{name}</h1>
              {isReady ? (
                <div className="space-y-2">
                  <p className="text-slate-600">{description}</p>
                  <Button
                    asLink
                    href={href}
                    className="flex gap-3 group"
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
