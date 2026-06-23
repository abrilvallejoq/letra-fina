import { AreaCard } from "./AreaCard";

export default function PracticeAreas() {
  const areas = [
    {
      title: "Propiedad Intelectual y Registro de Marcas",
      subtitle: "Protegé tu identidad antes de que otro lo haga.",
      description: "Diseñamos la estrategia para blindar tus activos intangibles: registro de marca, derechos de autor y protección de software. Tu identidad comercial es tu mayor capital; nos aseguramos de que siga siendo tuya.",
      items: "Incluye: Registro de Marcas, Derechos de Autor, Software, Diseños"
    },
    {
      title: "Contratos a Medida para Negocios Digitales",
      subtitle: "Documentos que protegen, no que complican.",
      description: "Redactamos contratos diseñados para la realidad de tu negocio digital. Acuerdos con proveedores, contratos de servicios, términos y condiciones y acuerdos de confidencialidad que realmente funcionan cuando los necesitás.",
      items: "Incluye: Contratos de Servicios, NDA, Términos y Condiciones, Acuerdos con Proveedores"
    },
    {
      title: "Derecho Digital e Inteligencia Artificial",
      subtitle: "Navegá el entorno digital con respaldo legal.",
      description: "Asesoramiento especializado para negocios que operan en plataformas digitales: protección de datos, comercio electrónico, uso legal de IA y gestión de conflictos en marketplaces como Mercado Libre.",
      items: "Incluye: Protección de Datos, E-commerce, IA y Derecho de Autor, Marketplaces"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-xs uppercase tracking-widest text-stone-500 font-bold">Áreas de Práctica</h2>
        <h3 className="text-3xl font-serif text-stone-900">Especializaciones para negocios que operan en entornos digitales y comerciales</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-8 pt-6">
        {areas.map((area, idx) => (
          <AreaCard key={idx} {...area} />
        ))}
      </div>
    </section>
  );
}