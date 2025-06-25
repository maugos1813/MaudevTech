import React from 'react';

export default function About() {
  return (
    <section id="sobre" className="px-6 py-24 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-6 text-3xl font-semibold text-gray-800">Quiénes somos</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          En <strong>MaudevTech</strong> creemos que tu sitio web no debería ser solo una presencia digital, sino una herramienta que impulse tu negocio.  
          Nos dedicamos a crear páginas web modernas, funcionales y adaptadas a tus objetivos.
          <br /><br />
          Aunque cada proyecto es único, hay algo que nunca cambia: nuestro compromiso con la excelencia.  
          Nos involucramos en cada detalle, acompañando a nuestros clientes desde la idea inicial hasta el lanzamiento final.
          <br /><br />
          Ya sea que estés empezando o quieras renovar tu imagen digital, estamos listos para ayudarte a destacar en línea.  
          Combinamos diseño estratégico, velocidad y experiencia de usuario para que tu marca inspire confianza y resultados reales.
          <br /><br />
          <span className="italic text-gray-700 font-medium">
            “Transformamos ideas en experiencias digitales que marcan la diferencia.”
          </span>
        </p>
      </div>
    </section>
  );
}
