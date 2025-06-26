import React from 'react';

const testimonials = [
  {
    name: 'Carla R. – Dueña de Cafetería',
    text: 'Quedé encantada con mi página web. En solo unos días ya estaba en línea y personalizada con los colores y estilo de mi marca. ¡Todo súper rápido y fácil!'
  },
  {
    name: 'Luis M. – Emprendedor digital',
    text: 'Lo que más me gustó es que ya tienen plantillas base para cada tipo de página web. No tuve que perder tiempo explicando todo desde cero. Me presentaron una estructura profesional y solo ajustamos lo que necesitaba.'
  },
  {
    name: 'Ana P. – Consultora independiente',
    text: 'Recomiendo totalmente MaudevTech. Captaron mi idea desde el primer momento, y el diseño fue limpio, moderno y optimizado para móvil. ¡Muy feliz con el resultado!'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="px-6 py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-12 text-3xl font-semibold text-gray-800">Testimonios</h2>
        <div className="space-y-8">
          {testimonials.map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <p className="italic text-gray-600">"{item.text}"</p>
              <h4 className="mt-4 font-semibold text-blue-800">– {item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
