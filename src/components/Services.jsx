// Services.jsx
import React from "react";

// Datos de cada servicio (título, descripción, imagen y enlace)
const services = [
  {
    title: "Nivel 1 – Página Básica",
    desc: "Una web one-page moderna, perfecta para presencia rápida en línea.",
    img: "/capn1.png",
    href: "https://maudevn1.netlify.app", // ⇦ demo real 
  },
  {
    title: "Nivel 2 – Página Profesional",
    desc: "Sitio multi-página con diseño a medida y optimización SEO inicial.",
    img: "/capn2.png",
    href: " https://maudevn2.netlify.app", // ⇦ demo real
  },
  {
    title: "Nivel 3 – Página Premium",
    desc: "Desarrollo avanzado, animaciones, CMS y funcionalidades personalizadas.",
    img: "/capn3.png",
    href: "https://maudevn3.netlify.app", // ⇦ demo real
  },
];

export default function Services() {
  return (
    <section id="servicios" className="px-6 py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="mb-12 text-3xl font-semibold text-gray-800">
          Nuestros Servicios
        </h2>

        <div className="flex flex-col justify-center gap-8 md:flex-row">
          {services.map(({ title, desc, img, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-6 bg-white rounded-lg shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg md:w-1/3"
            >
              {/* Miniatura */}
              <img
                src={img}
                alt={title}
                className="object-cover w-full h-40 mb-4 rounded"
              />

              {/* Contenido */}
              <h3 className="text-xl font-medium text-gray-700 hover:text-yellow-400">
                {title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">{desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
