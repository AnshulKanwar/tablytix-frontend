import Nav from "@/components/nav";
import "./globals.css";
import { Providers } from "@/components/providers";

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
        className="bg-white text-black dark:bg-zinc-950 dark:text-white px-5 sm:px-10 pb-20"
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
