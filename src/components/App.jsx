import React from "react";
import Schedule from "./Schedule";
import Header from "./Header";
import ProduceByMonth from "./ProduceByMonth";
import { Switch, Route } from "react-router-dom";
import Error404 from "./Error404.jsx";

function App() {
  return (
    <div>
      <style jsx global>
        {`
          body {
            font-family: "Poppins", sans-serif;
          }
        `}
      </style>
      <Header />
      <Switch>
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/producebymonth" component={ProduceByMonth} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
