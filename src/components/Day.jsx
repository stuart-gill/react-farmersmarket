import React from "react";
import PropTypes from "prop-types";

function Day(props) {
  return (
    <div>
      <h3>
        {props.name}
        {props.location}
        {props.hours}
        {props.booth}
      </h3>
    </div>
  );
}

Day.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default Day;
