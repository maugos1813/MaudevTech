import React from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", "4de97538-2e1e-401e-b087-68f0da5233cd");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "¡Mensaje enviado!",
        text: "Gracias por contactarnos. Te responderemos pronto.",
        icon: "success",
      });
      form.reset();
    } else {
      Swal.fire({
        title: "Error",
        text: "No se pudo enviar el mensaje. Intenta de nuevo.",
        icon: "error",
      });
    }
  };

  return (
    <section id="contacto" className="px-6 py-24 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-800">¿Listo para destacar online?</h2>
        <p className="mb-10 text-gray-600 text-lg">
          Cuéntanos qué necesitas. Te ayudamos a construir la página web que tu negocio merece.
        </p>
        <form onSubmit={onSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            className="w-full px-4 py-3 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-3 border border-gray-300 rounded"
            required
          />

          {/* Nuevo campo select */}
          <select
            name="tipo_pagina"
            className="w-full px-4 py-3 border border-gray-300 rounded bg-white text-gray-700"
            required
          >
            <option value="">Selecciona el tipo de página web</option>
            <option value="Nivel 1 – Página Básica">Nivel 1 – Página Básica</option>
            <option value="Nivel 2 – Página Profesional">Nivel 2 – Página Profesional</option>
            <option value="Nivel 3 – Página Premium">Nivel 3 – Página Premium</option>
            <option value="Página personalizada">Página personalizada</option>
          </select>

          <textarea
            name="message"
            placeholder="Escribe tu mensaje aquí..."
            className="w-full h-32 px-4 py-3 border border-gray-300 rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 text-lg text-black bg-yellow-400 rounded hover:bg-yellow-300 transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
