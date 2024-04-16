import LogoRaiz from "../assets/logo-raiz.png";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <div className="flex items-center justify-between bg-green-700 h-20 p-3">
      <img src={LogoRaiz} alt="Logo" className="h-12" />
      <nav className="flex items-center">
        <NavLink />
      </nav>
    </div>
  );
}
