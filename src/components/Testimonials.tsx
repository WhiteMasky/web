'use client';

import { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Active Vision has completely transformed my coaching approach. The detailed stroke analysis allows me to provide precise feedback to my students, resulting in faster improvement and more confident players.",
      author: "Michael Chen",
      position: "Head Tennis Coach",
      company: "Elite Tennis Academy",
      avatar: "/images/avatar-1.jpg"
    },
    {
      quote: "As a competitive player, I needed a tool that could help me identify weaknesses in my game. Active Vision not only highlighted areas for improvement but provided specific drills to address them. My serve accuracy has improved by 15% in just two months!",
      author: "Sarah Johnson",
      position: "College Tennis Player",
      company: "Stanford University",
      avatar: "/images/avatar-2.jpg"
    },
    {
      quote: "We've tried several tennis analysis tools, but Active Vision is the only one that combines ease of use with deep insights. The real-time match analysis has become an essential part of our training program.",
      author: "Robert Williams",
      position: "Tennis Program Director",
      company: "National Tennis Center",
      avatar: "/images/avatar-3.jpg"
    },
    {
      quote: "The customer support team at Active Vision is exceptional. They not only helped us set up the system for our club but provided valuable advice on how to maximize the benefits for players of all levels.",
      author: "Jennifer Lee",
      position: "Tennis Club Owner",
      company: "Ace Tennis Club",
      avatar: "/images/avatar-4.jpg"
    },
    {
      quote: "As a parent of a junior player, I was looking for ways to support my child's development. Active Vision provides objective data that helps us track progress and celebrate improvements, which has been incredibly motivating.",
      author: "David Martinez",
      position: "Parent of Junior Player",
      company: "Youth Tennis Circuit",
      avatar: "/images/avatar-5.jpg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Hear how players and coaches are transforming their tennis with Active Vision
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 text-8xl text-gray-200 dark:text-gray-800 opacity-60 font-serif">&quot;</div>
          <div className="absolute -bottom-10 -right-10 text-8xl text-gray-200 dark:text-gray-800 opacity-60 font-serif">&quot;</div>
          
          <div className="relative bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic">
                {testimonials[activeIndex].quote}
              </p>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden mr-4">
                {/* Avatar placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-primary to-purple-600"></div>
              </div>
              <div>
                <h4 className="font-semibold">{testimonials[activeIndex].author}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex 
                      ? 'bg-primary' 
                      : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                  } transition-colors`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 