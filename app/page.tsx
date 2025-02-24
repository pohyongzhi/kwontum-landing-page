"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Award, House, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
    return (
        <>
            <section>
                <div className="flex items-center justify-center m-40 xs:m-50 lg:m-60">
                    <div className="text-center px-4 sm:px-6 lg:px-8">
                        <h1 className="text-6xl xs:7xl lg:text-8xl font-bold font-dolceVita mb-4 text-kwontum-darkRed">
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

            <section className="py-12 sm:py-16 lg:py-20 bg-gray-100">
                <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-600 font-dolceVita">
                    &quot;DRIVEN BY FUNDAMENTALS,
                    <br></br>
                    DEFINED BY EXCELLENCE&quot;
                </h2>
            </section>

            <section id="about" className="py-16 sm:py-20 lg:py-30 bg-white">
                <div className="px-4 sm:px-6 lg:px-8">
                    <h2 className="text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center text-[#72161D] font-dolceVita">
                        We Are
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-10 text-center">
                        <div className="flex flex-col items-center gap-4">
                            <Award size={85} className="" />
                            <p className="p-6 rounded-xl bg-kwontum-red text-white text-xl font-bold">
                                PASSION-DRIVEN
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <House size={85} className="" />
                            <p className="p-6 rounded-xl bg-kwontum-red text-white text-xl font-bold">
                                FAMILY-ORIENTED
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <Star size={85} className="" />
                            <p className="p-6 rounded-xl bg-kwontum-red text-white text-xl  font-bold">
                                EXELLENCE-BOUND
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Classes Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center text-[#72161D] font-dolceVita">
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
                                    Master advanced techniques, sparring, and
                                    prepare for black belt.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="flex flex-col px-4 sm:px-6 lg:px-8">
                    <h2 className="text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center text-gray-600 font-dolceVita">
                        READY TO KICKSTART YOUR JOURNEY?
                    </h2>
                    <a
                        href="https://wa.me/6583154443?text=Hello%21%20Thank%20You%20For%20Reaching%20Out!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center"
                    >
                        <Button className="bg-[#C1272D] hover:bg-[#72161D] text-white border border-[#C1272D] hover:border-[#72161D] text-base sm:text-lg px-6 py-5 mt-5">
                            BOOK FREE TRIAL
                        </Button>
                    </a>
                </div>
            </section>

            <section className="py-12 sm:py-16 lg:py-20 bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center text-[#72161D] font-dolceVita">
                        TESTIMONIALS
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="bg-white hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <blockquote className="text-gray-700 mb-4">
                                    &ldquo;The instructors are passionate and
                                    dedicated. My child has grown so much in
                                    confidence since joining.&ldquo;
                                </blockquote>
                                <footer className="text-left">
                                    <p className="font-bold text-[#72161D]">
                                        Sarah Chen
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Parent of Tommy, 8 years old
                                    </p>
                                </footer>
                            </CardContent>
                        </Card>

                        <Card className="bg-white hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <blockquote className="text-gray-700 mb-4">
                                    &ldquo;Great environment for learning. The
                                    focus on fundamentals really helped improve
                                    my technique.&ldquo;
                                </blockquote>
                                <footer className="text-left">
                                    <p className="font-bold text-[#72161D]">
                                        David Tan
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Adult Student, 2 years
                                    </p>
                                </footer>
                            </CardContent>
                        </Card>

                        <Card className="bg-white hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <blockquote className="text-gray-700 mb-4">
                                    &ldquo;The competition team training has
                                    pushed me to achieve things I never thought
                                    possible.&ldquo;
                                </blockquote>
                                <footer className="text-left">
                                    <p className="font-bold text-[#72161D]">
                                        Michelle Lee
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        National Competitor
                                    </p>
                                </footer>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="px-4 sm:px-6 lg:px-8">
                    <h2 className="text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center text-[#72161D] font-dolceVita">
                        Contact Us
                    </h2>

                    <div className="gap-8">
                        <p className="text-center mb-4 text-gray-700">
                            VISIT US OR GET IN TOUCH VIA WHATSAPP TO LEARN MORE
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 p-8">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.640655882624!2d103.9164382!3d1.3921388000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d0033a4247d%3A0xc7e1d03f20860ba7!2sKwontum%20Taekwondo!5e0!3m2!1sen!2ssg!4v1739209001781!5m2!1sen!2ssg"
                                width="350"
                                height="250"
                                className="rounded-[12px] border-0"
                                loading="lazy"
                                allowFullScreen={true}
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Kwontum Taekwondo Location"
                                aria-label="Google Maps showing location of Kwontum Taekwondo"
                            />
                            <div className="flex flex-col  text-start text-gray-700">
                                <p className="mb-2">
                                    <strong>Address:</strong> 6 Tebing Lane
                                    #01-02A, Singapore 828835
                                </p>
                                {/* <p className="mb-2">
                                    <strong>Phone:</strong> (123) 456-7890
                                </p> */}
                                <p className="mb-4">
                                    <strong>Email:</strong> Hello@kwontum.com.sg
                                </p>
                                <a
                                    href="https://wa.me/6583154443?text=Hello%21%20Thank%20You%20For%20Reaching%20Out!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center"
                                >
                                    <Button className="bg-[#C1272D] hover:bg-[#72161D] text-white border border-[#C1272D] hover:border-[#72161D] text-base sm:text-lg px-6 py-3 mt-5">
                                        Contact Us
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <a
                href="https://wa.me/6583154443?text=Hello%21%20Thank%20You%20For%20Reaching%20Out!"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
            >
                <MessageCircle className="h-6 w-6" />
                <span className="sr-only">Contact on WhatsApp</span>
            </a>
        </>
    );
}
