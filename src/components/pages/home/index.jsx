import Blogs from "./Blogs";
import FAQ from "./FAQ";
import HeroSection from "./HeroSection";

// {datas: []}

const HomePage = (props) => {
  return (
    <>
      <HeroSection />
      <FAQ />
      <Blogs datas={props.datas} />
    </>
  );
};

export default HomePage;
