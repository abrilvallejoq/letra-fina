export default function Philosophy() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-xs uppercase tracking-widest text-stone-500 font-bold">
          Nuestra filosofía
        </h2>
        <h3 className="text-3xl font-serif text-stone-900">
          Más que asesoría legal: somos tu aliado estratégico
        </h3>
        <p className="text-stone-600 leading-relaxed font-light">
          En Letra Fina redefinimos el ejercicio del derecho empresarial. No somos un estudio tradicional que solo responde consultas: somos partners estratégicos que anticipan riesgos, identifican oportunidades y construyen marcos legales a medida para empresas visionarias.
        </p>
        <p className="text-stone-600 leading-relaxed font-light">
          Entendemos que tu negocio navega territorios complejos donde convergen tecnología, creatividad y comercio global. Por eso, nuestro enfoque combina expertise jurídica profunda con sensibilidad hacia las dinámicas de industrias innovadoras y altamente competitivas.
        </p>
      </div>
      <div className="bg-stone-200 h-80 w-full min-h-[400px] bg-cover bg-center shadow-sm" style={{ backgroundImage: "url('https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/svmvmko2beu5hab/generated-images/TvcwexL2R_oGpES3mP8x9.jpg')" }} aria-label="Abogacía e Innovación" />
    </section>
  );
}