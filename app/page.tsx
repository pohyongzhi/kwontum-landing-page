"use client";

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Menu } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Home() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-background font-nanum">
            <header className="sticky top-0 z-50 w-full border-b border-[#72161D] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 sm:h-20 items-center justify-between">
                        <div className="flex items-center">
                            <Link href="/">
                                <Image
                                    src="/logo.png"
                                    alt="Taekwondo Dojang Logo"
                                    width={150}
                                    height={40}
                                    priority
                                />
                            </Link>
                        </div>
                        <nav className="flex items-center space-x-4">
                            <Link
                                href="#about"
                                className="hidden sm:inline-block hover:text-[#C1272D] transition-colors text-sm sm:text-base font-dolceVita font-bold"
                            >
                                About Us
                            </Link>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="sm:hidden text-[#72161D] hover:text-white hover:bg-[#C1272D]"
                                onClick={() =>
                                    setIsMobileMenuOpen(!isMobileMenuOpen)
                                }
                            >
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </nav>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    <div
                        className={`sm:hidden ${
                            isMobileMenuOpen ? "block" : "hidden"
                        }`}
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
                            <Link
                                href="#about"
                                className="block px-3 py-2 text-base font-dolceVita font-bold text-[#72161D] hover:text-[#C1272D] hover:bg-gray-50 rounded-md"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About Us
                            </Link>
                            <Link
                                href="#classes"
                                className="block px-3 py-2 text-base font-dolceVita font-bold text-[#72161D] hover:text-[#C1272D] hover:bg-gray-50 rounded-md"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Classes
                            </Link>
                            <Link
                                href="#contact"
                                className="block px-3 py-2 text-base font-dolceVita font-bold text-[#72161D] hover:text-[#C1272D] hover:bg-gray-50 rounded-md"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh]">
                    <Image
                        src="/placeholder.svg?height=800&width=1200"
                        alt="Taekwondo practice"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-background bg-opacity-70 flex items-center justify-center">
                        <div className="text-center px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold font-dolceVita mb-4 text-kwontum-darkRed">
                                WE ARE KWONTUM.
                            </h1>
                            <a
                                href="https://wa.me/6583154443?text=Hello%21%20Thank%20You%20For%20Reaching%20Out!"
                                target="_blank"
                                rel="noopener noreferrer"
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

                {/* About Section */}
                <section
                    id="about"
                    className="py-12 sm:py-16 lg:py-20 bg-white"
                >
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-[#72161D] font-dolceVita">
                            About Our Dojang
                        </h2>
                        <p className="text-base sm:text-lg text-center max-w-3xl mx-auto text-gray-700">
                            At Kwontum Taekwondo, We are passion-driven,
                            family-focused, and excellence-bound sports team
                            striving to do our best to provide high quality
                            taekwondo education. "
                            <strong>
                                DRIVEN BY FUNDAMENTALS, DEFINED BY EXCELLENCE"
                            </strong>
                        </p>
                    </div>
                </section>

                {/* Classes Section */}
                <section className="py-12 sm:py-16 lg:py-20 bg-gray-100">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-[#72161D] font-dolceVita">
                            Our Classes
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Card className="bg-white">
                                <CardHeader>
                                    <CardTitle className="text-[#72161D] text-lg sm:text-xl font-dolceVita">
                                        Toddlers
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">
                                        Learn the basics of Taekwondo, including
                                        stances, blocks, and kicks.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="bg-white">
                                <CardHeader>
                                    <CardTitle className="text-[#72161D] text-lg sm:text-xl font-dolceVita">
                                        Teens & Adults
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">
                                        Advance your skills with more complex
                                        techniques and forms.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="bg-white">
                                <CardHeader>
                                    <CardTitle className="text-[#72161D] text-lg sm:text-xl font-dolceVita">
                                        Competition Class
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">
                                        Master advanced techniques, sparring,
                                        and prepare for black belt.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-12 sm:py-16 lg:py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-[#72161D] font-dolceVita">
                            Contact Us
                        </h2>
                        <div className="max-w-md mx-auto">
                            <p className="text-center mb-4 text-gray-700">
                                Visit us or get in touch via WhatsApp to learn
                                more about our Taekwondo classes.
                            </p>
                            <div className="text-center text-gray-700">
                                <p className="mb-2">
                                    <strong>Address:</strong> 6 Tebing Lane
                                    #01-02A, Singapore 828835
                                </p>
                                <p className="mb-2">
                                    <strong>Phone:</strong> (123) 456-7890
                                </p>
                                <p className="mb-4">
                                    <strong>Email:</strong> Hello@kwontum.com.sg
                                </p>
                                {/* <Button className="bg-[#C1272D] hover:bg-[#72161D] text-white border border-[#C1272D] hover:border-[#72161D] text-base sm:text-lg px-6 py-3">
                                    Contact Us
                                </Button> */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-6 bg-background text-gray-400 border-t border-[#72161D]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p>&copy; 2025 Taekwondo Dojang. All rights reserved.</p>
                </div>
            </footer>

            <a
                href="https://wa.me/6583154443?text=Hello%21%20Thank%20You%20For%20Reaching%20Out!"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
            >
                <MessageCircle className="h-6 w-6" />
                <span className="sr-only">Contact on WhatsApp</span>
            </a>
        </div>
    );
}
