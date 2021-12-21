import React from "react";
import { Link } from "react-router-dom";
import BlogData from "../assets/data/blogs";
import BlogsTrend from "../components/BlogsTrend";
import Grid from "../components/Grid";
import Helmet from "../components/Helmet";

const Blogs = () => {
  return (
    <Helmet title="Blogs">
      <div className="container">
        <div className="blog__section">
          <div className="blog__section__head">
            <div className="blog__section__head__search">
              <input type="text" placeholder="Tìm kiếm..." />
              <button>
                <i className="bx bx-search"></i>
              </button>
            </div>
            <div className="blog__section__head__title">
              <h2>Tin tức mới</h2>
            </div>
            <div className="blog__section__head__list">
              <ul>
                {BlogData.getAllBlogs().map((item, index) => (
                  <li key={index}>
                    <Link to={`/blogs/${item.slug}`}>
                      <div className="blog__section__head__list__img">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="blog__section__head__list__title">
                        <p>{item.title}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="blog__section__content">
            <Grid col={3} mdCol={1} smCol={1} gap={20}>
              {BlogData.getAllBlogs().map((item, index) => (
                <BlogsTrend
                  key={index}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  widthImgBlog={true}
                  slug={item.slug}
                />
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Blogs;
