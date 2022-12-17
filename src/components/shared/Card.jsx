import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import * as Icons from "../../assets/icons";
import { getTimeAgo, toLocaleTimeString } from "../../utiils";

export const Card = (props) => {
  const { src, title, subTitle, timeStamp, link, type = "item" } = props;
  const navigate = useNavigate();

  return (
    <div>
      <img src={src} alt="" className="" />
      <div>{title}</div>
      {subTitle && <p>{subTitle}</p>}
      <Button title="View more" onClick={() => navigate(`${link}`)} />
      {type === "blog" && <p>{timeStamp}</p>}
    </div>
  );
};

export const BlogsCard = (props) => {
  const { img, title, created_at, link } = props;
  return (
    <>
      <div className="">
        <img
          src={img}
          alt=""
          className="w-full object-cover max-h-[400px] rounded-lg"
        />
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="text-base-lg text-black">{title}</div>
          <Link
            to={link}
            className="text-heading4 pb-1 underlined-link after:bg-white"
          >
            Read More
          </Link>
          <div className="flex items-center gap-x-6">
            <div className="flex items-center gap-x-2">
              <Icons.ClockIcon /> <span>{getTimeAgo(created_at)}</span>
            </div>
            <div className="flex items-center gap-x-2">
              <Icons.CalendarIcon />{" "}
              <span>{toLocaleTimeString(created_at)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
