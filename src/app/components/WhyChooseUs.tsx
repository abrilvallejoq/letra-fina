export default function WhyChooseUs() {
  const reasons = [
    { title: "Especialización sectorial", desc: "Conocimiento profundo de las industrias donde tecnología, creatividad y comercio convergen." },
    { title: "Agilidad empresarial", desc: "Respuestas rápidas sin sacrificar rigor técnico. Entendemos los tiempos del mercado." },
    { title: "Enfoque boutique", desc: "Atención personalizada y directa. Tu proyecto recibe dedicación exclusiva y estratégica." },
    { title: "Visión internacional", desc: "Perspectiva global para negocios con proyección transfronteriza y ambiciones de expansión." }
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