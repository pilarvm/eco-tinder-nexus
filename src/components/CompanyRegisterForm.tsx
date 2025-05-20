
import { useState } from "react";
import { Factory } from "lucide-react";

const initialState = {
  companyName: "",
  location: "",
  offers: "",
  needs: "",
};

const CompanyRegisterForm = ({ onRegister }) => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onRegister({
        ...form,
        offers: form.offers.split(",").map((v) => v.trim()),
        needs: form.needs.split(",").map((v) => v.trim()),
      });
      setLoading(false);
    }, 900);
  };

  return (
    <div className="bg-white/90 rounded-2xl shadow-lg px-7 py-7 border border-gray-100">
      <h2 className="text-xl font-semibold flex items-center gap-2 mb-4 text-blue-700">
        <Factory className="inline text-blue-500" size={22} /> Registra tu empresa
      </h2>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div>
          <label className="block text-base font-medium mb-1">Nombre Empresa</label>
          <input
            name="companyName"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200 text-sm"
            required
            autoFocus
            value={form.companyName}
            onChange={handleChange}
            placeholder="Ejemplo: Recicla Soluciones SAC"
          />
        </div>
        <div>
          <label className="block text-base font-medium mb-1">Ubicación</label>
          <input
            name="location"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200 text-sm"
            required
            value={form.location}
            onChange={handleChange}
            placeholder="Ciudad o distrito"
          />
        </div>
        <div>
          <label className="block text-base font-medium mb-1">¿Qué residuos ofreces?</label>
          <input
            name="offers"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm"
            required
            value={form.offers}
            onChange={handleChange}
            placeholder="Ej: Botellas PET, cartón, chatarra"
          />
        </div>
        <div>
          <label className="block text-base font-medium mb-1">¿Qué materiales necesitas?</label>
          <input
            name="needs"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm"
            required
            value={form.needs}
            onChange={handleChange}
            placeholder="Ej: Plástico reciclado, aceite usado"
          />
        </div>
        <button
          className="mt-2 px-5 py-2 rounded-md bg-green-500 text-white font-bold hover:bg-green-600 transition"
          type="submit"
          disabled={loading}
        >
          {loading ? "Registrando..." : "Buscar sinergias"}
        </button>
      </form>
    </div>
  );
};

export default CompanyRegisterForm;

