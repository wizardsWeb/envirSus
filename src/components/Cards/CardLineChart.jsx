import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function CardLineChart() {
  const chartRef = useRef(null);
  const lineChartRef = useRef(null); // Store chart instance

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: `${new Date().getFullYear()} Carbon Emissions Reduction`,
        backgroundColor: "rgba(34, 197, 94, 0.2)", // Tailwind color: emerald-500 with opacity
        borderColor: "#22c55e", // Tailwind color: emerald-500
        data: [30, 45, 60, 70, 80, 85, 90], // Sample data for reduction in carbon emissions over months
        fill: true,
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
        ticks: {
          color: "#6b7280", // Tailwind color: gray-500
        },
        grid: {
          drawBorder: false,
          color: "#e5e7eb", // Tailwind color: gray-200
        },
      },
      y: {
        ticks: {
          color: "#6b7280", // Tailwind color: gray-500
        },
        grid: {
          drawBorder: false,
          color: "#e5e7eb", // Tailwind color: gray-200
        },
      },
    },
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase text-gray-400 mb-1 text-xs font-semibold">
              Environmental Impact
            </h6>
            <h2 className="text-gray-700 text-xl font-semibold">
              Carbon Emissions Reduction
            </h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        <div className="relative h-350-px">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
}
