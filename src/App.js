import { Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import HomePage from "./components/pages/home";
import ShopPage from "./components/pages/shop";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
