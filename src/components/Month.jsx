import React from "react";
import PropTypes from "prop-types";
import Produce from "./Produce";

function Month(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>
        {props.produce.map((produce, index) => (
          <li key={index}>{produce}</li>
        ))}
      </ul>
    </div>
  );
}

Month.propTypes = {
  name: PropTypes.string.isRequired,
  produce: PropTypes.arrayOf(Produce)
};

export default Month;
