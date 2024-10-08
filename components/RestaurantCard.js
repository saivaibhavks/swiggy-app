import "./RestaurantCard.css";
import { Link } from "react-router-dom";

const RestaurantCard = ({ data }) => {
  const imgId = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.cloudinaryImageId}`;
  return (
    <div className="card">
      <Link to={`/restaurant/${data.id}`}>
        <div>
          <img src={imgId} alt="rest-img" />
        </div>
        <div className="content">
          <div className="name">{data.name}</div>
          <div className="data">
            <div className="rating">{data.avgRating} ⭐</div>
            <div className="time">{data.sla.slaString}⌚</div>
          </div>
          <div className="cuisine">{data.cuisines.join(",")}</div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
