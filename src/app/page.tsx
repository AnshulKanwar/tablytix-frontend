import ComingSoon from "@/components/ui/coming-soon";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-8rem)] grid place-items-center">
      <div className="max-w-4xl space-y-12">
        <p className="text-3xl font-semibold">
          Perform document analysis, logo redaction and extract tables from
          documents in various formats
        </p>
        <div className="p-3 grid grid-cols-3 gap-3 bg-slate-100 rounded-lg">
          <div className="p-5 rounded-md bg-white transition hover:scale-105">
            <h1 className="mb-5 text-lg font-semibold">Logo Redaction</h1>
            <p className="text-slate-600">Redact logos from documents</p>
          </div>
          <div className="p-5 rounded-md bg-white transition hover:scale-105">
            <h1 className="mb-5 text-lg font-semibold">Financial Data Extraction</h1>
            <ComingSoon />
          </div>
          <div className="p-5 rounded-md bg-white transition hover:scale-105">
            <h1 className="mb-5 text-lg font-semibold">Document Analysis</h1>
            <ComingSoon />
          </div>
        </div>
      </div>
    </main>
  );
}
