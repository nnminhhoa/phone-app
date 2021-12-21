import React, { useRef, useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import images1 from "../assets/images/slide-bg-1.jpg";
import images2 from "../assets/images/slide-bg-2.jpg";

const HeroSlider = () => {
  const ref = useRef();
  const [activeSlider, setActiveSlider] = useState(false);

  useLayoutEffect(() => {
    setActiveSlider(true);
  }, []);

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
    autoplay: true,
    autoplaySpeed: 3000,
    rows: 1,
    dots: true,
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
    <div className="slider__main">
      <Slider ref={ref} {...settings}>
        <div className="slider__main__content">
          <div
            className={`slider__main__content__text ${
              activeSlider ? "active__slider__text" : ""
            }`}
          >
            <h4>Mona Watch</h4>
            <h1>Đồng hồ Classico</h1>
            <p>
              Cùng với sự phát triển không ngừng của thời trang thế giới, rất
              nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa
              dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…
            </p>
            <button>
              <Link to="/product">Xem sản phẩm</Link>
            </button>
          </div>
          <img src={images1} alt="banner1" />
        </div>
        <div className="slider__main__content">
          <div className="slider__main__content__text">
            <h4>Mona Watch</h4>
            <h1>Đồng hồ Classico</h1>
            <p>
              Cùng với sự phát triển không ngừng của thời trang thế giới, rất
              nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa
              dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…
            </p>
            <button>
              <Link to="/product">Xem sản phẩm</Link>
            </button>
          </div>
          <img src={images2} alt="banner2" />
        </div>
      </Slider>

      <div className="slider__button">
        <div className="slider__button__left" onClick={nextSlider}>
          <i className="bx bxs-chevron-left"></i>
        </div>
        <div className="slider__button__right" onClick={prevSlider}>
          <i className="bx bxs-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
