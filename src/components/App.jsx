import React from "react";
import Schedule from "./Schedule";
import Header from "./Header";
import ProduceByMonth from "./ProduceByMonth";

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
      <Schedule />
      <ProduceByMonth />
    </div>
  );
}

export default App;
