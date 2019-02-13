import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <style jsx>
        {`
          h1 {
            text-align: center;
            text-shadow: 2px 2px #cccccc;
          }
        `}
      </style>
      <h1>Farmers Market!!</h1>
      <Link to="/schedule">Weekly Schedule</Link> |{" "}
      <Link to="/producebymonth">Produce By Month</Link>
    </div>
  );
}

export default Header;
