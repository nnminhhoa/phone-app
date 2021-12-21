import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import productData from "../assets/data/products";
import Button from "../components/Button";
import CartItems from "../components/CartItems";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);

  const [cartProducts, setCartProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [activeCart, setActiveCart] = useState(false);

  useEffect(() => {
    setCartProducts(productData.getCartItemsDetail(cartItems));
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );

    if (cartItems.length > 0) {
      setActiveCart(true);
    } else if (cartItems.length === 0) {
      setActiveCart(false);
    }
  }, [cartItems]);

  return (
    <div className="container">
      <div className={`cart ${activeCart ? "" : "cart__no-active"}`}>
        <div className="cart__main">
          <table className="cart__main__title">
            <thead>
              <tr>
                <th className="cart__main__title__name" colSpan="3">
                  Sản phẩm
                </th>
                <th className="cart__main__title__name">Giá</th>
                <th className="cart__main__title__name">Số lượng</th>
                <th className="cart__main__title__name">Tổng</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((item, index) => (
                <CartItems item={item} key={index}/>
              ))}
            </tbody>
            <tbody>
              <tr>
                <td colSpan="6" className="cart__continue-shopping">
                  <Link to="/product">
                    <Button size="md">
                      <i className="bx bx-arrow-back"></i>Tiếp tục mua hàng
                    </Button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="cart__content">
          <table className="cart__content__title">
            <thead>
              <tr>
                <th colSpan="2">Tổng số lượng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="cart__content__total">
                  Tổng <b>{totalProducts}</b> đơn hàng
                </td>
                <td className="cart__content__total-price">
                  <span>$ {totalPrice}</span>
                </td>
              </tr>
              <tr className="cart__content__shipping">
                <th>Giao hàng</th>
                <td>
                  <div className="cart__content__shipping__form">
                    <p>Giao hàng miễn phí</p>
                    <p>
                      Ước tính cho <b>Việt Nam</b>
                    </p>
                    <p>Đổi địa chỉ</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="cart__content__total">Tổng </td>
                <td className="cart__content__total-price">
                  <span>$ {totalPrice}</span>
                </td>
              </tr>
              <tr>
                <td className="widget-title" colSpan="2">
                  <div>
                    <i className="bx bxs-purchase-tag-alt"></i>
                    <span>Phiếu ưu đãi</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="widget-input" colSpan="2">
                  <input type="text" placeholder="Nhập mã ..." />
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="widget-btn">
                  <button>Áp dụng</button>
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="btn-payment">
                  <Button>Thanh toán</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={`cart__empty ${activeCart ? "cart__no-active" : ""}`}>
        <div className="cart__empty__content">
          <div className="cart__empty__content__title">
            <h2>Chưa có sản phẩm trong giỏ hàng !</h2>
          </div>
          <div className="cart__empty__content__link">
            <Link to="/product">
              <Button>Quay trở lại cửa hàng</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
