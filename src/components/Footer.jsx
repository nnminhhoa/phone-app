import React, { useEffect, useState } from "react";
import Grid from "./Grid";
import { Link } from "react-router-dom";
import image1 from "../assets/images/img-googleplay.jpg";
import image2 from "../assets/images/img-appstore.jpg";
import imagepay from "../assets/images/img-payment.png";

const footerAbout = [
  {
    display: "Giới thiệu",
    path: "/introduce",
  },
  {
    display: "Sản phẩm",
    path: "/product",
  },
  {
    display: "Blogs",
    path: "/blogs",
  },
  {
    display: "Hỏi đáp",
    path: "/feedback",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
];

const footerCustomer = [
  {
    display: "Hướng dẫn mua hàng",
    path: "/feedback",
  },
  {
    display: "Hướng dẫn thanh toán",
    path: "/feedback",
  },
  {
    display: "Chính sách bảo hành",
    path: "/feedback",
  },
  {
    display: "Chính sách đổi trả",
    path: "/feedback",
  },
  {
    display: "Tư vấn khách hàng",
    path: "/feedback",
  },
];

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const scrollOn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);
  return (
    <footer className="footer">
      <div
        className={`icon__on__top ${visible ? "active__on__top" : ""}`}
        onClick={scrollOn}
      >
        <i className="bx bx-chevron-up"></i>
      </div>
      <div className="container">
        <div className="footer__email">
          <div className="footer__email__title">
            <h2>Đăng ký nhận thông tin </h2>
          </div>
          <div className="footer__email__input">
            <input type="email" placeholder="Email..." />
            <button>Đăng ký</button>
          </div>
        </div>
      </div>
      <div className="footer__main">
        <div className="container">
          <Grid col={4} mdCol={3} smCol={1} gap={30}>
            <div className="footer__main__item">
              <div className="footer__main__title">Thông tin liên hệ</div>
              <div className="footer__main__content">
                <div className="footer__main__content__item">
                  <i className="bx bxs-edit-location"></i>
                  <p>Tòa nhà VP6, KĐT Linh đàm, quận Hoàng mai, TP Hà nội</p>
                </div>
                <div className="footer__main__content__item">
                  <i className="bx bx-phone-call"></i>
                  <p>032 662 0613</p>
                </div>
                <div className="footer__main__content__item">
                  <i className="bx bx-mail-send"></i>
                  <p>nnminhhoa2711@gmail.com</p>
                </div>
                <div className="footer__main__content__item">
                  <i className="bx bxl-facebook-circle"></i>
                  <Link to="https://www.facebook.com/troi.mat.14811692/">
                    https://www.facebook.com/troi.mat.14811692/
                  </Link>
                </div>
                <div className="footer__main__content__item">
                  <div className="footer__main__content__item__icon">
                    <i className="bx bxl-facebook-circle"></i>
                  </div>
                  <div className="footer__main__content__item__icon">
                    <i className="bx bxl-instagram"></i>
                  </div>
                  <div className="footer__main__content__item__icon">
                    <i className="bx bxl-twitter"></i>
                  </div>
                  <div className="footer__main__content__item__icon">
                    <i className="bx bx-wifi"></i>
                  </div>
                  <div className="footer__main__content__item__icon">
                    <i className="bx bxl-linkedin"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__main__item">
              <div className="footer__main__title">Liên kết</div>
              <div className="footer__main__content">
                {footerAbout.map((item, index) => (
                  <div key={index} className="footer__main__content__item">
                    <Link to={item.path}>{item.display}</Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="footer__main__item">
              <div className="footer__main__title">Hỗ trợ</div>
              <div className="footer__main__content">
                {footerCustomer.map((item, index) => (
                  <div key={index} className="footer__main__content__item">
                    <Link to={item.path}>{item.display}</Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="footer__main__item">
              <div className="footer__main__title">Tải ứng dụng trên</div>
              <div className="footer__main__content">
                <div className="footer__main__content__item">
                  <p>
                    Ứng dụng Mona Watch hiện có sẵn trên Google Play & App
                    Store. Tải nó ngay.
                  </p>
                </div>
                <div className="footer__main__content__item">
                  <Link to="/">
                    <img src={image1} alt="" />
                  </Link>
                </div>
                <div className="footer__main__content__item">
                  <Link to="/">
                    <img src={image2} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom__content">
            <p>© Bản quyền thuộc về công ty thiết kế Website...</p>
            <div className="footer__bottom__content__pay">
              <img src={imagepay} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
