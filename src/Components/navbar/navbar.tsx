import logo from "@/assets/images/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-around bg-[#FCFDFF] border h-15">
      <div className="flex items-center justify-center gap-2 ">
        <img src={logo} style={{ width: "50px" }} alt="Logo" />
        <p className="text-lg font-bold">
          Nexa <span className="text-blue-500">Core</span>
        </p>
      </div>
      <ul className="flex items-center justify-center gap-4 list-none p-0 m-0 ">
        <Link className="hover:text-blue-500 hover:bg-[#EFF6FF] p-2" to="/Home">
          Home
        </Link>
        <Link className="hover:text-blue-500 hover:bg-[#EFF6FF] p-2" to="/about">
          About
        </Link>
        <Link className="hover:text-blue-500 hover:bg-[#EFF6FF] p-2" to="/services">
          Services
        </Link>
        <Link
          className="hover:text-blue-500 hover:bg-[#EFF6FF] p-2"
          to="/portfolio"
        >
          Portfolio
        </Link>
        <Link
          className="hover:text-blue-500 hover:bg-[#EFF6FF] p-2"
          to="/industries"
        >
          Industries
        </Link>
        <Link className="hover:text-blue-500 hover:bg-[#EFF6FF] p-2 " to="/career">
          Career
        </Link>
        <Link className="hover:text-blue-500 hover:bg-[#EFF6FF] p-2 " to="/contact">
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
