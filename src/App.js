import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import BlogsPage from "./components/pages/blogs";
import HomePage from "./components/pages/home";
import ShopPage from "./components/pages/shop";

const App = () => {
  const [datas, setDatas] = useState([]);
  const [id, setId] = useState(1);

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
