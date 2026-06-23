export default function WhyChooseUs() {
  const reasons = [
    { title: "Especialización exclusiva en el entorno digital", desc: "No somos un estudio generalista. Nos enfocamos únicamente en negocios digitales, comercio electrónico y propiedad intelectual. Eso se traduce en asesoramiento más preciso y más eficiente." },
    { title: "Lenguaje claro, sin tecnicismos innecesarios", desc: "Traducimos la complejidad legal al idioma de tu negocio. Vas a entender exactamente qué firmás, qué protegés y qué riesgos evitás en cada decisión." },
    { title: "Enfoque preventivo, no reactivo", desc: "Actuamos antes de que el problema ocurra. Blindar tu marca y tus contratos hoy es siempre más económico que litigar mañana." },
    { title: "Atención directa y personalizada", desc: "Cada cliente trabaja directamente con nosotros, sin intermediarios. Tu proyecto recibe dedicación real y seguimiento concreto en cada etapa." }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-xs uppercase tracking-widest text-stone-500 font-bold">¿Por qué elegir Letra Fina?</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((item, idx) => (
          <div key={idx} className="space-y-2 border-t-2 border-stone-200 pt-4">
            <h4 className="font-medium text-stone-900 text-base">{item.title}</h4>
            <p className="text-stone-600 font-light text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}