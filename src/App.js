import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import DashboardEmployees from "./Pages/DashboardEmployees/DashboardEmployees";
import DashboardFinance from "./Pages/DashboardFinance/DashboardFinance";
import DashboardContextProvider from "./context/DashboardContext";

export default function App() {
  return (
    <>
      <DashboardContextProvider>
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashboardFinance />} />
          <Route path="/dashboardemployees" element={<DashboardEmployees />} />
        </Routes>
      </DashboardContextProvider>
    </>
  );
}
