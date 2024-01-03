import { Navigate, Outlet } from "react-router-dom";
// import { useEffect } from "react";
import Sidebar from "../Components/Sidebar";

export function PrivateRoutes () {
  const user = true;

  return user 
  ? <div style={{ display: "flex" }}>
    <Sidebar />
    <div style={{ border: "1px solid red", width: "calc(100vw - 10rem)" }}>
      <Outlet />
    </div>
  </div>
  : <Navigate to ="/" />

}