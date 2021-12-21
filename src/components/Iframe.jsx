import React from "react";
import PropTypes from "prop-types";

const Iframe = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
};

Iframe.prototype = {
  iframe: PropTypes.string.isRequired,
};

export default Iframe;
