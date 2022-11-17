import { useContext } from "react";
import BarChart from "../../Components/AllChart/BarChart";
import { DashboardContext } from "../../context/DashboardContext";
import "./DashboardFinance.css";

const DashboardFinance = () => {
  const { dataChart, changeYear, yearData } = useContext(DashboardContext);

  return (
    <div className="global-container">
      <h1>Les résultats de l'année : {yearData}</h1>
      <form>
        <label htmlFor="year">Choisissez une date</label>
        <select onChange={changeYear} id="year">
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </select>
      </form>
      <div className="dasboard-container">
        <BarChart data={dataChart.chart1} name={"Chiffres bimestriels"} />
      </div>
    </div>
  );
};

export default DashboardFinance;
