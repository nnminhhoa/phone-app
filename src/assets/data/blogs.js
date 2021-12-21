const imgBlog1 = require("../images/trend-1.jpg").default;
const imgBlog2 = require("../images/trend-2.jpg").default;
const imgBlog3 = require("../images/about-us_bg.jpg").default;
const imgBlog4 = require("../images/banner-03.jpg").default;
const imgBlog5 = require("../images/banner-04.jpg").default;

const blogs = [
  {
    title: "Chiếc đồng hồ của những CEO quyền lực nhất thế giới",
    description:
      "Đối với một số doanh nhân, một chiếc đồng hồ đeo tay không chỉ là thiết bị xem giờ. Thực tế, nó là một thông điệp. “Chiếc đồng hồ chính là “mũi nhọn” của con tàu phá băng. Tại một thành phố xa lạ, tôi hoàn toàn có thể phá vỡ mọi rào cản khi gặp gỡ bất kỳ ai bằng cụm từ duy nhất – đồng hồ đẹp”, Hamilton Powell, CEO Crown & Caliber, công ty cung cấp thị trường online cho việc mua bán đồng hồ cao cấp cho biết. “Một chiếc đồng hồ nói cho người khác biết bạn là tuýp người như thế nào và giá trị của bạn ra sao”.",
    image: imgBlog1,
    slug: "chiec-dong-ho-cua-nhung-CEO-quyen-luc-nhat-the-gioi",
  },
  {
    title: "12 chiếc đồng hồ dành cho nữ giới đắt giá nhất mọi thời đại",
    description:
      "Công nghiệp sản xuất đồng hồ sang trọng có dấu hiệu chững lại trong hai năm gần đây do nhu cầu giảm. Tuy nhiên, có một điểm sáng đó chính là dòng sản phẩm dành cho nữ giới vẫn duy trì được giá trị qua mọi giai đoạn.",
    image: imgBlog2,
    slug: "12-chiec-dong-ho-danh-cho-nu-gioi-dat-gia-nhat-moi-thoi-dai",
  },
  {
    title:
      "10 thương hiệu đồng hồ cao cấp hàng đầu mọi quý ông đều quan tâm, Rolex xếp hạng số 3",
    description:
      "Bên cạnh những Cartier, IWC và Jaeger-LeCoultre, có nhiều chiếc đồng hồ thuộc các thương hiệu “độc-lạ” khác được chú ý. Oscar là giải thưởng danh giá của Viện hàn lâm dành cho những bộ phim tuyệt vời nhất trong năm qua. Và để kỷ niệm cho khoảnh khắc một lần trong đời, chẳng cớ gì lại không diện lên những bộ đồ nổi bật nhất. Điểm nhấn trong trang phục của các diễn viên nam chính là món phụ kiện quen thuộc: đồng hồ.",
    image: imgBlog3,
    slug: "10-thuong-hieu-dong-ho-cao-cap-hang-dau-moi-quy-ong-deu-quan-tam",
  },
  {
    title:
      "6 chiếc đồng hồ ấn tượng tại Oscar 2019: Từ những thương hiệu đình đám với cái giá “cắt cổ”",
    description:
      "Có tin Casio dự định trình làng smartwatch G-Shock trong vòng 2 năm tới. Chắc hẳn chúng ta không ai là xa lạ với thương hiệu đồng hồ điện tử G-Shock tới từ Casio nữa. Và trong kỷ nguyên số hóa hiện tại, có vẻ như Casio quyết định sẽ tung ra một chiếc smartwatch dưới thương hiệu G-Shock trong tương lai, tích hợp nhiều tính năng thông minh. Cụ thể, các nguồn tin từ thị trường Nhật Bản đã cho biết, chiếc smartwatch thương hiệu G-Shock sẽ được Casio trình làng vào năm 2021, đi kèm nhiều tính năng thông minh tương tự với các thiết bị Apple Watch, ngoài ra chiếc đồng hồ này cũng sẽ tích hợp sẵn các cảm biến đo nhịp tim hay GPS giúp thiết bị có khả năng theo dõi sức khỏe của người dùng. Casio cũng công bố một bản tài liệu cho thấy có khả năng các thiết bị đồng hồ thông minh của G-Shock sẽ có tên riêng là G-Smart, cùng với nhiều tính năng fitness khác.",
    image: imgBlog4,
    slug: "6-chiec-dong-ho-an-tuong-tai-Oscar-2019",
  },
  {
    title:
      "Casio sẽ ra mắt đồng hồ thông minh thương hiệu G-Shock để cạnh tranh với Apple Watch?",
    description:
      "G-Shock là một trong những thương hiệu đồng hồ điện tử với bề dày lịch sử 35 năm, với hàng loạt những chiếc đồng hồ đình đám cũng như có chất lượng cực kỳ tốt so với giá thành mà người dùng phải bỏ ra. Với kỷ nguyên số hóa hiện nay, cũng sẽ không có gì quá ngạc nhiên nếu G-Shock đang phát triển một mẫu smartwatch cho riêng mình. Vấn đề chỉ còn nằm ở chỗ liệu Casio sẽ có kế hoạch gì để có thể thu hút người dùng, cũng như cạnh tranh với các đối thủ khác, đặc biệt là Apple Watch khi mới bước chân vào thị trường thiết bị đeo thông minh.",
    image: imgBlog5,
    slug: "casio-se-ra-mat-dong-ho-thong-minh-thuong-hieu-G-shock",
  },
];

const getAllBlogs = () => blogs;

const getBlogs = (count) => {
  const max = blogs.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return blogs.slice(start, start + count);
};
const getBlogbySlug = (slug) => blogs.find((e) => e.slug === slug);

const BlogData = {
  getBlogs,
  getAllBlogs,
  getBlogbySlug,
};

export default BlogData;
