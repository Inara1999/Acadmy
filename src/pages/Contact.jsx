import React from "react";

export default function Contact() {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-4xl mx-auto px-6 text-white">
        <h2 className="text-4xl font-bold text-center">Contact Us</h2>
        <p className="text-center mt-2 text-gray-200">
          Have questions? Get in touch with us today.
        </p>

        <form className="mt-10 bg-white text-gray-800 rounded-xl shadow-lg p-8 grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Message"
            className="p-3 border rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <button
            type="submit"
            className="px-5 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
