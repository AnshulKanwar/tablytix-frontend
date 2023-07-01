import Nav from "@/components/nav";
import "./globals.css";
import { Quicksand } from "next/font/google";
import { Providers } from "@/components/providers";

const quicksand = Quicksand({ subsets: ["latin"] });

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
      <body
        className={`${quicksand.className} bg-white text-black dark:bg-slate-950 dark:text-white px-5 sm:px-10 pb-20`}
      >
        <Providers>
          <Nav />
          <div className="mt-20">
          {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
