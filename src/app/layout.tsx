import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Letra Fina | Derecho Empresarial Estratégico",
  description: "Traducimos la complejidad legal al idioma de la innovación, la moda y la tecnología. Estudio legal de la Abog. Abril Vallejo Quinteros.",
  authors: [{ name: "Abril Vallejo Quinteros" }],
  keywords: ["Propiedad Intelectual", "Fashion Law", "Estrategia Corporativa", "Agronegocios", "Derecho Digital", "Santa Fe"],
  openGraph: {
    title: "Letra Fina | Derecho Empresarial Estratégico",
    description: "Asesoría legal y aliada estratégica para empresas visionarias por Abril Vallejo Quinteros.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-stone-50 text-stone-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}