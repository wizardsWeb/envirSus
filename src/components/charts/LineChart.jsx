import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";

const mockLineData = [
  {
    id: "series1",
    color: "#1E90FF", // DodgerBlue
    data: [
      { x: "2024-01-01", y: 34 },
      { x: "2024-02-01", y: 45 },
      { x: "2024-03-01", y: 20 },
    ],
  },
  {
    id: "series2",
    color: "#FF6347", // Tomato
    data: [
      { x: "2024-01-01", y: 23 },
      { x: "2024-02-01", y: 65 },
      { x: "2024-03-01", y: 15 },
    ],
  },
];

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();

  return (
    <ResponsiveLine
      data={mockLineData} // Use mock data for testing
      theme={{
        axis: {
          domain: {
            line: {
              stroke: theme.palette.text.primary,
            },
          },
          legend: {
            text: {
              fill: theme.palette.text.primary,
            },
          },
          ticks: {
            line: {
              stroke: theme.palette.text.primary,
              strokeWidth: 1,
            },
            text: {
              fill: theme.palette.text.primary,
            },
          },
        },
        legends: {
          text: {
            fill: theme.palette.text.primary,
          },
        },
        tooltip: {
          container: {
            color: theme.palette.primary.main,
          },
        },
      }}
      colors={isDashboard ? { datum: "color" } : ["#1E90FF", "#FF6347"]}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5,
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
