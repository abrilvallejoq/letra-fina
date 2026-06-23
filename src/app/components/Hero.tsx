export default function Hero() {
  return (
    <section className="relative bg-stone-900 text-stone-100 py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[80vh]">
      <div className="max-w-4xl space-y-6">
        <h1 className="text-stone-400 uppercase tracking-widest text-sm font-semibold">
          Letra Fina
        </h1>
        <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-tight">
          Derecho para negocios que <span className="font-serif italic text-stone-300">escalan seguros</span>
        </h2>
        <p className="text-lg md:text-xl text-stone-300 max-w-2xl font-light leading-relaxed">
          Traducimos la complejidad legal al lenguaje de tu negocio digital. Propiedad Intelectual, contratos y protección de activos intangibles para emprendedores y empresas que operan en entornos digitales y comerciales.
        </p>
        <div className="pt-4">
          <a
            href="https://wa.link/0fbvqs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-stone-100 text-stone-900 px-8 py-3 rounded-none font-medium hover:bg-stone-200 transition-colors tracking-wide"
          >
            Agendar consulta
          </a>
        </div>
      </div>
    </section>
  );
}