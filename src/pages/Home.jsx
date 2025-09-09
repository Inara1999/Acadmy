import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold leading-tight">
          Welcome to <span className="text-yellow-300">Academy Aj Kal</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-indigo-100">
          Confused after FSC or O-Levels? We help you choose the right path
          through counselling, motivational talks, and skill development.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/services"
            className="bg-white text-indigo-700 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-200"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-700 font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
