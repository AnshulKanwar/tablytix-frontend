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
      <body className={`${quicksand.className} bg-white text-black dark:bg-black dark:text-white`}>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
