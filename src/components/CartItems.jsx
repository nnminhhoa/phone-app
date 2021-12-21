import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateItem, removeItem } from "../redux/shopping-cart/cartItem";

const CartItems = (props) => {
  const [item, setItem] = useState(props.item);
  const [quantity, setQuantity] = useState(props.item.quantity);
  const dispatch = useDispatch();

  const handleQuantity = (type) => {
    if (type === "minus") {
      dispatch(
        updateItem({
          ...item,
          quantity: quantity - 1 === 0 ? 1 : quantity - 1,
        })
      );
    }
    if (type === "plus") {
      dispatch(
        updateItem({
          ...item,
          quantity: quantity + 1,
        })
      );
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(item));
  };

  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);
  return (
    <tr className="cart__main__product">
      <td className="item__remove" onClick={() => handleRemoveItem()}>
        <i className="bx bx-x"></i>
      </td>
      <td className="item__image">
        <img src={item.product.image[0]} alt={item.product.title} />
      </td>
      <td className="item__name">
        <p>{item.product.title}</p>
      </td>
      <td className="item__price">
        <span>$ {item.price}</span>
      </td>
      <td className="item__quantity">
        <div className="item__quantity__form">
          <div
            className="item__quantity__form__btn"
            onClick={() => handleQuantity("minus")}
          >
            <i className="bx bx-minus"></i>
          </div>
          <div className="item__quantity__form__input">
            <span>{quantity}</span>
          </div>
          <div
            className="item__quantity__form__btn"
            onClick={() => handleQuantity("plus")}
          >
            <i className="bx bx-plus"></i>
          </div>
        </div>
      </td>
      <td className="item__total">
        <span>$ {quantity * item.price}</span>
      </td>
    </tr>
  );
};

CartItems.prototype = {
  item: PropTypes.object,
};

export default CartItems;
