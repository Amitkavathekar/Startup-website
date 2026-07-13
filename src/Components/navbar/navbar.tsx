import { useState } from "react";
import { MonitorDot, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FCFDFF] border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <NavLink to="/Home" className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <MonitorDot className="w-5 h-5 text-white" />
            </NavLink>
            <p className="text-lg font-bold text-[#0A1628]">
              Nexa <span className="text-blue-500">Core</span>
            </p>
          </div>
          
          <ul className="hidden md:flex items-center gap-6 list-none p-0 m-0">
            <NavLink
              className={({ isActive }) =>
                `text-sm font-semibold p-2 rounded-lg transition-colors ${
                  isActive
                    ? "text-blue-600 bg-[#EFF6FF]"
                    : "text-slate-600 hover:text-blue-500 hover:bg-[#EFF6FF]"
                }`
              }
              to="/Home"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-sm font-semibold p-2 rounded-lg transition-colors ${
                  isActive
                    ? "text-blue-600 bg-[#EFF6FF]"
                    : "text-slate-600 hover:text-blue-500 hover:bg-[#EFF6FF]"
                }`
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-sm font-semibold p-2 rounded-lg transition-colors ${
                  isActive
                    ? "text-blue-600 bg-[#EFF6FF]"
                    : "text-slate-600 hover:text-blue-500 hover:bg-[#EFF6FF]"
                }`
              }
              to="/services"
            >
              Services
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-sm font-semibold p-2 rounded-lg transition-colors ${
                  isActive
                    ? "text-blue-600 bg-[#EFF6FF]"
                    : "text-slate-600 hover:text-blue-500 hover:bg-[#EFF6FF]"
                }`
              }
              to="/career"
            >
              Career
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-sm font-semibold p-2 rounded-lg transition-colors ${
                  isActive
                    ? "text-blue-600 bg-[#EFF6FF]"
                    : "text-slate-600 hover:text-blue-500 hover:bg-[#EFF6FF]"
                }`
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </ul>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none p-2 rounded-lg"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t bg-white px-4 pt-2 pb-4 space-y-1">
          <NavLink
            onClick={() => setIsOpen(false)}
            className="block text-base font-semibold text-slate-700 hover:text-blue-600 hover:bg-[#EFF6FF] p-3 rounded-xl transition"
            to="/Home"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            className="block text-base font-semibold text-slate-700 hover:text-blue-600 hover:bg-[#EFF6FF] p-3 rounded-xl transition"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            className="block text-base font-semibold text-slate-700 hover:text-blue-600 hover:bg-[#EFF6FF] p-3 rounded-xl transition"
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            className="block text-base font-semibold text-slate-700 hover:text-blue-600 hover:bg-[#EFF6FF] p-3 rounded-xl transition"
            to="/career"
          >
            Career
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            className="block text-base font-semibold text-slate-700 hover:text-blue-600 hover:bg-[#EFF6FF] p-3 rounded-xl transition"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
