import React from "react";
import ReactECharts from "echarts-for-react";

const PieChart = () => {
  const option = {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
    },
    legend: {
      orient: "horizontal",
      // left: "center",
      data: ["product 1", "product 2", "product 3", "product 4", "product 5"],
    },
    series: [
      {
        type: "pie",
        radius: ["35%", "60%"],
        center: ["50%", "65%"],
        avoidLabelOverlap: true,
        label: {
          show: true,
          formatter: "{c}",
        },
        data: [
          { value: 335, name: "product 1" },
          { value: 310, name: "product 2" },
          { value: 234, name: "product 3" },
          { value: 135, name: "product 4" },
          { value: 997, name: "product 5" },
        ],
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 400 }} />;
};

export default PieChart;
