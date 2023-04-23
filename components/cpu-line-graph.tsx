// Register the chart plugins
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


// define chart options
export const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Cpu Utilization Chart",
    },
  },
};

export default function CPULineGraph({ cpuAnalytics, cpuDates }: any) {
  const chartData = {
    labels: cpuDates?.map((date: string) => toHoursAndMins(date)) ?? [
      "No Data",
    ],
    datasets: [
      {
        label: "cpu utilization",
        data: cpuAnalytics?.map((cpuData: number) => cpuData) ?? [0],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <Line data={chartData} options={chartOptions} />
    </>
  );
}

// Convert date string to hours and minutes
function toHoursAndMins(dateStr: string) {
  const date = new Date(dateStr);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
}
