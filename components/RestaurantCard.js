import "./RestaurantCard.css";

const RestaurantCard = ({ data }) => {
  console.log("data", data);
  const imgId = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.cloudinaryImageId}`;
  return (
    <div className="card">
      <div className="img">
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
    </div>
  );
};

export default RestaurantCard;
