import React from "react";
import { Doughnut } from "react-chartjs-2";

const energyData = [
  { source: "Lighting", percentage: 25 },
  { source: "Heating & Cooling", percentage: 40 },
  { source: "Electronics & Appliances", percentage: 20 },
  { source: "Other", percentage: 15 },
];

const EnergyPieChart = () => {
  const labels = energyData.map((item) => item.source);
  const data = energyData.map((item) => item.percentage);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-3/5 h-96 p-10 pb-20 rounded-2xl bg-white">
      <h2>Energy Consumption Breakdown</h2>
      <Doughnut
        data={{
          labels,
          datasets: [
            {
              label: "Energy Sources",
              data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
              ],
              pointRadius: 5,
              pointHitRadius: 10,
            },
          ],
        }}
        options={chartOptions}
      />
    </div>
  );
};

export default EnergyPieChart;
