import React from "react";
import PropTypes from "prop-types";

function Produce(props) {
  return (
    <div>
      <h4>{props.name}</h4>
    </div>
  );
}

Produce.propTypes = {
  name: PropTypes.string.isRequired
};

export default Produce;
