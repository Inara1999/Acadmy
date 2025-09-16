import React from "react";

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
          alt="Students discussing"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-4xl font-bold text-indigo-700">About Us</h2>
          <p className="mt-6 text-gray-700 leading-relaxed">
            At <strong>Future Path Academy</strong>, we believe every student deserves
            the right guidance after FSC or O-Levels. Our programs are designed
            to inspire, motivate, and prepare young minds for their future
            careers. We also empower teachers with modern mentoring skills to
            guide the next generation.
          </p>
          <ul className="mt-6 space-y-3 text-gray-600">
            <li>✅ Career Counselling & Guidance</li>
            <li>✅ Motivational Sessions</li>
            <li>✅ Teacher Training</li>
            <li>✅ Admission Support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
