import { useState } from "react";
import CompanyRegisterForm from "@/components/CompanyRegisterForm";
import MaterialExchangeList from "@/components/MaterialExchangeList";
import EcoNetworkSummary from "@/components/EcoNetworkSummary";
import VirtualAssistantButton from "@/components/VirtualAssistantButton";
import { Recycle, Factory, Network } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Leaf, Users, Handshake, Truck, BarChart3 } from "lucide-react";

const functionalities = [
  {
    icon: <Users className="text-blue-600" size={32} />,
    title: "Registro de Actores",
    desc: "MYPEs, empresas y personas, con perfiles y datos personalizados."
  },
  {
    icon: <Network className="text-green-600" size={32} />,
    title: "Red visual interactiva",
    desc: "Vinculación mediante grafos, mostrando conexiones y matches en tiempo real.",
  },
  {
    icon: <Handshake className="text-yellow-600" size={32} />,
    title: "Intercambios y Banco de favores",
    desc: "Dona horas de talento, ofrece servicios y gestiona tu saldo de favores.",
  },
  {
    icon: <Truck className="text-lime-500" size={32} />,
    title: "Logística y trazabilidad",
    desc: "Solicita recojo, registra intercambios y sigue estadísticas de impacto."
  },
  {
    icon: <BarChart3 className="text-purple-600" size={32} />,
    title: "Indicadores de impacto",
    desc: "Visualiza kg reusados, CO₂ ahorrado y satisfacción usuaria."
  },
];

const Index = () => {
  // State para saber si la empresa está registrada
  const [company, setCompany] = useState(null);
  // Simulación de matches/sinergias
  const [exchanges, setExchanges] = useState([]);
  // Estado ficticio de conexiones generadas (EcoNetworkSummary)
  const [networkStats, setNetworkStats = useState({
    connections: 0,
    co2Saved: 0,
    companies: 0,
  });

  // Simulación: Al registrar la empresa, se generan empresas compatibles y estadísticas
  const handleCompanyRegister = (companyData) => {
    setCompany(companyData);

    // FAKE datos "matches" y red
    const fakeExchanges = [
      {
        id: 1,
        name: "EcoLadrillos SAC",
        location: "Lima",
        needs: ["Botellas PET", "Cartón"],
        offers: ["Residuos plásticos"],
        compatibility: 86,
        distanceKm: 8,
      },
      {
        id: 2,
        name: "Verde Metales S.R.L.",
        location: "Callao",
        needs: ["Chatarra"],
        offers: ["Residuos metálicos", "Aceite usado"],
        compatibility: 73,
        distanceKm: 13,
      },
    ];
    setExchanges(fakeExchanges);
    setNetworkStats({ connections: 2, co2Saved: 290, companies: 4 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-100">
      <Navbar />
      <main className="max-w-3xl mx-auto py-8 px-3">
        <section className="text-center mb-10">
          <div className="flex justify-center">
            <Leaf className="text-green-500 drop-shadow-md" size={44} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-500 via-blue-500 to-green-300 bg-clip-text text-transparent mb-3 mt-3">
            Red Circular
          </h1>
          <p className="font-medium text-lg md:text-xl text-gray-700 mb-4">
            Conectando actores reales por un <span className="text-green-700 font-bold">Centro de Lima</span> más sostenible.
          </p>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Plataforma colaborativa de economía circular urbana, donde MYPEs, empresas grandes y personas naturales intercambian <span className="font-semibold text-green-600">residuos útiles</span>, servicios, asesorías y capacidades ociosas para maximizar impacto social y ambiental.
          </p>
          <div className="flex gap-4 justify-center mt-7">
            <a
              href="/register"
              className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg font-bold text-lg shadow hover:bg-green-700 transition hover:scale-105"
            >
              Quiero Unirme
            </a>
            <a
              href="/login"
              className="inline-block px-6 py-2 bg-white border border-green-200 text-green-700 font-semibold rounded-lg text-lg hover:bg-green-50 transition"
            >
              Ya tengo cuenta
            </a>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-xl font-bold text-green-700 mb-5 text-center">¿Cómo funciona?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {functionalities.map(f => (
              <div key={f.title} className="bg-white rounded-xl shadow hover:scale-105 transition p-5 flex items-start gap-4 border border-gray-100">
                {f.icon}
                <div>
                  <div className="font-semibold text-lg mb-1">{f.title}</div>
                  <div className="text-gray-600 text-sm">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="text-center text-gray-500 text-sm mb-7">
          Público objetivo: MYPEs del Centro de Lima, empresas donantes y ciudadanía con interés en Economía Circular. <br/>
          Proyecto piloto impulsado por <span className="text-green-600 font-semibold">EcoNova</span>.
        </section>
        <footer className="mt-8 text-center text-gray-400 text-xs">
          Red Circular · EcoNova &copy; 2024
        </footer>
      </main>
    </div>
  );
};

export default Index;
