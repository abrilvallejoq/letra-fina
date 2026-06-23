export default function Contact() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto text-center space-y-8">
      <h3 className="text-3xl font-serif text-stone-900">Conversemos sobre tu proyecto</h3>
      <p className="text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
        ¿Tenés un negocio que necesita estructura legal sólida? ¿Buscás proteger tu marca o tus activos digitales antes de escalar? En Letra Fina diseñamos soluciones jurídicas concretas para negocios que operan en entornos digitales y comerciales.

      </p>
      <p className="text-stone-600 font-light text-sm pb-4">
        Agendá tu consulta y analizaremos tu situación para presentarte un plan de acción claro y efectivo.

      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="https://wa.link/0fbvqs"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-stone-900 text-white px-8 py-3 font-medium hover:bg-stone-800 transition-colors"
        >
          Agendá tu consulta
        </a>
        <a
          href="mailto:estudioletrafina@gmail.com"
          className="border border-stone-300 text-stone-700 px-8 py-3 font-medium hover:bg-stone-50 transition-colors"
        >
          Enviar correo
        </a>
      </div>
    </section>
  );
}