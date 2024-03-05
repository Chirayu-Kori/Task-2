import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const stockData = [
  { date: new Date(2023, 11, 1), close: 140.5 },
  { date: new Date(2023, 11, 8), close: 142.75 },
  { date: new Date(2023, 11, 15), close: 145.2 },
  { date: new Date(2023, 11, 22), close: 143.0 },
  { date: new Date(2023, 11, 29), close: 140.85 },
  { date: new Date(2024, 0, 5), close: 141.9 },
  { date: new Date(2024, 0, 12), close: 142.15 },
  { date: new Date(2024, 0, 19), close: 144.3 },
  { date: new Date(2024, 0, 26), close: 147.25 },
];

const StockChart = () => {
  const labels = stockData.map((item) => item.date.toLocaleDateString());
  const data = stockData.map((item) => item.close);

  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            labelString: "Closing Price (USD)",
          },
        },
      ],
      xAxes: [
        {
          type: "time",
          time: {
            unit: "day",
            unitStepSize: 1,
            displayFormats: {
              month: "MMM DD",
            },
          },
        },
      ],
    },
  };

  return (
    <div className="w-3/5 p-10 rounded-2xl bg-white">
      <Line
        data={{
          labels,
          datasets: [
            {
              label: "High Tech Stocks (HTI)",
              data,
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

export default StockChart;
