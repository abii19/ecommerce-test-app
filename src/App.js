import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import BlogsPage from "./components/pages/blogs";
import HomePage from "./components/pages/home";
import ShopPage from "./components/pages/shop";
import axios from "axios";

const App = () => {
  const [datas, setDatas] = useState([]);
  const [id, setId] = useState(1);

  const fetchData = async () => {
    try {
      const data = await axios.get(`http://localhost:5000/blogs`);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  fetchData();

  const result = async () =>
    await axios
      .get(`http://localhost:5000/blogs`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  result();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage datas={datas} />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            path="/blogs"
            element={
              <BlogsPage
                datas={datas}
                setDatas={setDatas}
                id={id}
                setId={setId}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
