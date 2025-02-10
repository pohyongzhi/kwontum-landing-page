import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react"; // Import React

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Kwontum Taekwondo",
    description:
        "Welcome to our Kwontum Taekwondo - Discover the Art of Korean Martial Arts",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* <link
                    href="https://fonts.cdnfonts.com/css/dolce-vita"
                    rel="stylesheet"
                /> */}
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
