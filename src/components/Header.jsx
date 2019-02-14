import React from "react";
import { Link } from "react-router-dom";
import farmersImage from "../assets/images/farmers.jpeg";

function Header() {
  return (
    <div>
      <style jsx>
        {`
          h1 {
            text-align: center;
            text-shadow: 2px 2px #cccccc;
          }
          img {
            max-width: 100%;
            height: auto;
          }
        `}
      </style>
      <img src={farmersImage} />
      <h1>Farmers Market!!</h1>
      <Link to="/schedule">Weekly Schedule</Link> |{" "}
      <Link to="/producebymonth">Produce By Month</Link>
    </div>
  );
}

export default Header;
