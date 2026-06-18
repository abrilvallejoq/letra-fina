function StepItem({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="flex gap-6 items-start p-4">
      <span className="text-2xl font-serif italic text-stone-400 border-b border-stone-300 pb-1">{num}</span>
      <div className="space-y-1">
        <h4 className="text-lg font-medium text-white">{title}</h4>
        <p className="text-stone-300 font-light text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function InnovationLab() {
  const steps = [
    { num: "01", title: "Diagnóstico 360°", desc: "Mapeo completo de activos, riesgos y oportunidades jurídicas en tu modelo de negocio." },
    { num: "02", title: "Diseño Estratégico", desc: "Construcción de arquitectura legal personalizada alineada con tus objetivos de crecimiento." },
    { num: "03", title: "Implementación Ágil", desc: "Ejecución eficiente de soluciones con seguimiento continuo y ajustes en tiempo real." },
    { num: "04", title: "Evolución Continua", desc: "Actualización permanente de tu estructura legal según cambios normativos y de mercado." }
  ];

  return (
    <section className="py-20 bg-stone-900 text-stone-100 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-stone-400 font-bold">Innovación</span>
          <h3 className="text-3xl font-serif text-white">Innovation Lab: Protocolo de Innovación</h3>
          <p className="text-stone-400 font-light text-sm">
            Desarrollamos metodologías propias que transforman la consultoría legal tradicional mediante un framework exclusivo.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-stone-800/50 p-8 border border-stone-800">
          {steps.map((step, i) => (
            <StepItem key={i} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}