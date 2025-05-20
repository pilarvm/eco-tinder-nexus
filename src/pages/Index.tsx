
import { useState } from "react";
import CompanyRegisterForm from "@/components/CompanyRegisterForm";
import MaterialExchangeList from "@/components/MaterialExchangeList";
import EcoNetworkSummary from "@/components/EcoNetworkSummary";
import VirtualAssistantButton from "@/components/VirtualAssistantButton";
import { Recycle, Factory, Network } from "lucide-react";

const Index = () => {
  // State para saber si la empresa está registrada
  const [company, setCompany] = useState(null);
  // Simulación de matches/sinergias
  const [exchanges, setExchanges] = useState([]);
  // Estado ficticio de conexiones generadas (EcoNetworkSummary)
  const [networkStats, setNetworkStats] = useState({
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
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-white flex flex-col items-center py-10 px-2">
      <div className="max-w-3xl w-full text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 via-blue-500 to-green-300 bg-clip-text text-transparent">
          <Recycle className="inline-block text-green-600" size={34} />
          Tinder Ecológico <span className="hidden md:inline">para MYPES</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          Conecta con otras empresas intercambiando residuos valorizables,<br />
          optimiza recursos, crea sinergias industriales y reduce tu huella ambiental. 
        </p>
      </div>
      {!company ? (
        <div className="w-full max-w-md mx-auto mb-7">
          <CompanyRegisterForm onRegister={handleCompanyRegister} />
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-medium text-green-700 mb-3 flex items-center justify-center gap-2">
            <Network className="inline" size={24} />
            Oportunidades de Sinergia Cercanas
          </h2>
          <MaterialExchangeList exchanges={exchanges} />
          <EcoNetworkSummary stats={networkStats} />
          <div className="mt-6">
            <VirtualAssistantButton />
          </div>
        </>
      )}

      <footer className="mt-12 text-center text-gray-400 text-sm">
        Plataforma demo · Prototipo de economía circular &copy; 2024
      </footer>
    </div>
  );
};

export default Index;

