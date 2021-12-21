import React from "react";
import Grid from "../components/Grid";
import Helmet from "../components/Helmet";
import Iframe from "../components/Iframe";

const Contact = () => {
  return (
    <Helmet title="Liên hệ">
      <div className="container">
        <div className="contact">
          <div className="contact__map">
            <Iframe iframe='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.6394345397694!2d105.8311943142968!3d20.96699019526151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac555927a9bb%3A0xbdfe41608e605ec8!2zQ2h1bmcgY8awIFZQNiBMaW5oIMSQw6Bt!5e0!3m2!1svi!2s!4v1639136982707!5m2!1svi!2s" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>' />
          </div>

          <div className="contact__info">
            <Grid col={3} mdCol={3} smCol={1} gap={20}>
              <div className="contact__info__item">
                <i className="bx bxs-edit-location"></i>
                <div className="contact__info__item__content">
                  <h2>Địa chỉ:</h2>
                  <p>Tòa nhà VP6, KĐT Linh đàm, quận Hoàng mai, TP Hà nội</p>
                </div>
              </div>
              <div className="contact__info__item">
                <i className="bx bx-phone-incoming"></i>
                <div className="contact__info__item__content">
                  <h2>Điện thoại:</h2>
                  <b>1900 636 555</b>
                  <p>Bấm 109 - Phòng kinh doanh</p>
                  <p>Bấm 103 - Phòng kinh doanh</p>
                </div>
              </div>
              <div className="contact__info__item">
                <i className="bx bx-mail-send"></i>
                <div className="contact__info__item__content">
                  <h2>Email:</h2>
                  <p>nnminhhoa2711@gmail.com</p>
                  <p>mona@mona.media.com</p>
                </div>
              </div>
            </Grid>
          </div>

          <div className="contact__form">
            <form action="">
              <Grid col={2} mdCol={2} smCol={2} gap={10}>
                <div className="contact__form__item">
                  <input type="text" placeholder="Họ và tên" />
                </div>
                <div className="contact__form__item">
                  <input type="text" placeholder="Email" />
                </div>
              </Grid>
              <Grid col={2} mdCol={2} smCol={2} gap={10}>
                <div className="contact__form__item">
                  <input type="tel" placeholder="Số điện thoại" />
                </div>
                <div className="contact__form__item">
                  <input type="text" placeholder="Địa chỉ" />
                </div>
              </Grid>
              <Grid col={1} mdCol={1} smCol={1}>
                <div className="contact__form__textarea">
                  <textarea placeholder="Lời nhắn..."></textarea>
                </div>
              </Grid>
              <div className="contact__form__btn">
                <button type="submit">Gửi</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Contact;
