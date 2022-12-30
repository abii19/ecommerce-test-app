import { useSelector, useDispatch } from "react-redux";
import Blogs from "./Blogs";
import FAQ from "./FAQ";
import HeroSection from "./HeroSection";
import {
  increment,
  decrement,
  incrementByValue
} from "../../../features/counter/counterAction";
import { useState } from "react";

// {datas: []}

const HomePage = (props) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(incrementByValue(+value));
  };

  return (
    <>
      <div className="container">
        <div className="text-5xl font-bold pb-4">{counter.counter}</div>
        <div className="flex gap-x-4">
          <button
            className="p-4 rounded bg-blue-500 text-white"
            onClick={() => dispatch(increment())}
          >
            Add
          </button>
          <button
            className="p-4 rounded bg-red-700 text-white"
            onClick={() => dispatch(decrement())}
          >
            Decrease
          </button>
          <div className="flex gap-x-3">
            <form onSubmit={handleSubmit}>
              <input type="number" onChange={(e) => setValue(e.target.value)} />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <HeroSection />
      <FAQ />
      <Blogs datas={props.datas} />
    </>
  );
};

export default HomePage;
