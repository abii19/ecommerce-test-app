import { Link } from "react-router-dom";
import * as Images from "../../../assets/images";

const HeroSection = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center pt-20 md:pt-0">
            <div className="z-10 md:w-2/5">
              <h1 className="text-heading1 mb-8">
                Rocket single
                <br />
                seater
              </h1>
              <Link
                to="/shop"
                className="text-heading4 pb-3 underlined-link after:bg-primary"
              >
                Shop Now
              </Link>
            </div>
            <div className="md:w-3/5 transform -translate-y-20 md:transform-none">
              <img
                src={Images.HeroChairImg}
                alt=""
                className="max-h-[896px] float-right"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
