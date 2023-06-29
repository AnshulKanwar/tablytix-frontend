import ComingSoon from "@/components/ui/coming-soon";
import Link from "next/link";

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
              <h1 className="mb-5 text-lg font-semibold">{name}</h1>
              {isReady ? (
                <p className="text-slate-600">{description}</p>
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
