import { Link } from "react-router-dom";

export function NavLink() {
  return (
    <ul className="flex space-x-4">
      <li>
        <Link to="/" className=" text-lime-100 hover:text-lime-500 py-2 px-4">
          Sobre
        </Link>
      </li>
      <li>
        <Link
          to="/lendas"
          className=" text-lime-100 hover:text-lime-500 py-2 px-4"
        >
          Lendas
        </Link>
      </li>
      <li>
        <Link
          to="/culinaria"
          className=" text-lime-100 hover:text-lime-500 py-2 px-4"
        >
          Culinária
        </Link>
      </li>
      <li>
        <Link
          to="/turismo"
          className=" text-lime-100 hover:text-lime-500 py-2 px-4"
        >
          Turismo
        </Link>
      </li>
    </ul>
  );
}
