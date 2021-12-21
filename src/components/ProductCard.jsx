import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/shopping-cart/cartItem";
import { addLikeItem } from "../redux/product-wishlist/product-wishlist";

const ProductCard = (props) => {
  const sale = props.sale ? `active__sale` : "";
  const dispatch = useDispatch();

  const { handleGotoCart, activeGotoCart } = props;

  const handleGoCart = () => {
    handleGotoCart();
  };
  const addToCart = () => {
    let newItem = {
      slug: props.slug,
      price: props.price,
      quantity: 1,
      sale: props.sale,
    };
    dispatch(addItem(newItem));
  };

  const addToWishList = () => {
    let newLikeItem = {
      slug: props.slug,
      price: props.price,
      sale: props.sale,
      quantity: 1,
    };
    dispatch(addLikeItem(newLikeItem));
  };
  return (
    <div
      className={`product__card ${props.sliderGap ? "slider__product" : ""}`}
    >
      <div className="product__card__like" onClick={() => addToWishList()}>
        <i className="bx bxs-heart"></i>
      </div>
      <div className={`product__card__sale ${sale}`}>
        <span>{props.sale}</span>
      </div>
      <Link to={`/product/${props.slug}`}>
        <div className="product__card__image">
          <img src={props.img} alt="" />
        </div>
        <h3 className="product__card__name">{props.name}</h3>
        <div className="product__card__price">${props.price}</div>
      </Link>
      <div
        className={`product__card__btn ${
          activeGotoCart === props.slug ? "active__goto-cart" : ""
        }`}
      >
        <Button
          size="sm"
          icon="bx bx-cart"
          animate={true}
          onClick={() => {
            addToCart();
            handleGoCart();
          }}
        >
          Chọn mua
        </Button>
      </div>
      <div
        className={`product__card__goto-cart ${
          activeGotoCart === props.slug ? "active__goto-cart" : ""
        }`}
      >
        <Link to="/cart">
          <span>Xem giỏ hàng</span>
          <i className="bx bx-right-arrow-alt"></i>
        </Link>
      </div>
    </div>
  );
};
ProductCard.prototype = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sale: PropTypes.string,
  sliderGap: PropTypes.bool,
  slug: PropTypes.string,
  handleGotoCart: PropTypes.func,
  activeGotoCart: PropTypes.string,
};

export default ProductCard;
