import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/pages/home";
import { Legends } from "./components/pages/legends";
import { Cooking } from "./components/pages/cooking";
import { Tourism } from "./components/pages/tourism";

export function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Sobre</Link>
            </li>
            <li>
              <Link to="/lendas">Lendas</Link>
            </li>
            <li>
              <Link to="/culinaria">Culinária</Link>
            </li>
            <li>
              <Link to="/turismo">Turismo</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Lendas" Component={Legends} />
          <Route path="/culinaria" Component={Cooking} />
          <Route path="/turismo" Component={Tourism} />
        </Routes>
      </div>
    </Router>
  );
}
