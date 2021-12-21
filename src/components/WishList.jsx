import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import productData from "../assets/data/products";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { removeLikeItem } from "../redux/product-wishlist/product-wishlist";
import { addItem } from "../redux/shopping-cart/cartItem";

const WishList = () => {
  const likeItems = useSelector((state) => state.productLikeItems.value);
  const [productLikeItems, setProductLikeItems] = useState([]);

  useEffect(() => {
    setProductLikeItems(productData.getLikeItemsDetail(likeItems));
  }, [likeItems]);
  const dispatch = useDispatch();
  const handleRemoveLikeItem = (item) => {
    dispatch(removeLikeItem(item));
  };

  const addToCart = (item) => {
    let newItem = {
      slug: item.slug,
      price: item.price,
      quantity: 1,
      sale: item.sale,
    };
    dispatch(addItem(newItem));
  };
  return (
    <div className="container">
      <div className="wish-list">
        <div className="wish-list__main">
          <table>
            <thead>
              <tr>
                <th colSpan="3">Sản phẩm</th>
                <th className="wish-list__main__price">Giá</th>
                <th>Tình trạng</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {productLikeItems.map((item, index) => (
                <tr key={index}>
                  <td
                    className="item__remove"
                    onClick={() => handleRemoveLikeItem(item)}
                  >
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
                  <td className="item__status">
                    <span>Còn hàng</span>
                  </td>
                  <td className="goto__cart">
                    <Button size="md" onClick={() => addToCart(item)}>
                      Add to cart
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WishList;
