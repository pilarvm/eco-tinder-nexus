
import { Factory, Users, ChartBar } from "lucide-react";

// Resumen del parque ecoindustrial virtual
const EcoNetworkSummary = ({ stats }) => (
  <div className="w-full max-w-2xl mx-auto bg-blue-50/70 border border-blue-100 rounded-xl mt-8 p-6 text-center shadow">
    <h3 className="text-lg font-bold mb-2 flex items-center justify-center gap-2 text-blue-700">
      <Factory className="inline text-green-600" size={22} />
      Parque Ecoindustrial Virtual
    </h3>
    <div className="flex flex-col md:flex-row items-center justify-center gap-7 mt-4">
      <div className="flex flex-col items-center">
        <Users className="mb-1 text-blue-700" size={30} />
        <span className="font-bold text-xl">{stats?.companies ?? 0}</span>
        <span className="text-xs text-gray-500">Empresas en red</span>
      </div>
      <div className="flex flex-col items-center">
        <ChartBar className="mb-1 text-green-700" size={30} />
        <span className="font-bold text-xl">{stats?.connections ?? 0}</span>
        <span className="text-xs text-gray-500">Sinergias activas</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="rounded-full text-white bg-green-500 px-3 py-2 font-bold shadow text-lg mb-1">↓ CO₂</span>
        <span className="font-bold text-xl">{stats?.co2Saved ?? 0} kg</span>
        <span className="text-xs text-gray-500">Emisiones evitadas</span>
      </div>
    </div>
  </div>
);

export default EcoNetworkSummary;

