import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CardBarChart() {
  const chartRefBar = useRef(null);
  const myBarChartRef = useRef(null);

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: `${new Date().getFullYear()} Waste Reduction`,
        backgroundColor: "rgba(16, 185, 129, 0.8)", // Tailwind color: emerald-600 with opacity
        borderColor: "#10b981", // Tailwind color: emerald-600
        data: [50, 70, 90, 110, 130, 150, 170], // Sample data for waste reduction in tons
        fill: true,
        barThickness: 12,
      },
      {
        label: `${new Date().getFullYear() - 1} Waste Reduction`,
        backgroundColor: "rgba(37, 99, 235, 0.8)", // Tailwind color: blue-600 with opacity
        borderColor: "#2563eb", // Tailwind color: blue-600
        data: [40, 60, 80, 100, 120, 140, 160], // Last year's data for comparison
        barThickness: 12,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#6b7280", // Tailwind color: gray-500
        },
        align: "end",
        position: "bottom",
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.7)",
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Month",
          color: "#6b7280", // Tailwind color: gray-500
        },
        grid: {
          color: "#e5e7eb", // Tailwind color: gray-200
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Waste Reduction (tons)",
          color: "#6b7280", // Tailwind color: gray-500
        },
        grid: {
          color: "#e5e7eb", // Tailwind color: gray-200
        },
      },
    },
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-gray-400 mb-1 text-xs font-semibold">
                Environmental Impact
              </h6>
              <h2 className="text-gray-700 text-xl font-semibold">
                Waste Reduction
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          <div className="relative h-350-px">
            <Bar options={options} data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
