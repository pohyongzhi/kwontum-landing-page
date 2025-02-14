"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialCarousel() {
  // Full-length testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Parent of Tommy, 8 years old",
      text: "The instructors are passionate and dedicated. My child has grown so much in confidence since joining.",
    },
    {
      id: 2,
      name: "David Tan",
      role: "Adult Student, 2 years",
      text: "Great environment for learning. The focus on fundamentals really helped improve my technique.",
    },
    {
      id: 3,
      name: "Michelle Lee",
      role: "National Competitor",
      text: "The competition team training pushed me to achieve things I never thought possible.",
    },
    {
      id: 4,
      name: "Kang Ning",
      role: "Finance Professional, 32 years old",
      text: "Lessons with Ben at Kwontum were both enjoyable and fruitful. Being a new joiner, Ben has displayed the utmost patience and lesson plans were well thought out for my progress. His emphasis on small details such as postures and execution shows his dedication and belief in learning and doing things the right way.",
    },
    {
      id: 5,
      name: "Chong Chih Chung",
      role: "Parent of Aiden Chong, 7 years old",
      text: "Coach Ben is a humble and professional coach. With his great guidance and fun teaching, he has built confidence in my son who is a 6-year-old learning Taekwondo under him. Not only that, he has vast knowledge of fun teaching methods, giving the kids every opportunity to explore ways of Taekwondo training - building fitness, mental resilience, and good character in them. He is not just an instructor, mentor but also a guardian figure to his students. My son Aiden has ever since been keen and looking forward to every Saturday’s lesson where he can enjoy Coach Ben’s teaching and have fun with his fellow mates.",
    },
    {
      id: 6,
      name: "Kallie Tan",
      role: "14 years old",
      text: "Kwontum feels more like a family than just a school. Even though I’ve only recently joined, I’ve felt so welcomed and accepted, regardless of age differences or how short a time I’ve been here. I was genuinely touched when the members came to support me during NSG. Ben Sir strikes the perfect balance between humor and strictness. He's incredibly detailed and takes the time to explain his training plans to each student. His personalized approach and dedication make training both fun and effective.",
    },
    {
      id: 7,
      name: "Ivan Rotinsulu",
      role: "Parent of Lucius, 7 years old",
      text: "I want to express my appreciation for the incredible guidance and mentorship Ben has provided to my son over the past 6 months. Under Ben’s expert instruction, my son has improved his physical skills and techniques and developed valuable life skills such as discipline, perseverance, and self-confidence. Ben has the unique ability to connect with each student, tailoring their teaching style to meet the individual needs and abilities of each child. His patience, enthusiasm, and dedication to the sport are contagious, and my son always looks forward to his taekwondo classes. I highly recommend Ben to anyone considering taekwondo training for their child at any level. Thanks, Ben, for all that you do.",
    },
    {
      id: 8,
      name: "Nicholas Tan",
      role: "Parent of Kallie Tan, 14 years old",
      text: "I would like to give credit to Kwontum for its exceptional professional kyorugi training that is hard to find elsewhere. One of the standout features is their ability to match students with training partners of similar build for Kallie to ensure she can have effective practice sessions. Coach Ben's approach to individualized training prescriptions is another highlight. His tailored coaching methods for his student's unique needs and strengths set him apart from others that rely on one-size-fits-all training programs.",
    },
    {
      id: 9,
      name: "Soren Yeow",
      role: "14 years old",
      text: "Coach Ben is great in many ways. He explains complicated concepts in ways I can understand and teaches them in a way I’m able to learn, apply, and practice in training sessions. The people at Kwontum are also really nice and helpful. They're all experienced and skillful players. Every time I spar or partner with them, I'll be able to learn with every engagement.",
    },
    {
      id: 10,
      name: "Princess Aalia",
      role: "16 years old",
      text: "Coach Ben is able to deliver his thoughts well when teaching and especially if he wants something to be done. He tries his best to fix any of my errors whenever he could. He is also very articulate at explaining the aim that he wants us to achieve.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#72161D] font-dolceVita">
          TESTIMONIALS
        </h2>
        {/* Swiper Carousel */}
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            className="mt-8 flex justify-center items-center w-full h-[800px]" // Adjust height
            >
            {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="flex justify-center items-center h-full">
                <div className="flex justify-center items-center w-full h-full">
                    <Card className="bg-white dark:bg-gray-900 border-2 border-[#72161D] rounded-xl p-6 max-w-sm min-h-[280px] flex flex-col justify-center items-center text-center">
                    <CardContent className="flex flex-col justify-center items-center text-center h-full">
                        <blockquote className="text-gray-700 dark:text-white italic">
                        &ldquo;{testimonial.text}&rdquo;
                        </blockquote>
                        <footer className="mt-4">
                        <p className="font-bold text-[#72161D] dark:text-[#EDEDED]">
                            {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            {testimonial.role}
                        </p>
                        </footer>
                    </CardContent>
                    </Card>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
      </div>
    </section>
  );
}
