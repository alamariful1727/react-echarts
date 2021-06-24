import React from "react";
import PieChart from "../src/Charts/Pie chart";
import LineChart from "../src/Charts/Line chart";
import BarChart from "./Charts/Bar chart";

const Home = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-10">
        <h1 className="text-3xl text-center ">Pie Chart</h1>
        <PieChart />
      </div>
      <div className="space-y-10">
        <h1 className="text-3xl text-center ">Line Chart</h1>
        <LineChart />
      </div>
      <div className="space-y-10">
        <h1 className="text-3xl text-center ">Bar Chart</h1>
        <BarChart />
      </div>
    </div>
  );
};

export default Home;
