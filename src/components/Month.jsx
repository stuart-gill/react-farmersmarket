import React from "react";
import PropTypes from "prop-types";
import Produce from "./Produce";

function Month(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.produce}</h3>
    </div>
  );
}

Month.propTypes = {
  name: PropTypes.string.isRequired,
  produce: PropTypes.arrayOf(Produce)
};

export default Month;
