import React from "react";
import PropTypes from "prop-types";

function Produce(props) {
  return <div>{props.name}</div>;
}

Produce.propTypes = {
  name: PropTypes.string.isRequired
};

export default Produce;
