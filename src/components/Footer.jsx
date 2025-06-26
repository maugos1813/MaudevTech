import React from 'react';

export default function Footer() {
  return (
    <footer
      className="text-white bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/maudevbg.png')", // ⚠️ Cambia esto por tu imagen real
      }}
    >
      {/* Capa oscura para contraste */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido */}
      <div className="relative z-10 px-6 py-12 text-center">
        <h4 className="mb-4 text-xl font-semibold">¿Tienes dudas o necesitas una web?</h4>
        <p className="mb-6 text-sm text-gray-300">
          Contáctanos y te ayudaremos a construir tu presencia online de forma profesional.
        </p>

        {/* Opcional: se puede usar más adelante */}
        <div className="flex justify-center mb-4 space-x-4">
          <span className="text-gray-400">Redes sociales próximamente...</span>
        </div>

        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} MaudevTech. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
