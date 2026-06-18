export default function About() {
  return (
    <section className="py-20 bg-stone-100 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-4 flex justify-center">
          <div className="w-64 h-84 md:w-full md:h-[450px] bg-cover bg-center grayscale contrast-115 shadow-md" style={{ backgroundImage: "url('https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/svmvmko2beu5hab/c232c89a99f74667808d71d792d1086a/original/WhatsApp-Image-2026-01-07-at-10.17.47.jpeg')" }} />
        </div>
        <div className="md:col-span-8 space-y-6">
          <h2 className="text-xs uppercase tracking-widest text-stone-500 font-bold">Detrás de la estrategia</h2>
          <h3 className="text-3xl font-serif text-stone-900">Fundadora y Directora</h3>
          <p className="text-stone-700 leading-relaxed font-light">
            Soy <strong className="font-medium text-stone-900">Abril Vallejo Quinteros</strong>, abogada especialista en Propiedad Intelectual y Derecho Corporativo. Fundé Letra Fina con una convicción: el derecho no debe ser un freno, sino el catalizador del crecimiento.
          </p>
          <p className="text-stone-700 leading-relaxed font-light">
            Mi trayectoria une dos mundos que rara vez se hablan: la rigurosidad de la ley y la dinámica vertiginosa de las startups y las casas de moda. Desde proteger el <em>know-how</em> de un desarrollo tecnológico hasta estructurar los contratos de una colección de diseño, mi objetivo es darte seguridad jurídica sin sacrificar la agilidad comercial.
          </p>
          <div className="p-6 bg-white border-l-4 border-stone-800 shadow-sm mt-4">
            <p className="text-stone-800 font-serif italic">
              <strong>¿Por qué &ldquo;Letra Fina&rdquo;?</strong> Porque transformamos la &ldquo;letra chica&rdquo; —esa que nadie entiende y todos temen— en una estrategia fina, clara y precisa para tu beneficio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}