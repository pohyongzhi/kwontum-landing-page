"use client";

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
    return (
        <main>
            {/* SECTION 1: MAIN */}
            <section
                id="main-section"
                className="w-full relative "
                style={{
                    backgroundImage: "url('/img/hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute inset-0 bg-gray-900/50" />
                <div className="relative max-w-screen-xl mx-auto px-8 sm:px-10 lg:px-12 py-20">
                    <div className="flex flex-col gap-8 text-center">
                        <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-8xl font-bold font-dolceVita text-white">
                            WE ARE KWONTUM.
                        </h1>
                        <a
                            href="https://wa.me/6583154443?text=Hello%21%20Thank%20You%20For%20Reaching%20Out!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center"
                        >
                            <Button
                                size="lg"
                                className="bg-[#C1272D] hover:bg-[#72161D] text-white text-base sm:text-lg px-6 py-3 mt-8"
                            >
                                Contact Us
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
