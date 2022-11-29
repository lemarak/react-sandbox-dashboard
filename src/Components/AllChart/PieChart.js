import { Pie } from "react-chartjs-2";

const PieChart = ({ data, labels }) => {
  return (
    <div className="chart-container">
      <Pie
        redraw={true}
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default PieChart;
