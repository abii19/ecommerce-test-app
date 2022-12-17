import React from "react";
import { BlogsCard } from "../../shared";
import * as Images from "../../../assets/images";

const Blogs = () => {
  return (
    <>
      <section className="py-20">
        <div className="container">
          <h3 className="text-heading3 text-center mb-2">Our Blogs</h3>
          <p className="text-base text-center text-dark-light mb-14">
            Find a bright ideal to suit your taste with our great selection
          </p>
          {/* Blogs Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogsCard
              img={Images.Blog1Img}
              title="Going all-in with millennial design"
              created_at={1669890923}
            />
            <BlogsCard
              img={Images.Blog2Img}
              title="Going all-in with millennial design"
              created_at={1669890923}
            />
            <BlogsCard
              img={Images.Blog3Img}
              title="Going all-in with millennial design"
              created_at="1669890923"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
