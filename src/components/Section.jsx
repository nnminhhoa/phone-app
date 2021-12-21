import React, { useEffect, useRef, useState, memo } from "react";
import Slider from "react-slick";
import productData from "../assets/data/products";
import ProductCard from "./ProductCard";
import Aos from "aos";
import PropTypes from "prop-types";
import imageBanner from "../assets/images/banner-portfolio.jpg";
import Grid from "./Grid";

const Section = (props) => {
  return <div className="section">{props.children}</div>;
};
export const SectionTitle = (props) => {
  return (
    <div className="section__title">
      <p>{props.children}</p>
    </div>
  );
};

export const SectionAbout = (props) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [autoBanner, setAutoBanner] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", autoQuantity);
    return () => {
      window.removeEventListener("scroll", autoQuantity);
    };
  });

  const autoQuantity = () => {
    if (
      document.body.scrollTop > props.updateQ ||
      document.documentElement.scrollTop > props.updateQ
    ) {
      if (!autoBanner) {
        setAutoBanner(true);
      }
    }
  };

  useEffect(() => {
    const timeClear = setInterval(() => {
      if (autoBanner && count1 < 1280) {
        setCount1((prev) => prev + 80);
      } else {
        setCount1(count1);
      }

      if (autoBanner && count2 < 22) {
        setCount2((prev) => prev + 1);
      } else {
        setCount2(count2);
      }

      if (autoBanner && count3 < 4800) {
        setCount3((prev) => prev + 240);
      } else {
        setCount3(count3);
      }

      if (autoBanner && count4 < 30) {
        setCount4((prev) => prev + 3);
      } else {
        setCount4(count4);
      }
    }, 50);
    return () => {
      clearInterval(timeClear);
    };
  }, [count1, count2, count3, count4, autoBanner]);

  return (
    <div
      className="section__about"
      data-aos="fade-right"
      data-aos-once="true"
      data-aos-anchor-placement="left-center"
    >
      <div className="section__about__main">
        <img src={imageBanner} alt="" />
        <div className="section__about__main__content container">
          <Grid col={4} mdCol={4} smCol={2} gap={30}>
            <div className="section__about__main__content__item">
              <h2>{count1}</h2>
              <p>Sản phẩm</p>
            </div>
            <div className="section__about__main__content__item">
              <h2>{count2}</h2>
              <p>Giải thưởng</p>
            </div>
            <div className="section__about__main__content__item">
              <h2>{count3}</h2>
              <p>Khách hàng hài lòng</p>
            </div>
            <div className="section__about__main__content__item">
              <h2>{count4}</h2>
              <p>Chi nhánh cửa hàng</p>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
};

SectionAbout.prototype = {
  updateQ: PropTypes.number.isRequired,
};
export const SectionBanner = memo(function SectionBanner(props) {
  const ref = useRef();
  const nextProductSlider = () => {
    ref.current.slickPrev();
  };
  const prevProductSlider = () => {
    ref.current.slickNext();
  };
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);
  const dataAos = props.dataAos ? props.dataAos : "";
  const delayAos = props.delayAos ? props.delayAos : "";

  const settings = {
    className: "section-outstanding__slider",
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 1,
        },
      },
    ],
  };
  return (
    <div className="section__body container">
      <div
        className="product__main"
        data-aos={dataAos}
        data-aos-once="true"
        data-aos-delay={delayAos}
      >
        <div className="product__main__button">
          <i className="bx bx-chevron-left" onClick={nextProductSlider}></i>
          <i className="bx bx-chevron-right" onClick={prevProductSlider}></i>
        </div>
        <Slider ref={ref} {...settings}>
          {productData.getProducts(8).map((item, index) => (
            <ProductCard
              sliderGap
              key={index}
              img={item.image[0]}
              name={item.title}
              price={item.price}
              sale={item.sale}
              slug={item.slug}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
});

SectionBanner.prototype = {
  dataAos: PropTypes.string,
  delayAos: PropTypes.string,
  sliderGap: PropTypes.bool,
};

export default Section;
