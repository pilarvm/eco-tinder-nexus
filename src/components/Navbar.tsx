
import { Link } from "react-router-dom";
import { Users2, LogIn, UserPlus } from "lucide-react";

const Navbar = () => (
  <nav className="w-full flex items-center justify-between py-4 px-5 bg-white/80 border-b shadow-sm">
    <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-green-700 tracking-tight hover:opacity-80 transition-opacity">
      <Users2 className="text-green-600" size={28} />
      <span>Red Circular</span>
      <span className="text-xs ml-2 rounded bg-green-100 px-2 py-0.5 text-green-600 font-semibold">EcoNova</span>
    </Link>
    <div className="flex gap-2">
      <Link to="/login" className="inline-flex items-center gap-1 px-4 py-1.5 rounded bg-blue-100 text-blue-800 font-medium hover:bg-blue-200 transition text-sm">
        <LogIn className="w-4 h-4" /> Ingresar
      </Link>
      <Link to="/register" className="inline-flex items-center gap-1 px-4 py-1.5 rounded bg-green-500 text-white font-semibold hover:bg-green-600 transition text-sm shadow">
        <UserPlus className="w-4 h-4" /> Registrarse
      </Link>
    </div>
  </nav>
);

export default Navbar;
