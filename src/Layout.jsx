import React from "react";
import { Outlet } from "react-router-dom";
import Main_Header from "./components/Header/Main_Header";
export default function Layout() {
  return (
    <>
      <Main_Header />
      <Outlet />
    </>
  );
}
