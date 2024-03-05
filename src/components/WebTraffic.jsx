import React from "react";
import { Chart } from "chart.js/auto"; // Import necessary components
import { Bar } from "react-chartjs-2";

// Sample web traffic data (replace with your actual data)
const webTrafficData = [
  { month: "January", visits: 100, pageViews: 80 },
  { month: "February", visits: 120, pageViews: 95 },
  { month: "March", visits: 115, pageViews: 88 },
  { month: "April", visits: 130, pageViews: 102 },
  { month: "May", visits: 105, pageViews: 85 },
  { month: "June", visits: 110, pageViews: 90 },
  { month: "July", visits: 95, pageViews: 78 },
];

const WebTraffic = () => {
  const labels = webTrafficData.map((item) => item.month);
  const visitsData = webTrafficData.map((item) => item.visits);

  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          scaleLabel: {
            display: true,
            labelString: "views",
          },
        },
      ],
    },
  };

  return (
    <div className="w-3/5 p-10 rounded-2xl bg-white mt-10">
      <Bar
        data={{
          labels,
          datasets: [
            {
              label: "Web Traffic",
              data: visitsData,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
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

export default WebTraffic;
