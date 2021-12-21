import React from "react";
import BlogData from "../assets/data/blogs";
import dataTrend from "../assets/data/dataBanner";
import BlogsTrend from "../components/BlogsTrend";
import ContentTrend from "../components/ContentTrend";
import Grid from "../components/Grid";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import Section, {
  SectionAbout,
  SectionBanner,
  SectionTitle,
} from "../components/Section";

const Home = () => {
  return (
    <Helmet title="Trang chủ">
      <HeroSlider />
      <div className="container">
        <div className="trend__list">
          {dataTrend.getAllTrend().map((item, index) => (
            <ContentTrend
              key={index}
              title={item.title}
              name={item.name}
              img={item.img}
            />
          ))}
        </div>
      </div>
      <Section>
        <SectionTitle>ĐỀ XUẤT CHO BẠN</SectionTitle>
        <SectionBanner dataAos="zoom-in" delayAos="200" />
      </Section>
      <div className="container">
        <div className="trend__list">
          {dataTrend.getAllBanner().map((item, index) => (
            <ContentTrend
              key={index}
              title={item.title}
              name={item.name}
              img={item.img}
            />
          ))}
        </div>
      </div>
      <Section>
        <SectionTitle>Flash Sale</SectionTitle>
        <SectionBanner sliderGap={true} dataAos="zoom-in-down" delayAos="300" />
      </Section>
      <Section>
        <SectionTitle>Sản phẩm mới nhất</SectionTitle>
        <SectionBanner sliderGap={true} dataAos="zoom-in-up" delayAos="500" />
      </Section>
      <Section>
        <SectionTitle>Sản phẩm bán chạy</SectionTitle>
        <SectionBanner sliderGap={true} dataAos="zoom-in" delayAos="600" />
      </Section>

      <SectionTitle>Tin tức cập nhật</SectionTitle>
      <div className="container">
        <div className="blog__main">
          <Grid col={3} mdCol={3} smCol={1} gap={30}>
            {BlogData.getBlogs(3).map((item, index) => (
              <BlogsTrend
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </Grid>
        </div>
      </div>
      <SectionAbout updateQ={3400} />
    </Helmet>
  );
};

export default Home;
