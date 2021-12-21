const product_banner_01 = require("../images/trend-1.jpg").default;
const product_banner_02 = require("../images/trend-2.jpg").default;
const product_banner_03 = require("../images/banner-03.jpg").default;
const product_banner_04 = require("../images/banner-04.jpg").default;
const productTrend = [
  {
    title: "Hot trend",
    name: "Đồng hồ nam",
    img: product_banner_01,
  },
  {
    title: "Hot trend",
    name: "Đồng hồ nữ",
    img: product_banner_02,
  },
];

const productBanner = [
  {
    title: "Cổ điển",
    name: "Đồng hồ nam",
    img: product_banner_03,
  },
  {
    title: "Smart Watch",
    name: "Đồng hồ nữ",
    img: product_banner_04,
  },
];

const getAllTrend = () => productTrend;

const getAllBanner = () => productBanner;

const dataTrend = {
  getAllTrend,
  getAllBanner,
};
export default dataTrend;
