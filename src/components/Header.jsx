import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo-mona-2.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import productData from "../assets/data/products";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/shopping-cart/cartItem";

const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
  },
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
    display: "Liên hệ",
    path: "/contact",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const menuLeft = useRef(null);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const activeNav = mainNav.findIndex((e) => e.path === pathname);
  const menuToggle = () => menuLeft.current.classList.toggle("active");
  const menuClose = () => menuRef.current.classList.toggle("change");
  const headerFixed = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      headerRef.current.classList.add("header__toggle");
    } else {
      headerRef.current.classList.remove("header__toggle");
    }
  };

  const cartItems = useSelector((state) => state.cartItems.value);
  const likeItems = useSelector((state) => state.productLikeItems.value);

  const [totalProducts, setTotalProducts] = useState(0);
  const [totalProductLikes, setTotalProductLikes] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", headerFixed);
    setCartProducts(productData.getCartItemsDetail(cartItems));
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
    setTotalProductLikes(
      likeItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
    return () => {
      window.removeEventListener("scroll", headerFixed);
    };
  }, [cartItems, likeItems]);

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <header>
      <div className="header__wrapper">
        <div className="header__top container">
          <div className="header__top__left">
            <ul className="header__top__left__nav">
              <li>
                <i className="bx bx-home"></i>
                <span>Tòa nhà VP6 KĐT Linh Đàm, Hoàng mai, Tp Hà nội</span>
              </li>
              <li>
                <i className="bx bxs-phone"></i>
                <b>012 345 6789</b>
              </li>
            </ul>
          </div>
          <div className="header__top__right">
            <ul className="header__top__right__nav">
              <li>
                <i className="bx bxl-facebook"></i>
              </li>
              <li>
                <i className="bx bxl-instagram"></i>
              </li>
              <li>
                <i className="bx bxl-twitter"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="header__main container">
          <div
            className="header__main__menu"
            ref={menuRef}
            onClick={() => {
              menuToggle();
              menuClose();
            }}
            id="menubar"
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div className="header__main__logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="header__main__search">
            <input type="text" placeholder="Tìm kiếm sản phẩm ..." />
            <button>
              <i className="bx bx-search"></i>
            </button>
          </div>
          <div className="header__main__right">
            <ul className="header__main__right__list">
              <li className="header__main__right__list__wish-list">
                <Link to="/wish-list">
                  <i className="bx bxs-heart"></i>
                  <span>{totalProductLikes}</span>
                </Link>
              </li>
              <li className="header__main__right__list__cart">
                <Link to="/cart">
                  <span className="custom__shop">
                    {totalProducts}
                    <span></span>
                  </span>
                </Link>
                <div className="nav-cart">
                  <ul>
                    {cartProducts.map((item, index) => (
                      <li key={index}>
                        <div className="nav-cart__item">
                          <div className="nav-cart__item__image">
                            <Link to={`/product/${item.slug}`}>
                              <img
                                src={item.product.image[0]}
                                alt={item.product.title}
                              />
                            </Link>
                          </div>
                          <div className="nav-cart__item__content">
                            <Link to={`/product/${item.slug}`}>
                              <p>{item.product.title}</p>
                            </Link>
                            <div className="nav-cart__item__content__price">
                              $ {item.price}
                              <span> x {item.quantity}</span>
                            </div>
                          </div>
                          <div
                            className="nav-cart__item__remove"
                            onClick={() => handleRemoveItem(item)}
                          >
                            <i className="bx bx-x"></i>
                          </div>
                        </div>
                      </li>
                    ))}
                    <li>
                      <div className="nav-cart__item__btn">
                        <Link to="/cart">
                          <Button size="md">Xem giỏ hàng</Button>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="header__bottom container" ref={headerRef}>
          <div className="header__bottom__nav" ref={menuLeft}>
            <ul>
              {mainNav.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`${index === activeNav ? "active" : ""}`}
                    onClick={() => {
                      menuToggle();
                      menuClose();
                    }}
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
