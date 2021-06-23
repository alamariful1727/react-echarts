import React from "react";
import ReactECharts from "echarts-for-react";

const BarChart = () => {
  const option = {
    title: {
      text: "Bar chart",
      textStyle: {
        color: "#6B66FF",
        fontSize: 16,
      },
    },
    tooltip: {},
    xAxis: {
      name: "Day of the week",
      nameTextStyle: {
        color: "#6B66FF",
        fontSize: 16,
      },
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
        color: "#CFD1D7",
      },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      show: true,
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
    series: [
      {
        type: "bar",
        name: "",
        data: [25, 20, 20, 20, 25, 30, 26],
        barWidth: 20,
        barCateGoryGap: "10%",
      },
      {
        type: "bar",
        name: "",
        data: [20, 20, 30, 30, 30, 15, 20],
        barWidth: 20,
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
