const product_image_01 = require("../images/product-04.png").default;
const product_image_02 = require("../images/product-02.png").default;
const product_image_03 = require("../images/product-03.png").default;
const product_image_04 = require("../images/product-04.png").default;
const product_image_05 = require("../images/product-05.png").default;
const product_image_06 = require("../images/product-04.png").default;
const product_image_07 = require("../images/product-02.png").default;
const product_image_08 = require("../images/product-03.png").default;
const product_image_09 = require("../images/product-04.png").default;
const product_image_10 = require("../images/product-05.png").default;

const products = [
  {
    title: "Classico 1",
    price: "199",
    image: [product_image_01, product_image_02],
    sale: "20%",
    categorySlug: "dong-ho-nu",
    slug: "dong-ho-classico-1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
  },
  {
    title: "Classico 2",
    price: "200",
    sale: "29%",
    categorySlug: "dong-ho-nam",
    slug: "dong-ho-classico-2",
    image: [product_image_02, product_image_03],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
  },
  {
    title: "Classico 3",
    price: "299",
    categorySlug: "dong-ho-nam",
    slug: "dong-ho-classico-3",
    image: [product_image_03, product_image_04],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
  },
  {
    title: "Classico 4",
    price: "99",
    categorySlug: "dong-ho-nam",
    slug: "dong-ho-classico-4",
    image: [product_image_04, product_image_05],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
  },
  {
    title: "Classico 5",
    price: "399",
    categorySlug: "dong-ho-nam",
    slug: "dong-ho-classico-5",
    image: [product_image_05, product_image_06],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
  },
  {
    title: "Classico 6",
    price: "299",
    sale: "20%",
    categorySlug: "dong-ho-nu",
    slug: "dong-ho-classico-6",
    image: [product_image_06, product_image_07],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
  },
  {
    title: "Classico 7",
    price: "400",
    categorySlug: "dong-ho-new",
    slug: "dong-ho-classico-7",
    image: [product_image_07, product_image_08],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
  },
  {
    title: "Classico 8",
    price: "499",
    categorySlug: "dong-ho-nam",
    slug: "dong-ho-classico-8",
    image: [product_image_08, product_image_09],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
  },
  {
    title: "Classico 9",
    price: "399",
    categorySlug: "dong-ho-new",
    slug: "dong-ho-classico-9",
    image: [product_image_09, product_image_10],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
  },
  {
    title: "Classico 10",
    price: "199",
    sale: "10%",
    categorySlug: "dong-ho-nu",
    slug: "dong-ho-classico-10",
    image: [product_image_10, product_image_01],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
  },
  {
    title: "Classico 11",
    price: "199",
    categorySlug: "dong-ho-nu",
    slug: "dong-ho-classico-11",
    image: [product_image_01, product_image_02],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
    sale: "20%",
  },
  {
    title: "Classico 12",
    price: "200",
    sale: "29%",
    slug: "dong-ho-classico-12",
    categorySlug: "dong-ho-nu",
    image: [product_image_02, product_image_03],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
  },
  {
    title: "Classico 13",
    price: "299",
    categorySlug: "dong-ho-nam",
    slug: "dong-ho-classico-13",
    image: [product_image_03, product_image_04],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
  },
  {
    title: "Classico 14",
    price: "99",
    slug: "dong-ho-classico-14",
    categorySlug: "dong-ho-new",
    image: [product_image_04, product_image_05],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
  },
  {
    title: "Classico 15",
    price: "399",
    slug: "dong-ho-classico-15",
    categorySlug: "dong-ho-nu",
    image: [product_image_05, product_image_06],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
  },
];

const getAllProducts = () => products;

const getProducts = (count) => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};

const getProductBySlug = (slug) => products.find((e) => e.slug === slug);

const getCartItemsDetail = (cartItems) => {
  let res = [];
  if (cartItems.length > 0) {
    cartItems.forEach((e) => {
      res.push({
        ...e,
        product: getProductBySlug(e.slug),
      });
    });
  }
  return res;
};

const getLikeItemsDetail = (likeItems) => {
  let res = [];
  if (likeItems.length > 0) {
    likeItems.forEach((e) => {
      res.push({
        ...e,
        product: getProductBySlug(e.slug),
      });
    });
  }
  return res;
};

const productData = {
  getAllProducts,
  getProducts,
  getProductBySlug,
  getCartItemsDetail,
  getLikeItemsDetail,
};
export default productData;
