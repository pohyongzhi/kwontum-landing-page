"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Award, House, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ThemeToggle from "@/components/ThemeToggle"; // Import the ThemeToggle component

export default function Home() {
    return (
        <>

        {/* Position the ThemeToggle at the top-right */}
        <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
        </div>
        
            <section>
                <div className="flex items-center justify-center m-40 xs:m-50 lg:m-60">
                    <div className="text-center px-4 sm:px-6 lg:px-8">
                        <h1 className="text-6xl xs:7xl lg:text-8xl font-bold font-dolceVita mb-4 text-kwontum-darkRed">
                            WE ARE KWONTUM!
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

            <section className="py-12 sm:py-16 lg:py-20 bg-gray-100 dark:bg-gray-800">
                <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-600 font-dolceVita">
                    &quot;DRIVEN BY FUNDAMENTALS,
                    <br></br>
                    DEFINED BY EXCELLENCE&quot;
                </h2>
            </section>

            <section id="about" className="py-16 sm:py-20 lg:py-30 bg-white dark:bg-gray-950">
                <div className="px-4 sm:px-6 lg:px-8">
                    <h2 className="text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center text-[#72161D] font-dolceVita">
                        We Are
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-10">
                        <div className="flex flex-col  gap-4 py-6 px-10 rounded-2xl border border-kwontum-darkRed border-opacity-50 font-dolceVita font-bold max-w-[400px] shadow-md hover:scale-105 transition-transform dark:bg-gray-900">
                            <Award size={50} className="" />
                            <p className="text-2xl font-bold">PASSION-DRIVEN</p>
                            <p className="text-gray-600 font-nanum">
                                Fueled by dedication to excellence in every
                                class we undertake
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 py-6 px-10 rounded-2xl border border-kwontum-darkRed border-opacity-50 font-dolceVita font-bold max-w-[400px] shadow-lg hover:scale-105 transition-transform dark:bg-gray-900">
                            <House size={50} className="" />
                            <p className="text-2xl font-bold">
                                FAMILY-ORIENTED
                            </p>
                            <p className="text-gray-600 font-nanum">
                                Creating a supportive and nurturing environment
                                for every student
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 py-6 px-10 rounded-2xl border border-kwontum-darkRed border-opacity-50 font-dolceVita font-bold max-w-[400px] shadow-lg hover:scale-105 transition-transform dark:bg-gray-900">
                            <Star size={50} className="" />
                            <p className="text-2xl font-bold">
                                EXCELLENCE-BOUND
                            </p>
                            <p className="text-gray-600 font-nanum">
                                Committed to achieving the highest standards in
                                martial arts training
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Classes Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-100 dark:bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center text-[#72161D] font-dolceVita">
                        Our Classes
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="bg-white dark:bg-gray-900">
                            <CardHeader>
                                <CardTitle className="text-[#72161D] text-2xl font-dolceVita">
                                    Toddlers
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 font-nanum">
                                    Learn the basics of Taekwondo, including
                                    stances, blocks, and kicks.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white dark:bg-gray-900">
                            <CardHeader>
                                <CardTitle className="text-[#72161D] text-2xl font-dolceVita">
                                    Teens & Adults
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 font-nanum">
                                    Advance your skills with more complex
                                    techniques and forms.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white dark:bg-gray-900">
                            <CardHeader>
                                <CardTitle className="text-[#72161D] text-2xl font-dolceVita">
                                    Competition Class
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 font-nanum">
                                    Master advanced techniques, sparring, and
                                    prepare for black belt.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section id="about" className="py-12 sm:py-16 lg:py-28 bg-white dark:bg-gray-900">
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

            <section className="py-12 sm:py-16 lg:py-20 bg-gray-100 dark:bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center text-[#72161D] font-dolceVita">
                        TESTIMONIALS
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="bg-white hover:shadow-lg transition-shadow dark:bg-gray-900 border-2 border-[#72161D] rounded-xl">
                            <CardContent className="pt-6">
                                <blockquote className="text-gray-700 dark:text-white italic">
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

                        <Card className="bg-white hover:shadow-lg transition-shadow dark:bg-gray-900 border-2 border-[#72161D] rounded-xl">
                            <CardContent className="pt-6">
                                <blockquote className="text-gray-700 dark:text-white italic">
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

                        <Card className="bg-white hover:shadow-lg transition-shadow dark:bg-gray-900 border-2 border-[#72161D] rounded-xl">
                            <CardContent className="pt-6">
                                <blockquote className="text-gray-700 dark:text-white italic">
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

                        <Card className="bg-white hover:shadow-lg transition-shadow dark:bg-gray-900 border-2 border-[#72161D] rounded-xl">
                            <CardContent className="pt-6">
                                <blockquote className="text-gray-700 dark:text-white italic">
                                    &ldquo;Lessons with Ben at Kwontum were both enjoyable and fruitful.
                                    Being a new joiner, Ben has displayed the utmost patience and lesson 
                                    plans were well thought out for my progress. His emphasis on small details 
                                    such as postures and execution shows his dedication and belief in learning and doing things the right way.&ldquo;
                                </blockquote>
                            <footer className="text-left mt-4">
                                <p className="font-bold text-[#72161D]">Kang Ning</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Finance Professional, 32 years old</p>
                            </footer>
                            </CardContent>
                        </Card>

                        <Card className="bg-white hover:shadow-lg transition-shadow dark:bg-gray-900 border-2 border-[#72161D] rounded-xl">
                            <CardContent className="pt-6">
                                <blockquote className="text-gray-700 dark:text-white italic">
                                    &ldquo;Coach Ben is a humble and professional coach. With his great guidance and fun teaching, 
                                    he has built confidence in my son who is a 6-year-old learning Taekwondo under him. Not only that, 
                                    he has vast knowledge of fun teaching methods, giving the kids every opportunity to explore ways of 
                                    Taekwondo training - buiding fitness, mental resilience and good character in them. He is not just an instructor, 
                                    mentor but also a guardian figure to his students. My son Aiden has ever since been keen and looking forward to 
                                    every Saturday’s lesson where he can enjoy Coach Ben’s teaching and have fun with his fellow mates.&ldquo;
                                </blockquote>
                            <footer className="text-left mt-4">
                                <p className="font-bold text-[#72161D]">Chong Chih Chung</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Parent of Aiden Chong, 7 years old</p>
                            </footer>
                            </CardContent>
                        </Card>

                        <Card className="bg-white hover:shadow-lg transition-shadow dark:bg-gray-900 border-2 border-[#72161D] rounded-xl">
                            <CardContent className="pt-6">
                                <blockquote className="text-gray-700 dark:text-white italic">
                                    &ldquo;Kwontum feels more like a family than just a school. Even though I’ve only recently joined, 
                                    I’ve felt so welcomed and accepted, regardless of age differences or how short a time I’ve been here.
                                    I was genuinely touched when the members came to support me during NSG. Ben Sir strikes the perfect 
                                    balance between humor and strictness. He's incredibly detailed and takes the time to explain his training 
                                    plans to each student. His personalized approach and dedication make training both fun and effective.&ldquo;
                                </blockquote>
                            <footer className="text-left mt-4">
                                <p className="font-bold text-[#72161D]">Kallie Tan</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">14 years old</p>
                            </footer>
                            </CardContent>
                        </Card>

                        <Card className="bg-white hover:shadow-lg transition-shadow dark:bg-gray-900 border-2 border-[#72161D] rounded-xl">
                            <CardContent className="pt-6">
                                <blockquote className="text-gray-700 dark:text-white italic">
                                    &ldquo;I want to express my appreciation for the incredible guidance and mentorship Ben has provided to my son over the past 6 months.
                                    Under Ben's expert instruction, my son has improved his physical skills and techniques and developed valuable life skills such as discipline, 
                                    perseverance, and self-confidence
                                    
                                    Ben has the unique ability to connect with each student, tailoring their teaching style to meet the individual needs and abilities of each child.
                                    His patience, enthusiasm, and dedicaation to the sport are contagious, and my son always looks forward to his taekwondo classes. I highly reccomend
                                    Ben to anyone considering taekwondo training for their child. or anly level. Thanks Ben, for all that you do.&ldquo;
                                </blockquote>
                            <footer className="text-left mt-4">
                                <p className="font-bold text-[#72161D]">Ivan Rotinsulu</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Parent of Lucius, 7 years old</p>
                            </footer>
                            </CardContent>
                        </Card>

                        <Card className="bg-white hover:shadow-lg transition-shadow dark:bg-gray-900 border-2 border-[#72161D] rounded-xl">
                            <CardContent className="pt-6">
                                <blockquote className="text-gray-700 dark:text-white italic">
                                    &ldquo;I would like to give credit to Kwontum for its exceptional professional kyorugi training that is hard to find elsewhere. 
                                    One of the standout features is their ability to match students with training partners of similar build for Kallie to ensure 
                                    she can have effective practice sessions. Coach Ben's approach to individualized training prescriptions is another highlight.
                                    His tailored coaching methods for his student unique need and strengths set him apart from others that rely on one-size-fits-all
                                    training programs.&ldquo;
                                </blockquote>
                            <footer className="text-left mt-4">
                                <p className="font-bold text-[#72161D]">Nicholas Tan</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Parent of Kallie Tan, 14 years old</p>
                            </footer>
                            </CardContent>
                        </Card>

                        <Card className="bg-white hover:shadow-lg transition-shadow dark:bg-gray-900 border-2 border-[#72161D] rounded-xl">
                            <CardContent className="pt-6">
                                <blockquote className="text-gray-700 dark:text-white italic">
                                    &ldquo;Coach Ben is great in many ways. He explains complicated concepts in ways I can understand and teaches them in a way I’m able to learn, apply, 
                                    and practice in training sessions The people at Kwontum are also really nice and helpful. They're all experienced and skillful players.
                                    Everytime I spar or partner with them, I'll be able to learn with every engagement.&ldquo;
                                </blockquote>
                            <footer className="text-left mt-4">
                                <p className="font-bold text-[#72161D]">Soren Yeow</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">14 years old</p>
                            </footer>
                            </CardContent>
                        </Card>

                        <Card className="bg-white hover:shadow-lg transition-shadow dark:bg-gray-900 border-2 border-[#72161D] rounded-xl">
                            <CardContent className="pt-6">
                                <blockquote className="text-gray-700 dark:text-white italic">
                                    &ldquo;Coach Ben is able to deliver his thoughts well when teaching and especially if he wants something to be done.
                                    He tries his best to fix any of my errors whenever he could. He is also very articulative at explaining the aim that
                                    he want us to achieve.&ldquo;
                                </blockquote>
                            <footer className="text-left mt-4">
                                <p className="font-bold text-[#72161D]">Princess Aalia</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">16 years old</p>
                            </footer>
                            </CardContent>
                        </Card> 

                    </div>

                        {/* Footer Note */}
                        <div className="mt-12 text-left text-sm text-gray-600 dark:text-gray-400 italic">
                        <p>
                            The testimonials are provided on a voluntary basis and are published
                            with permission from the authors.
                        </p>
                        <p>Further information can be provided for character reference.</p>
                        </div> 

                </div>
            </section>

            {/* Contact Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
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
