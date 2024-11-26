import type { Metadata } from "next";
import { Lexend, Cormorant_Garamond } from 'next/font/google'
import '../app/styles/global.css';
import {NextFont} from "next/dist/compiled/@next/font";
import { ApolloWrapper } from "./ApolloWrapper";

const interFont : NextFont = Lexend({ subsets: ["latin"], weight : ["300", "400", "600", "900"]});
const Cormorant_Garamond_font : NextFont = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "700"]});

export const metadata: Metadata = {
  title: "Tyron Hayman - Web Developer + Pixel Pusher",
  description: "Web Developer + Pixel Pusher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.className} antialiased`}
      >
          <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
