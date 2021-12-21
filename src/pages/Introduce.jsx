import React, { useEffect } from "react";
import Helmet from "../components/Helmet";
import imagebn from "../assets/images/about-us_bg.jpg";
import Grid from "../components/Grid";
import Aos from "aos";
import { SectionAbout } from "../components/Section";

const Introduce = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
    Aos.refresh();
  }, []);
  return (
    <Helmet title="Giới thiệu">
      <div className="container">
        <div className="introduce__banner">
          <Grid col={2} mdCol={2} smCol={1} gap={30}>
            <div
              className="introduce__banner__image"
              data-aos="fade-right"
              data-aos-once="true"
            >
              <img src={imagebn} alt="" />
            </div>
            <div className="introduce__banner__content">
              <div
                className="introduce__banner__content__list"
                data-aos="zoom-in-left"
                data-aos-once="true"
              >
                <h2>Giới thiệu về Watch Mona</h2>
                <p>
                  “Cùng với sự phát triển không ngừng của thời trang thế giới,
                  rất nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính
                  hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ… Một
                  chiếc đồng hồ nam cao cấp chính hãng khắc họa một giá trị đích
                  thực khi nói đến phụ kiện xa xỉ dành cho phái mạnh. Hiện nay,
                  đồng hồ là phụ kiện thời trang thiết yếu đối với những người
                  đàn ông hiện đại ngày nay. Trên cổ tay của những người đàn ông
                  thành đạt luôn dành vị trí cho một chiếc đồng hồ nam cao cấp.”
                </p>
              </div>
            </div>
          </Grid>
        </div>
        <div
          className="introduce__content"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-anchor-placement="right-center"
        >
          <Grid col={3} mdCol={2} smCol={1} gap={30}>
            <div className="introduce__content__item">
              <div className="introduce__content__item__icon">
                <i className="bx bx-check"></i>
              </div>
              <div className="introduce__content__item__text">
                <h2>Hàng chính hãng</h2>
                <p>
                  Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với
                  những người đàn ông hiện đại ngày nay
                </p>
              </div>
            </div>
            <div className="introduce__content__item">
              <div className="introduce__content__item__icon">
                <i className="bx bx-star"></i>
              </div>
              <div className="introduce__content__item__text">
                <h2>Sản phẩm mới 100%</h2>
                <p>
                  Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với
                  những người đàn ông hiện đại ngày nay
                </p>
              </div>
            </div>
            <div className="introduce__content__item">
              <div className="introduce__content__item__icon">
                <i className="bx bx-pin"></i>
              </div>
              <div className="introduce__content__item__text">
                <h2>Bảo hành 12 tháng</h2>
                <p>
                  Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với
                  những người đàn ông hiện đại ngày nay
                </p>
              </div>
            </div>
            <div className="introduce__content__item">
              <div className="introduce__content__item__icon">
                <i className="bx bx-reset"></i>
              </div>
              <div className="introduce__content__item__text">
                <h2>Đổi trả trong vòng 7 ngày</h2>
                <p>
                  Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với
                  những người đàn ông hiện đại ngày nay
                </p>
              </div>
            </div>
            <div className="introduce__content__item">
              <div className="introduce__content__item__icon">
                <i className="bx bx-timer"></i>
              </div>
              <div className="introduce__content__item__text">
                <h2>Miễn phí giao hàng</h2>
                <p>
                  Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với
                  những người đàn ông hiện đại ngày nay
                </p>
              </div>
            </div>
            <div className="introduce__content__item">
              <div className="introduce__content__item__icon">
                <i className="bx bx-dollar"></i>
              </div>
              <div className="introduce__content__item__text">
                <h2>Giá cả hợp lý</h2>
                <p>
                  Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với
                  những người đàn ông hiện đại ngày nay
                </p>
              </div>
            </div>
          </Grid>
        </div>
      </div>
      <SectionAbout updateQ={500} />
    </Helmet>
  );
};

export default Introduce;
