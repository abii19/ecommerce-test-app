import { Button, Card } from "../../shared";
import * as Images from "../../../assets/images";

const HomePage = () => {
  //Logics

  return (
    <>
      <h1>This is a Home Page</h1>
      <Button title="View More" onClick={() => alert("View More")} />
      <Button title="Vie" onClick={() => alert("View")} size="small" />
      <div className="grid grid-cols-4 gap-4">
        <Card src={Images.Chair1Img} title="Chair 1" link="/shop" />
        <Card src={Images.Chair1Img} title="Chair 2" link="/shop/1" />
        <Card src={Images.Chair1Img} title="Chair 3" link="/shop" />
        <Card src={Images.Chair1Img} title="Chair 4" link="/shop" />
      </div>
    </>
  );
};

export default HomePage;
