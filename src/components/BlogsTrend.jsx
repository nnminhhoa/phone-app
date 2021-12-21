import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogsTrend = (props) => {
  return (
    <Link to={`/blogs/${props.slug}`} className={`blog__item ${props.widthImgBlog ? "width__blog" : ""}`} >
      <div className="blog__item__image">
        <img src={props.image} alt={props.title} />
      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </Link>
  );
};

BlogsTrend.prototype = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  widthImgBlog: PropTypes.bool,
  slug: PropTypes.string.isRequired,
};

export default BlogsTrend;
