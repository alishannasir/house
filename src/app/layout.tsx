import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import {SwitchButtonProvider} from "@/GlobalStates/SwitchButtonContext"

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "House Rent",
  description: "House rent application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <SwitchButtonProvider>
            <Navbar />
            {children}
        </SwitchButtonProvider>
       
      </body>
    </html>
  );
}
