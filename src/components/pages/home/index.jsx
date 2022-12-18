import Blogs from "./Blogs";
import HeroSection from "./HeroSection";

// {datas: []}

const HomePage = (props) => {
  return (
    <>
      <HeroSection />
      <Blogs datas={props.datas} />
    </>
  );
};

export default HomePage;
