import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "../components/Grid";
import Helmet from "../components/Helmet";
import productData from "../assets/data/products";
import ProductCard from "../components/ProductCard";
import category from "../assets/data/category";

const Product = () => {
  const menuFilterRef = useRef(null);
  const [indexFilter, setIndexFilter] = useState(null);

  const productList = productData.getAllProducts();
  const [product, setProduct] = useState(productList);
  const [activeGotoCart, setActiveGotoCart] = useState("");
  const handleClick = (item) => {
    const index = category.findIndex((x) => x.id === item.id);
    setIndexFilter(index);

    let temp = productList;
    if (category) {
      temp = temp.filter((e) => item.categorySlug.includes(e.categorySlug));
    }
    setProduct(temp);
  };

  const handleGotoCart = (item) => {
    const slugIndex = product.find((i) => i.slug === item.slug);
    if (item.slug === slugIndex.slug) {
      setActiveGotoCart(slugIndex.slug);
    }
  };
  const toggleFilter = () => menuFilterRef.current.classList.toggle("active");
  return (
    <Helmet title="Product">
      <div className="container">
        <div className="product">
          <div className="product__header">
            <div className="product__header__link">
              <Link to="/home">Trang chủ</Link>
              <span>/</span>
              <h2>Sản phẩm</h2>
            </div>
            <div className="product__header__menu" onClick={toggleFilter}>
              <i className="bx bx-filter-alt"></i>
              <span>Bộ lọc</span>
            </div>
            <div className="product__header__select">
              <p>Hiển thị kết quả :</p>
              <form action="">
                <select name="" id="">
                  <option value="">Thứ tự mặc định</option>
                  <option value="">Thứ tự theo độ phổ biến</option>
                  <option value="">Thứ tự theo đánh giá</option>
                  <option value="">Thứ tự theo giá: Thấp đến cao</option>
                  <option value="">Thứ tự theo giá: Cao đến thấp</option>
                </select>
              </form>
            </div>
          </div>

          <div className="product__section">
            <div className="product__section__filter" ref={menuFilterRef}>
              <div className="product__section__filter__content">
                <h2 className="product__section__filter__content__title">
                  Danh mục sản phẩm
                </h2>
                <div className="menu__close" onClick={toggleFilter}>
                  <i className="bx bx-x"></i>
                </div>
                <ul>
                  {category.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        toggleFilter();
                        handleClick(item);
                      }}
                      className={`${
                        item.id === indexFilter ? "active__filter" : ""
                      }`}
                    >
                      <i className="bx bx-chevron-right"></i>
                      <span>{item.display}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="product__section__card">
              <Grid col={4} mdCol={3} smCol={2} gap={20}>
                {product.map((item, index) => (
                  <ProductCard
                    key={index}
                    img={item.image[0]}
                    name={item.title}
                    price={item.price}
                    sale={item.sale}
                    slug={item.slug}
                    handleGotoCart={() => handleGotoCart(item)}
                    activeGotoCart={activeGotoCart}
                  />
                ))}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Product;
