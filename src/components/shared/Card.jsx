import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const Card = (props) => {
  const { src, title, link } = props;
  const navigate = useNavigate();
  return (
    <div>
      <img src={src} alt="" className="" />
      <div>{title}</div>
      {/* <Link to={link}>View More</Link> */}
      <Button title="View more" onClick={() => navigate(`${link}`)} />
    </div>
  );
};
