import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const images = ["/galery0.png", "/galery1.png", "/galery2.png"];

export default function Gallery() {
  const [currentImg, setCurrentImg] = useState(null); // null = sin modal

  // ───── Manejo de historial para botón atrás en móvil ─────
  useEffect(() => {
    if (currentImg) {
      // bloquea scroll y empuja estado al historial
      document.body.style.overflow = "hidden";
      window.history.pushState({ modal: true }, "");
    }

    const handlePopState = () => setCurrentImg(null);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("popstate", handlePopState);
    };
  }, [currentImg]);

  // ───── Componente Modal (Portal) ─────
  const Modal = ({ src, onClose }) =>
    createPortal(
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
        <button
          onClick={onClose}
          className="absolute text-white top-4 right-4 text-2xl md:hover:text-yellow-400 focus:outline-none"
          aria-label="Cerrar"
        >
          &times;
        </button>
        <img
          src={src}
          alt="Vista ampliada"
          className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-xl"
        />
      </div>,
      document.body
    );

  return (
    <section id="galeria" className="px-6 py-24 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="mb-10 text-3xl font-semibold text-gray-800">
          Galería de Proyectos Realizados - Personalizados
        </h2>

        {/* Grid de miniaturas */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Proyecto ${index + 1}`}
              loading="lazy"
              onClick={() => setCurrentImg(img)}
              className="object-cover w-full h-60 rounded shadow cursor-pointer hover:opacity-90"
            />
          ))}
        </div>
      </div>

      {/* Renderiza el modal si hay imagen seleccionada */}
      {currentImg && <Modal src={currentImg} onClose={() => setCurrentImg(null)} />}
    </section>
  );
}
