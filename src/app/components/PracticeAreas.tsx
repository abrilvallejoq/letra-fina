import { AreaCard } from "./AreaCard";

export default function PracticeAreas() {
  const areas = [
    {
      title: "Propiedad Intelectual y Activos Intangibles",
      subtitle: "Protegemos lo que te hace único.",
      description: "Diseñamos la estrategia para blindar tus creaciones, desde el registro de marca y patentes hasta la custodia de secretos comerciales y derechos de autor. Tu creatividad es tu mayor capital; nosotros nos aseguramos de que siga siendo tuya.",
      items: "Incluye: Marcas, Derechos de Autor, Software, Diseños Industriales"
    },
    {
      title: "Estrategia Corporativa",
      subtitle: "Bases sólidas para escalar.",
      description: "Acompañamos el ciclo de vida de tu negocio. Desde la elección del tipo societario ideal (SAS, SA, SRL) y pactos de socios, hasta Compliance regulatorio. Creamos estructuras legales flexibles que soportan el crecimiento acelerado sin romperse.",
      items: "Incluye: Sociedades, Acuerdos de Socios, Auditoría de Riesgo"
    },
    {
      title: "Fashion Law",
      subtitle: "El marco legal de la estética.",
      description: "Un enfoque de nicho para una industria específica. Asesoramiento integral para diseñadores, agencias y marcas de moda: protección de colecciones, contratos de imagen, acuerdos con influencers y manufactura. Entendemos la dinámica del retail.",
      items: "Incluye: Contratos de Imagen, Licencias, Modelaje, Retail"
    },
    {
      title: "Agronegocios y Biotecnología",
      subtitle: "Raíces fuertes, visión global.",
      description: "Ofrecemos una gestión legal 360° para la agroindustria, uniendo la experiencia en derecho rural con las nuevas demandas de la economía del conocimiento. Abarcamos la estructuración de arrendamientos, aparcerías, protección de variedades vegetales y licencias de tecnología.",
      items: "Incluye: Contratos Rurales, Fideicomisos, Variedades Vegetales"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-xs uppercase tracking-widest text-stone-500 font-bold">Áreas de Práctica</h2>
        <h3 className="text-3xl font-serif text-stone-900">Especializaciones diseñadas para negocios del futuro</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-8 pt-6">
        {areas.map((area, idx) => (
          <AreaCard key={idx} {...area} />
        ))}
      </div>
    </section>
  );
}