import { Outlet } from "react-router-dom";
import { Header } from "../header";

export function Layout() {
  return (
    <div className="max-w-[1216px] mx-auto aspect-auto flex flex-col gap-5">
      <Header />
      <Outlet />
    </div>
  );
}
