import React from "react";

import PieChart from "../src/Charts/Pie chart";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PieChart}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
