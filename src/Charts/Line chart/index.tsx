import React from "react";
import ReactECharts from "echarts-for-react";

const LineChart = () => {
  const options = {
    grid: { top: 8, right: 8, bottom: 24 },
    xAxis: {
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
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320, 1022, 951, 810, 514, 1299],
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

export default LineChart;
