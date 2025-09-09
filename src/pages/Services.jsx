import React from "react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Career Counselling",
      desc: "Get expert advice on choosing the right career path based on your interests and skills.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      id: 2,
      title: "Motivational Talks",
      desc: "Our speakers inspire students to overcome challenges and stay focused on their dreams.",
      img: "https://images.unsplash.com/photo-1515169067865-5387a57c7f8e",
    },
    {
      id: 3,
      title: "Teacher Training",
      desc: "Helping teachers develop better mentoring and guidance skills for modern challenges.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    },
    {
      id: 4,
      title: "Application Support",
      desc: "Step-by-step help with university applications, scholarships, and admissions.",
      img: "https://images.unsplash.com/photo-1584697964193-996338387c97",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-indigo-700 text-center">
          Our Services
        </h2>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-4 text-xl font-semibold text-indigo-700">
                {s.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
