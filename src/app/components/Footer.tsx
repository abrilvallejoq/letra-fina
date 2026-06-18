export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 px-6 md:px-12 lg:px-24 border-t border-stone-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <p className="text-white font-medium tracking-wide">Letra Fina</p>
          <p className="text-xs font-light text-stone-500">Derecho Empresarial Estratégico &copy; {new Date().getFullYear()}</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-8 gap-3 text-sm font-light">
          <a href="mailto:estudioletrafina@gmail.com" className="hover:text-white transition-colors">
            estudioletrafina@gmail.com
          </a>
          <a href="tel:+5493425120412" className="hover:text-white transition-colors">
            +54 9 342 5120412
          </a>
          <span className="text-stone-600 hidden sm:inline">|</span>
          <span className="text-stone-500 text-xs self-start sm:self-center">Abog. Abril Vallejo Quinteros</span>
        </div>
      </div>
    </footer>
  );
}