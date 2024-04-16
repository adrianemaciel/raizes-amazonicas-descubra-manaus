import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/home";
import { Layout } from "./components/pages/layout";
import { Legends } from "./components/pages/legends";
import { Cooking } from "./components/pages/cooking";
import { Tourism } from "./components/pages/tourism";
import { NoPage } from "./components/pages/nopage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lendas" element={<Legends />} />
          <Route path="culinaria" element={<Cooking />} />
          <Route path="turismo" element={<Tourism />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
