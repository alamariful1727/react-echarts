import React from "react";

import PieChart from "../src/Charts/Pie chart";
import LineChart from "../src/Charts/Line chart";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BarChart from "./Charts/Bar chart";

function App() {
  return (
    <div className="py-20">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PieChart}></Route>
          <Route exact path="/line" component={LineChart}></Route>
          <Route exact path="/bar" component={BarChart}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
