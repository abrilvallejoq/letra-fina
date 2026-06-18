export default function WorkProcess() {
  const processes = [
    { title: "Primera Consulta", desc: "Sesión inicial para comprender tu negocio, objetivos y desafíos legales específicos." },
    { title: "Propuesta Estratégica", desc: "Plan de acción detallado con alcances, plazos y estructura de honorarios transparente." },
    { title: "Ejecución", desc: "Implementación de soluciones con comunicación fluida y actualizaciones periódicas." },
    { title: "Seguimiento", desc: "Acompañamiento continuo y ajustes según evolución de tu proyecto empresarial." }
  ];

  return (
    <section className="py-20 bg-stone-100 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 bg-stone-300 h-72 md:h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/svmvmko2beu5hab/generated-images/_MoxdvQ1VF-jtxMPld8pi.jpg')" }} />
        <div className="md:col-span-7 space-y-8">
          <h3 className="text-xs uppercase tracking-widest text-stone-500 font-bold">Proceso de Trabajo</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {processes.map((p, idx) => (
              <div key={idx} className="space-y-1">
                <h4 className="font-medium text-stone-900 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-stone-700 block" /> {p.title}
                </h4>
                <p className="text-stone-600 font-light text-xs leading-relaxed pl-3.5">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}