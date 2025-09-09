import React from "react";

export default function Teachers() {
  const teachers = [
    {
      id: 1,
      name: "Ali Khan",
      role: "Motivational Speaker",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      role: "Career Counsellor",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Dr. Naveed",
      role: "Industry Expert",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-indigo-700 text-center">
          Our Teachers
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {teachers.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-32 h-32 mx-auto rounded-full object-cover shadow-md"
              />
              <h3 className="mt-4 text-lg font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
