import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home/Home";
import { Layout } from "./pages/layout/Layout";
import { Legends } from "./pages/legends/Legends";
import { Cooking } from "./pages/cooking/Cooking";
import { Tourism } from "./pages/tourism/Tourism";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lendas" element={<Legends />} />
          <Route path="culinaria" element={<Cooking />} />
          <Route path="turismo" element={<Tourism />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}