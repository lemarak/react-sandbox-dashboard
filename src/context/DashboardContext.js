import { createContext, useState } from "react";
import fullData from "./fulldata";

export const DashboardContext = createContext();

const DashboardContextProvider = (props) => {
  const [dataChart, setDataChart] = useState(fullData["2021"]);
  const [yearData, setYearData] = useState("2021");

  const changeYear = (el) => {
    setDataChart(fullData[el.target.value]);
    setYearData(el.target.value);
  };
  return (
    <DashboardContext.Provider value={{ changeYear, dataChart, yearData }}>
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
