import React from "react";

export default function Header() {
  return (
    <header
      id="inicio"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center text-white"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/maudevbg.png')", // ⇦ pon aquí tu imagen
        }}
      />

      {/* Capa opcional para oscurecer la imagen y mejorar contraste */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Contenido */}
      <div className="relative z-10">
        <h1 className="mb-4 text-6xl font-bold drop-shadow-md">
        Lanza tu página web con impacto
        </h1>
        <p className="max-w-xl mx-auto text-lg drop-shadow-sm my-[50px]">
        En <strong>Maudev</strong> creamos páginas web modernas, veloces y enfocadas en resultados. Transforma tu idea en una presencia online profesional que cautive a tus clientes desde el primer clic.
        </p>
        <a
          href="#contacto"
          className="px-6 py-3 font-semibold text-blue-900 transition bg-yellow-400 rounded hover:bg-yellow-300 "
        >
           Quiero mi página web
        </a>
      </div>
    </header>
  );
}
