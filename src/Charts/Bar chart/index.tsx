import React from "react";
import ReactECharts from "echarts-for-react";

const BarChart = () => {
  const option = {
    title: {
      text: "",
      textStyle: {
        color: "#6B66FF",
        fontSize: 16,
      },
    },
    tooltip: {},
    xAxis: {
      name: "Day of the week",
      // nameTextStyle: {
      //   color: "#6B66FF",
      //   fontSize: 16,
      // },
      nameLocation: "center",
      nameGap: 48,
      axisTick: {
        alignWithLabel: false,
      },
      splitLine: {
        show: false,
      },
      type: "category",
      data: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thur", "Fri"],
      axisLabel: {
        show: true,
        fontSize: 16,
        color: "#C2C2DD",
      },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      name: "Sales amount",
      show: true,
      nameRotate: 90,
      nameLocation: "center",
      nameGap: 48,
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#FFF",
          opacity: "0.2",
        },
      },
      type: "value",
      axisLabel: {
        show: true,
        interval: "auto",
        fontSize: 16,
        color: "#FF8F6B",
      },
      axisLine: {
        show: false,
      },
      max: 50,
    },
    legend: {
      orient: "horizontal",
      right: "center",
      data: ["product 1", "product 2"],
    },
    series: [
      {
        type: "bar",
        name: "product 1",
        data: [25, 20, 20, 20, 25, 30, 26],
        barWidth: 10,
        barCateGoryGap: "10%",
      },
      {
        type: "bar",
        name: "product 2",
        data: [20, 20, 30, 30, 30, 15, 20],
        barWidth: 10,
        barCateGoryGap: "10%",
      },
    ],
    color: ["#6B66FF", "#FF8F6B"],
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: 400 }}
      opts={{ renderer: "svg" }}
    />
  );
};

export default BarChart;
