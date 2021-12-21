import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css";

const ContentTrend = (props) => {
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);
  return (
    <div
      className="trend__list__content"
      data-aos="fade-right"
      data-aos-once="true"
      data-aos-anchor-placement="right-center"
    >
      <div className="trend__list__content__text">
        <p>{props.title}</p>
        <h1>{props.name}</h1>
      </div>
      <img src={props.img} alt="lỗi ảnh" />
    </div>
  );
};

ContentTrend.prototype = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ContentTrend;
