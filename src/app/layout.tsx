import Nav from "@/components/nav";
import "./globals.css";
import { Providers } from "@/components/providers";
import { AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Tablytix",
  description: "Perform logo redaction",
  themeColor: "black",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-zinc-950 dark:text-white pb-20">
        <Providers>
          <div className="flex justify-center gap-2 items-center py-3 bg-red-500 text-white">
            <AlertTriangle />
            <p>
              The project has been shut down permanently due to its inability to
              cover the costs.
            </p>
          </div>
          <div className="px-5 sm:px-10 ">
            <Nav />
            <div className="mt-20">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
