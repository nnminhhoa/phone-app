import React, { lazy } from "react";
import { Route, Routes } from "react-router";

const Home = lazy(() => import("../pages/Home"));
const Cart = lazy(() => import("../pages/Cart"));
const BlogContent = lazy(() => import("../components/BlogContent"));
const CataLog = lazy(() => import("../components/CataLog"));
const Product = lazy(() => import("../pages/Product"));
const Contact = lazy(() => import("../pages/Contact"));
const Blogs = lazy(() => import("../pages/Blogs"));
const Introduce = lazy(() => import("../pages/Introduce"));
const WishList = lazy(() => import("../components/WishList"));

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/wish-list" element={<WishList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/introduce" element={<Introduce />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:slug" element={<CataLog />} />
      <Route path="/blogs/:slug" element={<BlogContent />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
