import React from "react";
import ReactECharts from "echarts-for-react";

const MultipleLineChart = () => {
  const options = {
    grid: { top: 30, right: 8, bottom: 14 },
    xAxis: {
      name: "Months of the year",
      nameLocation: "center",
      nameGap: 48,
      type: "category",
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yAxis: {
      name: "Number of Orders",
      type: "value",
      nameRotate: 90,
      nameLocation: "center",
      nameGap: 48,
    },
    legend: {
      orient: "horizontal",
      right: "center",
      data: ["product 1", "product 2"],
    },
    series: [
      {
        name: "product 1",
        data: [820, 292, 391, 644, 1020, 1210, 890, 922, 1051, 720, 914, 599],
        type: "line",
        smooth: true,
      },
      {
        name: "product 2",
        data: [320, 932, 601, 934, 1290, 1330, 1320, 1022, 951, 810, 514, 1299],
        type: "line",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return <ReactECharts option={options} />;
};

export default MultipleLineChart;
