
import { Recycle, ArrowRight } from "lucide-react";

// Lista de matches de empresas compatibles (recibe exchanges como prop)
const MaterialExchangeList = ({ exchanges }) => {
  if (!exchanges?.length) {
    return (
      <div className="my-8 text-gray-500 text-lg">
        No hay empresas compatibles cerca… <Recycle className="inline ml-2" />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-6 items-center w-full max-w-2xl mb-8">
      {exchanges.map((ex) => (
        <div
          key={ex.id}
          className="bg-white/90 rounded-2xl shadow-md w-full px-6 py-5 flex flex-col md:flex-row items-center border border-blue-50 hover:shadow-lg transition-all"
        >
          <div className="flex-1" style={{ minWidth: 190 }}>
            <h3 className="text-lg font-semibold flex items-center gap-2 text-blue-900">
              <Recycle className="inline-block text-green-600" size={20} />
              {ex.name}
              <span className="text-xs text-gray-400 font-normal ml-2">({ex.location})</span>
            </h3>
            <div className="flex gap-2 mt-1 text-sm">
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">
                Compatibilidad: <b>{ex.compatibility}%</b>
              </span>
              <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
                ~{ex.distanceKm} km
              </span>
            </div>
            <div className="mt-3 flex gap-2 flex-wrap">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                Ofrece: {ex.offers.join(", ")}
              </span>
              <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded">
                Busca: {ex.needs.join(", ")}
              </span>
            </div>
          </div>
          <div className="flex items-center mt-4 md:mt-0 md:ml-6">
            <button
              className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-md transition font-semibold shadow"
              onClick={() => window.alert("¡Conexión inicial creada! Te contactaremos para coordinar el intercambio.")}
            >
              Contactar <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MaterialExchangeList;

