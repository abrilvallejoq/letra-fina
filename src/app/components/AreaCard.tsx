interface AreaProps {
  title: string;
  subtitle: string;
  description: string;
  items: string;
}

export function AreaCard({ title, subtitle, description, items }: AreaProps) {
  return (
    <div className="bg-white p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div className="space-y-4">
        <span className="text-xs italic text-stone-400 font-serif block">{subtitle}</span>
        <h4 className="text-xl font-medium text-stone-900">{title}</h4>
        <p className="text-stone-600 font-light text-sm leading-relaxed">{description}</p>
      </div>
      <p className="text-xs text-stone-500 italic mt-6 pt-4 border-t border-stone-100">{items}</p>
    </div>
  );
}