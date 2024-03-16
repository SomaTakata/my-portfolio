import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://soma-takata.com"),

  title: "SomaTakata",
  authors: {
    name: "SomaTakata",
  },

  description:
    "Based in Japan, I'm a Frontend developer passionate about building a modern web application that users love.",
  openGraph: {
    title: "SomaTakata",
    description:
      "Based in Japan, I'm a Frontend developer passionate about building a modern web application that users love.",
    url: "https://soma-takata.com",
    siteName: "SomaTakata",
    images: "/og.png",
    type: "website",
  },
  keywords: ["SomaTakata", "Soma Takata", "高田颯真"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={space_Grotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
