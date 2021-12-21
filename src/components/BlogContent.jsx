import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import BlogData from "../assets/data/blogs";
import Footer from "./Footer";
import Helmet from "./Helmet";

const BlogContent = (props) => {
  const params = useParams();
  const blogs = BlogData.getBlogbySlug(params.slug);
  return (
    <Helmet title={blogs.title}>
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
            <div className="blog-content">
              <div className="blog-content__title">
                <h2>{blogs.title}</h2>
              </div>
              <div className="blog-content__image">
                <img src={blogs.image} alt={blogs.title} />
              </div>
              <div className="blog-content__description">
                <p>{blogs.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Helmet>
  );
};

export default BlogContent;
