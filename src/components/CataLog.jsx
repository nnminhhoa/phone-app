import React, { useState, useRef } from "react";
import Helmet from "./Helmet";
import productData from "../assets/data/products";
import { useParams } from "react-router";
import Section, { SectionBanner, SectionTitle } from "./Section";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/shopping-cart/cartItem";

const CataLog = (props) => {
  const params = useParams();
  const ref = useRef();
  const product = productData.getProductBySlug(params.slug);

  const [quantity, setQuantity] = useState(1);
  const [activeReview, setActiveReview] = useState(1);

  const dispatch = useDispatch();

  const addToCart = () => {
    let newItem = {
      slug: product.slug,
      price: product.price,
      quantity: quantity,
      sale: product.sale,
    };
    dispatch(addItem(newItem));
  };

  const handleQuantity = (option) => {
    if (option === "+") {
      setQuantity(quantity + 1);
    } else if (option === "-") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      } else {
        setQuantity(1);
      }
    }
  };

  const nextSlider = () => {
    ref.current.slickPrev();
  };

  const prevSlider = () => {
    ref.current.slickNext();
  };
  const settings = {
    className: "section-outstanding__slider",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    rows: 1,
    dots: true,
    dotsClass: "slick-dots slick-thumb custom-indicator",
    customPaging: function (i) {
      return (
        <div>
          <img src={product.image[i]} alt="" />
        </div>
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };
  return (
    <Helmet title={product.title}>
      <div className="container">
        <div className="catalog">
          <div className="catalog__main">
            <div className="catalog__main__slider">
              <Slider ref={ref} {...settings}>
                <div className="catalog__main__slider__image">
                  <img src={product.image[0]} alt={product.title} />
                </div>
                <div className="catalog__main__slider__image">
                  <img src={product.image[1]} alt={product.title} />
                </div>
              </Slider>
              <div className="catalog__main__slider__btn">
                <div
                  className="catalog__main__slider__btn__left"
                  onClick={nextSlider}
                >
                  <i className="bx bx-chevron-left"></i>
                </div>
                <div
                  className="catalog__main__slider__btn__right"
                  onClick={prevSlider}
                >
                  <i className="bx bx-chevron-right"></i>
                </div>
              </div>
            </div>

            <div className="catalog__main__content">
              <div className="catalog__main__header">
                <div className="catalog__main__header__link">
                  <Link to="/home">Trang chủ</Link>
                  <span>/</span>
                  <Link
                    to="/product"
                    style={{
                      color: "#000",
                    }}
                  >
                    Sản phẩm
                  </Link>
                </div>
              </div>
              <div className="catalog__main__content__title">
                <h2>{product.title}</h2>
              </div>
              <div className="catalog__main__content__price">
                <span>$ {product.price}</span>
              </div>
              <div className="catalog__main__content__description">
                <p>{product.description}</p>
              </div>
              <div className="catalog__main__content__list">
                <ul>
                  <li>Sku: P006</li>
                  <li>Categories: Butter & Eggs, Cultured Butter</li>
                  <li>Tag: Man</li>
                </ul>
              </div>
              <div className="catalog__main__content__form">
                <div
                  className="btn__quantity"
                  onClick={() => handleQuantity("-")}
                >
                  <i className="bx bx-minus"></i>
                </div>
                <div className="quantity">{quantity}</div>
                <div
                  className="btn__quantity"
                  onClick={() => handleQuantity("+")}
                >
                  <i className="bx bx-plus"></i>
                </div>
              </div>
              <div className="catalog__main__content__add">
                <Button icon="bx bx-cart" animate={true} onClick={() => addToCart()}>
                  Thêm vào giỏ
                </Button>
              </div>
            </div>
          </div>
          <div className="catalog__footer">
            <div className="catalog__list">
              <div
                className={`catalog__list__item ${
                  activeReview === 1 ? "active-tabs" : ""
                }`}
                onClick={() => setActiveReview(1)}
              >
                <div className="catalog__list__item__title">
                  <h2>Mô tả</h2>
                </div>
              </div>
              <div
                className={`catalog__list__item ${
                  activeReview === 2 ? "active-tabs" : ""
                }`}
                onClick={() => setActiveReview(2)}
              >
                <div className="catalog__list__item__title">
                  <h2>Đánh giá</h2>
                </div>
              </div>
            </div>
            <div className="catalog__content">
              <div
                className={`catalog__content__description ${
                  activeReview === 1 ? "active-content" : ""
                }`}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  fringilla augue nec est tristique auctor. Donec non est at
                  libero vulputate rutrum. Morbi ornare lectus quis justo
                  gravida semper. Nulla tellus mi, vulputate adipiscing cursus
                  eu, suscipit id nulla.
                </p>
                <p>
                  Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus
                  feugiat sem, quis fermentum turpis eros eget velit. Donec ac
                  tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus
                  eget sagittis vulputate, sapien libero hendrerit est, sed
                  commodo augue nisi non neque. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed tempor, lorem et placerat
                  vestibulum, metus nisi posuere nisl, in accumsan elit odio
                  quis mi. Cras neque metus, consequat et blandit et, luctus a
                  nunc. Etiam gravida vehicula tellus, in imperdiet ligula
                  euismod eget.
                </p>
              </div>
              <div
                className={`catalog__content__form ${
                  activeReview === 2 ? "active-content" : ""
                }`}
              >
                <div className="form__title">
                  <h2>Đánh giá</h2>
                  <p>Chưa có đánh giá</p>
                </div>
                <div className="form__main">
                  <div className="form__main__title">
                    <h2>Để lại nhận xét của bạn !</h2>
                  </div>
                  <div className="form__main__like">
                    <p>Đánh giá của bạn</p>
                    <i className="bx bxs-star"></i>
                  </div>
                  <form className="form__main__content">
                    <div className="form__main__content__comment">
                      <label htmlFor="description__textarea">
                        Nhận xét của bạn :
                      </label>
                      <textarea id="description__textarea"></textarea>
                    </div>
                    <div className="form__main__content__list">
                      <div className="form__main__content__list__item">
                        <label htmlFor="description__name">Tên :</label>
                        <input id="description__name" type="text" />
                      </div>
                      <div className="form__main__content__list__item">
                        <label htmlFor="description__email">Email :</label>
                        <input id="description__email" type="email" />
                      </div>
                    </div>
                    <div className="form__main__content__list">
                      <Button>Gửi đi</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section>
        <SectionTitle>ĐỀ XUẤT CHO BẠN</SectionTitle>
        <SectionBanner dataAos="zoom-in" delayAos="200" />
      </Section>
      <Footer />
    </Helmet>
  );
};

export default CataLog;
