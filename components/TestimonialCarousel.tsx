"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Trash2, Edit, PlusCircle } from "lucide-react";

export default function TestimonialCarousel() {
  // Initial testimonials
  const [testimonials, setTestimonials] = useState([
    { id: 1, name: "Sarah Chen", role: "Parent of Tommy, 8", text: "The instructors are passionate and dedicated. My child has grown so much in confidence!" },
    { id: 2, name: "David Tan", role: "Adult Student, 2 years", text: "Great environment for learning. The focus on fundamentals really improved my technique." },
    { id: 3, name: "Michelle Lee", role: "National Competitor", text: "The competition team training pushed me to achieve things I never thought possible." },
  ]);

  // Edit mode state
  const [editing, setEditing] = useState<number | null>(null);
  const [editedText, setEditedText] = useState("");

  // New testimonial input
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newText, setNewText] = useState("");

  // Handle Edit
  const handleEdit = (id: number, text: string) => {
    setEditing(id);
    setEditedText(text);
  };

  // Save Edit
  const saveEdit = (id: number) => {
    setTestimonials((prev) =>
      prev.map((testimonial) =>
        testimonial.id === id ? { ...testimonial, text: editedText } : testimonial
      )
    );
    setEditing(null);
  };

  // Delete Testimonial
  const handleDelete = (id: number) => {
    setTestimonials((prev) => prev.filter((testimonial) => testimonial.id !== id));
  };

  // Add New Testimonial
  const addTestimonial = () => {
    if (!newName || !newText) return;

    setTestimonials((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: newName,
        role: newRole || "Customer",
        text: newText,
      },
    ]);
    setNewName("");
    setNewRole("");
    setNewText("");
  };

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
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-8"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="flex justify-center">
              <div className="relative bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg max-w-sm">
                {editing === testimonial.id ? (
                  <>
                    <textarea
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                      className="w-full border p-2 rounded text-black"
                    />
                    <button
                      onClick={() => saveEdit(testimonial.id)}
                      className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <blockquote className="text-gray-700 dark:text-white italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>
                    <footer className="mt-4">
                      <p className="font-bold text-[#72161D] dark:text-[#EDEDED]">{testimonial.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                    </footer>
                  </>
                )}
                {/* Edit & Delete Buttons */}
                <div className="absolute top-2 right-2 flex gap-2">
                  <button onClick={() => handleEdit(testimonial.id, testimonial.text)}>
                    <Edit className="w-5 h-5 text-blue-500 hover:text-blue-700" />
                  </button>
                  <button onClick={() => handleDelete(testimonial.id)}>
                    <Trash2 className="w-5 h-5 text-red-500 hover:text-red-700" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Add New Testimonial Form */}
        <div className="mt-8 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg max-w-lg mx-auto">
          <h3 className="text-xl font-bold text-[#72161D]">Add a Testimonial</h3>
          <input
            type="text"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full border p-2 rounded mt-2 text-black"
          />
          <input
            type="text"
            placeholder="Role (Optional)"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            className="w-full border p-2 rounded mt-2 text-black"
          />
          <textarea
            placeholder="Testimonial..."
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="w-full border p-2 rounded mt-2 text-black"
          />
          <button
            onClick={addTestimonial}
            className="mt-4 bg-[#C1272D] hover:bg-[#72161D] text-white px-4 py-2 rounded flex items-center"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            Add Testimonial
          </button>
        </div>
      </div>
    </section>
  );
}
