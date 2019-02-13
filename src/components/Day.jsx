import React from "react";
import PropTypes from "prop-types";

function Day(props) {
  return (
    <div>
      <style jsx>
        {`
          p {
            margin-left: 30px;
          }
        `}
      </style>
      <h2>{props.name}</h2>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
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
